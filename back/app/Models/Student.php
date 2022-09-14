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
    protected $hidden = [
        'remember_token',
        'created_at',
        'updated_at'
    ];
    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
   
}
