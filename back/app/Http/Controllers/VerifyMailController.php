<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use App\Mail\MailNotify;

class VerifyMailController extends UserController
{
   public function mailNotifyAction(Request $request){
      $data=[
        "subject"=>"PNC Students Follow up",
        "body"=>"Hello be love student, You are in a following up student.",
        "email"=>$request->email
      ];

      try
    {
      Mail::to($request->email)->send(new MailNotify($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }     
}
