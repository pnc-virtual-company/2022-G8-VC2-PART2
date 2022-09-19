<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    
    public function user(){
        $commenter = $this->belongsTo(User::class,"commenter_id");
        $student = $this->belongsTo(User::class,"student_id");
        return [$commenter, $student];
    }
}
