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
       $student = new Student();
       $student->user_id = $request->user_id;
       $student->studentNumber = $request->studentNumber;
       $student->class = $request->class;
       $student->batch = $request->batch;
       $student->phone = $request->phone;
       $student->ngo = $request->ngo;
       $student->province = $request->province;
       $student->save();
       return response()->json(['sms'=>$student]);

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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
