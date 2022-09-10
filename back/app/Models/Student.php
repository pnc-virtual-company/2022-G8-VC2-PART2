<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'studentNumber',
        'class',
        'batch',
        'phone',
        'ngo',
        'province',
    ];
    public function users(){
        return $this->hasOne(User::class,"user_id");
    }
}
