<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    use HasFactory;
    protected $fillable=[
        "tokenable",
        "name",
        "token",
        'user_id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
