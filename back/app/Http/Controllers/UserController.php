<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
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
       $user = new User();
       $user->first_name = $request->first_name;
       $user->last_name = $request->last_name;
       $user->gender = $request->gender;
       $user->profile_img = $request->profile_img;
       $user->role = $request->role;
       $user->password = $request->password;
       $user->email = $request->email;
       $user->save();
    
    return response()->json(['sms'=> $user],201);
    
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
    
    return response()->json(['sms'=> $user],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
