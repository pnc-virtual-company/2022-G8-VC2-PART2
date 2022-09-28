<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    protected $fillable=[
        "tutor_id",
        "student_id"
    ];
    public function user(){
        $tutor = $this->belongsTo(User::class, 'tutor_id');
        $student = $this->belongsTo(User::class, 'student_id');
        return [$tutor, $student];
    }
<<<<<<< HEAD
        /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => "datetime:Y-m-d",
        'updated_at' => "datetime:Y-m-d",
    ];
=======
  
>>>>>>> 65a5a8cf11f72fd5265d34e100f0f5a60de701cc
}
