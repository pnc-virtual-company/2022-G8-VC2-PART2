<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Student::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateStudent=$request->validate([
            'user_id'=>'required|numeric',
            'studentNumber'=>'required',
            'class'=>'required',
            'batch'=>'required|String',
            'phone'=>'nullable|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'ngo'=>'required|String',
            'province'=>'required|String',
        ],
        [
            'user_id.required'=>'You have to put your ID',
            'studentNumber.required'=>'You have to show your Student ID',
            'class.required'=>'Class is required',
            'batch.required'=>'Batch is required',
            'phone.max'=>'You must put your phone number only 9 number',
            'phone.numeric'=>'You can put only number',
            'ngo.required'=>'You have to put NGO or school',
            'province.required'=>'You have to put your place',
        ]
    );
       $student=Student::create($validateStudent);
       return response()->json(['sms'=>$student],201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $student = Student::findOrFail($id);
       $student->studentNumber = $request->studentNumber;
       $student->class = $request->class;
       $student->batch = $request->batch;
       $student->phone = $request->phone;
       $student->ngo = $request->ngo;
       $student->province = $request->province;
       $student->save();
       return response()->json(['sms'=>$student]);
    }
}
