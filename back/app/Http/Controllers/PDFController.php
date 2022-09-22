<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use PDF;
use App\Mail\sendPDF;
class PDFController extends UserController
{
     /**
    
      *list only student
     *
     * @return \Illuminate\Http\Response
    */
    public function getAllStudent()
    {
        $users = User::get();
            $data = [
                'title' => 'List all students',
                'date' => date('m/d/Y'),
                'users' => $users
            ]; 
            
            $pdf = PDF::loadView('myPDF', $data);
            return $pdf->download('mywebtuts.pdf');
    }
}
