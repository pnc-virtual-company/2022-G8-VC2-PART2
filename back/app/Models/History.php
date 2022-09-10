<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    protected $fillable = [
        'studentFollowUp_id',
    ];
    public function studentFollowUps(){
        return $this->belongsTo(StudentFollowUp::class);
    }
}
