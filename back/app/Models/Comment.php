<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Comment extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    //     'created_at'  => 'm-d-y',
    // ];
    protected $casts = [
        'created_at'  => 'date:m-d-Y H:00:A',
        'updated_at' => 'date:m-d-Y H:00:A'
    ];
    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
}
