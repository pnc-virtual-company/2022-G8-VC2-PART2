<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'position',
    ];
    protected $hidden = [
        'remember_token',
        'updated_at'
    ];
    protected $casts = [
        'created_at' => "datetime:Y-m-d",
    ];
    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
    
}
