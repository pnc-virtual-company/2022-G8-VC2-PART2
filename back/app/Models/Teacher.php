<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'position',
        'phone',
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
