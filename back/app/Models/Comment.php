<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'studentFollowUp_id',
    ];
    public function users(){
        return $this->belongsTo(User::class,"user_id");
    }
    public function studentFollowUps(){
        return $this->belongsTo(StudentFollowUp::class,"studentFollowUp_id");
    }
}
