<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with('students')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate(
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'gender' => 'required',
                'profile_img' => 'nullable',
                'role' => 'required|digits_between:1,3|numeric',
                'password' => 'required|min:8',
                'email' => 'required|email|unique:users|regex:/(.+)@(.+)\.(.+)/i|',
            ],
            [
                'first_name.required' => 'First Name field is required.',
                'last_name.required' => 'Last Name field is required.',
                'gender.required' => 'You must confirm your gender',
                'role.digits_between' => 'role 1 role student, 2 role teacher , 3 role coordinator',
                'role.numeric' => 'Role must only number',
                'password.required' => 'password field is required.',
                'password.min' => 'Password length at least 8',
                'email.email' => 'Email field is required.',
                'email.unique' => 'Email field must be unique',
                'email.regex' => 'Email field must join with @',
            ]
        );
        $validatedData['password'] = bcrypt($validatedData['password']);
        $user = User::create($validatedData);
        $token = $user->createToken('myTOken')->plainTextToken;
        if ($request->role == 1) {
            $student = new Student();
            $id = User::latest()->first();
            $student->user_id = $id['id'];
            $student->studentNumber = $request->studentNumber;
            $student->class = $request->class;
            $student->province = $request->province;
            $student->batch = $request->batch;
            $student->phone = $request->phone;
            $student->ngo = $request->ngo;
            $student->province = $request->province;
            $student->save();
            return response()->json(['message' => "Created student successfully"]);
        } else if ($request->role == 2) {
            $student = new Teacher();
            $id = User::latest()->first();
            $student->user_id = $id['id'];
            $student->position = $request->position;
            $student->save();
            return response()->json(['message' => "Created teacher successfully"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::with('students')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate(
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'gender' => 'required',
                'role' => 'required|digits_between:1,3|numeric',
                'email' => 'required|email|unique:users|regex:/(.+)@(.+)\.(.+)/i|',
            ],
            [
                'first_name.required' => 'First Name field is required.',
                'last_name.required' => 'Last Name field is required.',
                'gender.required' => 'You must confirm your gender',
                'role.digits_between' => 'role 1 role student, 2 role teacher , 3 role coordinator',
                'role.numeric' => 'Role must only number',
                'email.email' => 'Email field is required.',
                'email.unique' => 'Email field must be unique',
                'email.regex' => 'Email field must join with @',
            ]
        );

        $userUpdate = User::findOrFail($id);
        $userUpdate->update($validatedData);
        return response()->json([
            'Message' => 'Update is successfull',
            'Status' => true,
            'Data' => $userUpdate,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if ($user) {
            $user->delete();
            return response()->json(['sms' => 'successful'], 201);
        } else {
            return  response()->json(['sms' => 'unsuccessful'], 404);
        }
    }
}
