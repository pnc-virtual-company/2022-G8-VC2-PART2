<?php

namespace App\Http\Controllers;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
        return Comment::with('user.teachers')->orderBy('id', 'DESC')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate(
            [
                'commenter_id' => 'required',
                'student_id' => 'required',
                'paragraph' => 'required',
            ]
        );
        $comment =new Comment();
        $comment->commenter_id = $request->commenter_id;
        $comment->student_id = $request->student_id;
        $comment->paragraph = $request->paragraph;

        $comment->save();
        return response()->json([
            'Message' => 'Comment Created successfull',
            'Status' => true,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comment =Comment::with('user.teachers')->get();
        $collectComment = collect([]);
        foreach($comment as $com){
            if($com['student_id']==$id){
                $collectComment->push($com);
            }
        }
        return $collectComment;

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentRequest  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate(
            [
                'paragraph' => 'required',
            ]
        );
        $updateComment = Comment::findOrFail($id);
        $updateComment->paragraph = $request->paragraph;
        $updateComment->save();
        return response()->json([
            'Message' => 'Comment Updated successfull',
            'Status' => true,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Comment::destroy($id);
    }
}
