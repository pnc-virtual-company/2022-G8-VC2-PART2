<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    public function user(){
        $tutor = $this->belongsTo(User::class, 'tutor_id');
        $student = $this->belongsTo(User::class, 'student_id');
        return [$tutor, $student];
    }
}
