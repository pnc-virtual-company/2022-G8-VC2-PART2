<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'profile_img',
        'role',
        'password',
        'email',
        'rememberToken',
        'remember_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'updated_at'
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => "datetime:Y-m-d",
    ];
    public function comments(){
        $commenter = $this->hasMany(Comment::class,"commenter_id");
        // $student = $this->hasMany(Comment::class,"student_id");
        return $commenter;
    }
    public function histories(){
        $tutor = $this->hasMany(History::class,"tutor_id");
        $student = $this->hasMany(History::class,"student_id");
        return [$tutor, $student];
    }
    public function teachers(){
        return $this->hasOne(Teacher::class,"user_id");
    }
    public function students(){
        return $this->hasOne(Student::class,"user_id");
    }
    public function save(array $options = array()) {
        if(isset($this->remember_token))
            unset($this->remember_token);
        return parent::save($options);
    }
  
    
}
