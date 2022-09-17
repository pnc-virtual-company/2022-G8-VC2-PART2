<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return User::with(['students','teachers'])->get();
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
        // role 1 is student and 2 is teacher and 3 is coordinator
        if ($request->role == 1 or $request->role == 2 or $request->role == 3) {
            $validatedData['password'] = bcrypt($validatedData['password']);
            $user = User::create($validatedData);
            if($request->profile_img){
                $user->profile_img = $request->file('profile_img')->hashName();
                $request->file('profile_img')->store('public/images');
                $user->save();
            }else{
                $user->profile_img = null;
                $user->save();
            }
            $token = $user->createToken('myTOken')->plainTextToken;
            //Student role is number 1
            if ($request->role == 1) {
                $student = new Student();
                $id = User::latest()->first();
                $student->user_id = $id['id'];
                $student->studentNumber = $request->studentNumber;
                $student->class = $request->class;
                $student->batch = $request->batch;
                $student->phone = $request->phone;
                $student->ngo = $request->ngo;
                $student->province = $request->province;
                $student->save();
                return response()->json(['message' => "Created student successfully"]);
            }
            //Teacher role is number 2
            else if ($request->role == 2) {
                $teahcer = new Teacher();
                $id = User::latest()->first();
                $teahcer->user_id = $id['id'];
                $teahcer->position = $request->position;
                $teahcer->phone = $request->phone;
                $teahcer->save();
                return response()->json(['message' => "Created teacher successfully"]);
            }else if ($request->role==3){
                $user = User::create($validatedData);
                return response()->json(['message' => "Created Coordinator is  successfully"]);
            }
        }
        return response()->json(['message' => "Cannot create without input your role 1 is student and 2 is teacher"]);
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
                'email' => 'required',
            ]
        );
        $updateStudent=User::with('students')->findOrFail($id);
        if($updateStudent['role']==1){
            if($updateStudent['students']['user_id']==$id){
                if($request->profile_img){
                    $updateStudent->profile_img = $request->file('profile_img')->hashName();
                    $request->file('profile_img')->store('public/images');
                    $updateStudent->save();
                }
                $updateStudent->update($validatedData);
                $updateStudentID=Student::findOrFail($updateStudent['students']['id']);
                $updateStudentID->studentNumber = $request->studentNumber;
                $updateStudentID->class = $request->class;
                $updateStudentID->batch = $request->batch;
                $updateStudentID->phone = $request->phone;
                $updateStudentID->ngo = $request->ngo;
                $updateStudentID->province = $request->province;
                $updateStudentID->save();
                return response()->json([
                    'Message' => 'Update is successfull',
                    'Status' => true,
                    'sms' => $updateStudent['students']['user_id'],
                ], 200);
            }
        }
    }
    public function updateTeacher(Request $request, $id)
    {
        $validatedData = $request->validate(
            [
                'first_name' => 'required',
                'last_name' => 'required',
                'gender' => 'required',
                // 'email' => 'required',
            ]
        );
        $updateTeacher=User::with('teachers')->findOrFail($id);
        if($updateTeacher['role'] == 2){
            if($updateTeacher['teachers']['user_id']==$id){
                if($request->profile_img){
                    $updateTeacher->profile_img = $request->file('profile_img')->hashName();
                    $request->file('profile_img')->store('public/images');
                    $updateTeacher->save();
                }
                if($updateTeacher['email'] != $request['email']){
                    $updateTeacher->email = $request->email;
                    $updateTeacher->save();
                }
                $updateTeacher->update($validatedData);
                $updateTeacherID=Teacher::findOrFail($updateTeacher['teachers']['id']);
                $updateTeacherID->position = $request->position;
                $updateTeacherID->phone = $request->phone;
            
                $updateTeacherID->save();
                return response()->json([
                    'Message' => 'Update Teacher is successfull',
                    'Status' => true,
                    'sms' => $updateTeacher['teachers']['user_id'],
                ], 200);
            }
        }
        
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
