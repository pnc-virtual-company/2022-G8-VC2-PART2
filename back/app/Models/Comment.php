<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => "datetime:m-d-Y H:i:A",
    ];
    
    public function user(){
        $commenter = $this->belongsTo(User::class,"commenter_id");
        return $commenter;
    }
}
