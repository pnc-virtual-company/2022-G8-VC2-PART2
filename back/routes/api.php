<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\DigitnumberController;
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


Route::put('/sendTokenToDatabase/{id}', [PostController::class, 'update']);
Route::post('/sendTokenToDatabase', [PostController::class, 'store']);

Route::post('login', [UserController::class, "login"]);
//-------------users routes-------------/
Route::put('/updateteacher/{id}', [UserController::class, 'updateTeacher']);
Route::apiResource('/user', UserController::class);
Route::get('/getToken', [PostController::class, 'index']);
Route::put('/update-coordinator/{id}',[UserController::class,'updateCoordinator']);
//-------------students routes-------------/
Route::apiResource('/student', StudentController::class);
//-------------teacher routes-------------/
Route::apiResource('/teacher', TeacherController::class);

//forget password
Route::put('/newPassword/{id}', [UserController::class, 'forgetPassword']);
// send mail when forget password
Route::post('/forgetPassword', [UserController::class,'changePassword']);
// reset coordinator password
Route::put('/resetPaswordCoordinator/{id}', [UserController::class, 'ressePasswordCoordinator']);
Route::post('/resetPaswordCoordinator/{id}', [UserController::class, 'compareOldPassword']);

// ---------set digit number to compare ---------
Route::post('/digit',[DigitnumberController::class,'store']);
Route::put('/digit/{id}',[DigitnumberController::class,'update']);
Route::get('/digit',[DigitnumberController::class,'index']);


