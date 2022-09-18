<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class CoordinatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coordinator = [
         
            [
               'first_name'=>'Davy',
           'last_name'=>'Taing',
           'gender'=>"female",
           'profile_img'=>null,
           'role'=>3,
           'password'=>bcrypt('coordinator'),
            'email'=>"davy.taing@passerellesnumeriques.org"

            ]
            ];
            foreach($coordinator as $key => $value){
                User::create($value);
            }
    }
}
