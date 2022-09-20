<?php

namespace App\Http\Controllers;

use App\Models\Digitnumber;
use Illuminate\Http\Request;

class DigitnumberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Digitnumber::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $digit =new Digitnumber();
        $digit->digitNumber=$request->digitNumber;
        $digit->save();
        return response()->json(['sms'=>'Digit create successful']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Digitnumber  $digitnumber
     * @return \Illuminate\Http\Response
     */
    public function show(Digitnumber $digitnumber)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Digitnumber  $digitnumber
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $digit =Digitnumber::findOrFail($id);
        $digit->digitNumber=$request->digitNumber;
        $digit->save();
        return response()->json(['sms'=>'Digit update successful']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Digitnumber  $digitnumber
     * @return \Illuminate\Http\Response
     */
    public function destroy(Digitnumber $digitnumber)
    {
        //
    }
}
