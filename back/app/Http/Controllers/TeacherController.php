<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function show($id)
    {
        return Teacher::with('user')->findOrFail($id);
    }
    public function destroy($id)
    {
        $teacher = Teacher::findOrFail($id);
        if ($teacher) {
            $teacher->delete();
            return response()->json(['sms' => $teacher], 201);
        } else {
            return  response()->json(['sms' => 'unsuccessful'], 404);
        }
    }
 
 
}
