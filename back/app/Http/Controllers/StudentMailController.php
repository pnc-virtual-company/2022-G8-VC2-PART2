<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use App\Mail\StudentMail;

class StudentMailController extends UserController
{
   public function studentMail(Request $request){
      $data=[
        "email"=>$request->email,
        "first_name"=>$request->first_name,
      ];

      try
    {
      Mail::to($request->email)->send(new StudentMail($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }     
}
