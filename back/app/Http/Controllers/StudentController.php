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
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Student::with('user')->findOrFail($id);
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
        $validatedData = $request->validate([
            'studentNumber'=>'String|required',
            'class'=>'required',
            'batch'=>'required',
            'phone'=>'required|nullable|numeric|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'ngo'=>'required',
            'province'=>'required|String',
        ],
        [
            'studentNumber.required'=>'You have to show your Student ID',
            'class.required'=>'Class is required',
            'batch.required'=>'Batch is required',
            'phone.max'=>'You must put your phone number only 9 number',
            'phone.numeric'=>'You can put only number',
            'ngo.required'=>'You have to put NGO or school',
            'province.required'=>'You have to put your place',
        ]
    );
        $studentUpdate = Student::findOrFail($id);
        $studentUpdate->update($validatedData);
        return response()->json([
            'Message' =>'Update is successfull',
            'Status'=>true,
            'Data'=>$studentUpdate,
        ],200);
    }
  
}