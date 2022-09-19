<?php

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::put('/sendTokenToDatabase/{id}',[PostController::class,'update']);
Route::post('/sendTokenToDatabase',[PostController::class,'store']);

Route::post('login', [UserController::class,"login"]);
//-------------users routes-------------/
Route::apiResource('/user',UserController::class);
Route::get('/coordinator',[UserController::class,'getCoordinators']);
Route::put('/updateteacher/{id}',[UserController::class,'updateTeacher']);
Route::get('/getToken',[PostController::class,'index']);
//-------------students routes-------------/
Route::apiResource('/student',StudentController::class);
//-------------teacher routes-------------/
Route::apiResource('/teacher',TeacherController::class);





