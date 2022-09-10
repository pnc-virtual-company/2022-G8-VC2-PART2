<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'firstName',
    ];
    public function studentFollowUps(){
        return $this->hasOne(StudentFollowUp::class,"teacher_id");
    }
}
