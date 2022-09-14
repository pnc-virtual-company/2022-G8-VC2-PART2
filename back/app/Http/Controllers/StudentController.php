<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function show($id)
    {
        return Student::with('user')->findOrFail($id);
    }
    public function destroy($id)
    {
        $student = Student::findOrFail($id);
        if ($student) {
            $student->delete();
            return response()->json(['sms' => $student], 201);
        } else {
            return  response()->json(['sms' => 'unsuccessful'], 404);
        }
    }
    
}
