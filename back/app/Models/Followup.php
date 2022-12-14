<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Followup extends Model
{
    use HasFactory;
    protected $fillable=[
        "tutor_id",
        "student_id"
    ];
    public function user(){
        $tutor = $this->belongsTo(User::class, 'tutor_id');
        $student = $this->belongsTo(User::class, 'student_id');
        return [$tutor, $student];
    }
}
