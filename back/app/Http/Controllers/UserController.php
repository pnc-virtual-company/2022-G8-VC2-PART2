<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
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
                'profile_img'=>'nullable',
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
        $user=User::create($validatedData);
        return response()->json(['sms' => $user], 201);
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
        $user = User::findOrFail($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->gender = $request->gender;
        $user->profile_img = $request->profile_img;
        $user->role = $request->role;
        $user->email = $request->email;
        $user->save();

        return response()->json(['sms' => $user], 201);
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
