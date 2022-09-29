<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use App\Mail\StudentMail;
use App\Mail\TeacherMail;
use App\Mail\CoordinatorMail;
use App\Mail\StudentFollowupMail;
use App\Mail\StudentFollowupRemoveMail;
use App\Mail\DeleteStudentList;

class MailController extends UserController
{
  // ==============send mail to student====================
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

  // ===========send mail to teacher ===============// 
    public function teacherMail(Request $request){
      $data=[
        "email"=>$request->email,
        "first_name"=>$request->first_name,
      ];

      try
    {
      Mail::to($request->email)->send(new TeacherMail($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }  
  // =========================send mail to coordinator==========================//
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
  // ==================send mail to student following up =======================//
    public function studentFollowupMail(Request $request){
      $data=[
        "email"=>$request->email,
        "first_name"=>$request->first_name,
      ];

      try
    {
      Mail::to($request->email)->send(new StudentFollowupMail($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }     
  // ==================send mail to remove student from follow==================//
    public function studentFollowupRemoveMail(Request $request){
      $data=[
        "email"=>$request->email,
        "first_name"=>$request->first_name,
       
      ];
      try
    {
      Mail::to($request->email)->send(new StudentFollowupRemoveMail($data));
      return response()->json(['Great! Successfully send in your mail']);
    }
    catch(Exception $e)
    {
      return response()->json(['Sorry! Please try again latter']);
    }
  }     
  // ==================send mail to delete student from student list============//
  public function deleteStudentList(Request $request){
    $data=[
      "email"=>$request->email,
      "first_name"=>$request->first_name,
    ];
    try
  {
    Mail::to($request->email)->send(new DeleteStudentList($data));
    return response()->json(['Great! Successfully send in your mail']);
  }
  catch(Exception $e)
  {
    return response()->json(['Sorry! Please try again latter']);
  }
}     
}
