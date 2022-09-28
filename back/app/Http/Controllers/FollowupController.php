<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Teacher;
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
        $followup= Followup::get();
        $data=collect([]);
        $students=collect([]);
        foreach($followup as $his){
                $studentTeacher = collect([]);
                $user =User::findOrFail( $his['tutor_id']);
                $studentTeacher->push($user);
                $student =User::findOrFail( $his['student_id']);
                $studentTeacher->push($student);
                $studentTeacher->push($his['id']);
                $data->push($studentTeacher);
            }
            return response()->json(['data'=>$data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $followup =new Followup();
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
    // public function show(Followup $followup)
    // {
    //     $followup= Followup::get();
    //     $data=collect([]);
    //     $students=collect([]);
    //     foreach($followup as $his){
    //             $studentTeacher = collect([]);
    //             $user =User::findOrFail( $his['tutor_id']);
    //             $studentTeacher->push($user);
    //             $student =User::findOrFail( $his['student_id']);
    //             $studentTeacher->push($student);
    //             $studentTeacher->push($his['id']);
    //             $data->push($studentTeacher);
    //         }
    //         return response()->json(['data'=>$data]);
    // }
    // public function show($id)
    // {
    //     $user = History::findOrFail($id);
    //     $data=  User::findOrFail($user['tutor_id']);
    //     // $student=  User::findOrFail($user['student_id']);
    //     return response()->json(['teacher'=>$data,'student'=>$student]);
    // }

    public function show($id)
    {        
        $tutor = Followup::where('student_id', $id)->get();
        $tutor[0]['tutor_id'] = User::findOrFail($tutor[0]['tutor_id']);
        $tutor[0]['student_id'] = User::findOrFail($tutor[0]['student_id']);
        return $tutor;
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
