<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Followup;
use Illuminate\Http\Request;

class FollowupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $followup = Followup::get();
        $data = collect([]);
        foreach ($followup as $his) {
            $studentTeacher = collect([]);
            $user = User::findOrFail($his['tutor_id']);
            $studentTeacher->push($user);
            $student = User::findOrFail($his['student_id']);
            $students = collect([]);
            $studentTeacher->push($student);
            $data->push($studentTeacher);
        }
        return response()->json(['data' => $data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $followup = new Followup();
        $followup->tutor_id = $request->tutor_id;
        $followup->student_id = $request->student_id;
        $followup->save();
        return response()->json([
            'Message' => 'followup Created successfull',
            'Status' => true,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function show(Followup $followup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Followup $followup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Followup $followup)
    {
        //
    }
}
