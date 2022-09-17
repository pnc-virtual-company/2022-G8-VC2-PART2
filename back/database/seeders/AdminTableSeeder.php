<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $user= [
            'first_name' => 'Meng',
            'last_name' => 'Mao',
            'gender' => 'male',
            'email' => 'meng@gmail.com',
            'password' => Hash::make('123456789'),
        ];
        User::create($user);
    }
}
