<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\Personal_access_tokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//-------------users routes-------------/
Route::post('login', [UserController::class, "login"]);
//-------------users routes-------------/
Route::put('/sendTokenToDatabase/{id}', [PostController::class, 'update']);
Route::post('/sendTokenToDatabase', [PostController::class, 'store']);
Route::get('/getToken', [PostController::class, 'index']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [UserController::class, 'signOut']);
});
Route::apiResource('/comment', CommentController::class);
Route::apiResource('/user', UserController::class);
Route::put('/updateteacher/{id}', [UserController::class, 'updateTeacher']);
//-------------students routes-------------/
Route::apiResource('/student', StudentController::class);
//-------------teacher routes-------------/
Route::apiResource('/teacher', TeacherController::class);
Route::apiResource('/personalToken', Personal_access_tokenController::class);
