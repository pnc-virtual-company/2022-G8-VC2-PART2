<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $comment = [
         
            [
             'user_id'=>1,
             'student_id'=>1,
             'paragraph'=>'She is poor in speaking english',

            ],
        
            ];
            foreach($comment as $key => $value){
                Comment::create($value);
            }
    }
    }

