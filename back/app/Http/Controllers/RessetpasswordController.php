<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
class RessetpasswordController extends UserController
{
     //------------------resset  password
     public function ressePassword(Request $request, $id)
     {
         $user = User::findOrFail($id);
         $user->password = Hash::make($request->password);
         $user->save();
         return response()->json(['sms' => 'Password updated!'], 201);
     }
     // Reset Password 
     public function oldPassword(Request $request, $id)
     {
         $user =  User::findOrFail($id);
         if (Hash::check($request->password, $user['password'])) {
             $user->password = bcrypt($request->new_password);
             $user->save();
             return response()->json(['sms' => 'Password updated!'], 201);
         }
         return response()->json(['sms' => 'Password incorrect!'], 404);
     }
}
