<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use App\Mail\CoordinatorMail;

class CoordinatorMailController extends UserController
{
   public function coordinatorMail(Request $request){
      $data=[
        "email"=>$request->email,
        "first_name"=>$request->first_name,
      ];

      try
    {
      Mail::to($request->email)->send(new CoordinatorMail($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }     
}
