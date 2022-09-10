<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentFollowUp extends Model
{
    use HasFactory;
    protected $fillable = [
        'teacher_id',
    ];
    public function teachers(){
        return $this->belongsTo(Teacher::class,"teacher_id");
    }
    public function students(){
        return $this->belongsTo(Student::class,"student_id");
    }
    public function histories(){
        return $this->hasOne(History::class,"studentFollowUp_id");
    }
    public function comments(){
        return $this->hasMany(Comment::class,"studentFollowUp_id");
    }

}
