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
        return Teacher::all();
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
}
