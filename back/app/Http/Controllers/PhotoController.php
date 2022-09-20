<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PhotoController extends UserController
{
    

    /**
     * Update coordinator account profile image.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->profile_img = $request->file('profile_img')->hashName();
        $request->file('profile_img')->store('public/images');
        $user->save();
        return response()->json(['sms' => 'successful!'], 201);
    }
    /**
     * Update student account profile image
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateStudentImage(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->profile_img = $request->file('profile_img')->hashName();
        $request->file('profile_img')->store('public/images');
        $user->save();
        return response()->json(['sms' => 'successful!'], 201);
    }
    /**
     * Update Teacher account profile image
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateTeacherImage(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->profile_img = $request->file('profile_img')->hashName();
        $request->file('profile_img')->store('public/images');
        $user->save();
        return response()->json(['sms' => 'successful!'], 201);
    }
}
