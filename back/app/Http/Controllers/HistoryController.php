<?php

namespace App\Http\Controllers;
use App\Models\History;
use App\Models\Teacher;
use App\Models\User;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $history= History::get();
        $data=collect([]);
        $students=collect([]);
        foreach($history as $his){
                $studentTeacher = collect([]);
                $user =User::findOrFail( $his['tutor_id']);
                $studentTeacher->push($user);
                $student =User::findOrFail( $his['student_id']);
                $studentTeacher->push($student);
                $studentTeacher->push($his);
                $data->push($studentTeacher);
            }
            return response()->json(['data'=>$data]);
    }
    public function show($id)
    {
        $user = History::findOrFail($id);
        $data=  User::findOrFail($user['tutor_id']);
        $student=  User::findOrFail($user['student_id']);
        return response()->json(['teacher'=>$data,'student'=>$student]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $history =new History();
        $history->tutor_id = $request->tutor_id;
        $history->student_id = $request->student_id;
        $history->save();
        return response()->json([
            'Message' => 'history Created successfull',
            'Status' => true,
        ], 200);
    }

    

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\History  $history
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\History  $history
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, History $history)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\History  $history
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $history = History::findOrFail($id);
        if ($history) {
            $history->delete();
            return response()->json(['sms' => $history], 201);
        } else {
            return  response()->json(['sms' => 'unsuccessful'], 404);
        }
    }
}
