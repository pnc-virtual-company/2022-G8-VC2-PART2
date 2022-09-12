<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Teacher::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateTeacher=$request->validate([
            'user_id'=>'required|numeric',
            'position'=>'required|String',
        ],
        [
            'user_id.required'=>'You have to put your ID',
            'position.required'=>'You have to put your Position',
        ]
    );
       $teacher=Teacher::create($validateTeacher);
       return response()->json(['sms'=>$teacher],201);
    }
    public function update(Request $request,$id)
    {
        $validatedData = $request->validate([
            'position'=>'required|String',
        ],
        [
            'position.required'=>'You have to put your Position',
        ]
    );
        $teacherUpdate = Teacher::findOrFail($id);
        $teacherUpdate->update($validatedData);
        return response()->json([
            'Message' =>'Update is successfull',
            'Status'=>true,
            'Data'=>$teacherUpdate,
        ],200);
    }
}
