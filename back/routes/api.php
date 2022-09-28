<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\DigitnumberController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\FollowupController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\CommentController;

use App\Http\Controllers\RessetpasswordController;
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

Route::apiResource('/user', UserController::class);
Route::put('/update-coordinator/{id}', [UserController::class, 'updateCoordinator']);
Route::get('/coordinator', [UserController::class, 'getCoordinators']);



//-------------comment routes-------------/

Route::get('/commentById/{id}', [CommentController::class, 'show']);

// send mail 
Route::post('/sendstudentmail', [MailController::class, 'studentMail']);
Route::post('/sendteachermail', [MailController::class, 'teacherMail']);
Route::post('/sendfollowupstudentmail', [MailController::class, 'studentFollowupMail']);
Route::post('/sendfollowupremovestudentmail', [MailController::class, 'studentFollowupRemoveMail']);
Route::post('/sendcoordinatormail', [MailController::class, 'coordinatorMail']);
Route::post('/deletestudent', [MailController::class, 'deleteStudentList']);
// -------------------------------update only picture profile-----------------------------------
Route::put('/changeProfileImage/{id}', [PhotoController::class, 'update']);

//forget password
Route::put('/newPassword/{id}', [UserController::class, 'forgetPassword']);
// send mail when forget password
Route::post('/forgetPassword', [UserController::class, 'changePassword']);
// reset coordinator password
Route::put('/resetPaswordCoordinator/{id}', [UserController::class, 'ressePasswordCoordinator']);
Route::post('/resetPaswordCoordinator/{id}', [UserController::class, 'compareOldPassword']);

// ---------set digit number to compare ---------
Route::post('/digit', [DigitnumberController::class, 'store']);
Route::put('/digit/{id}', [DigitnumberController::class, 'update']);
Route::get('/digit', [DigitnumberController::class, 'index']);


// ---------- route for history ---------------
Route::apiResource('/history', HistoryController::class);
Route::apiResource('/followup', FollowupController::class);
Route::get('/getAllStudentToPDF', [PDFController::class, 'getAllStudent']);
// ------------------------------Teacher view ------------------------------------------------
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::put('/updateTeacherImage/{id}', [PhotoController::class, 'updateTeacherImage']);
    Route::put('/updateteacher/{id}', [UserController::class, 'updateTeacher']);
    Route::apiResource('/teacher', TeacherController::class);
    Route::apiResource('/student', StudentController::class);
    Route::post('sign-out', [UserController::class, "signOut"]);
});
// --------------------student view ----------------------------------------------------------
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::put('/updateStudentImage/{id}', [PhotoController::class, 'updateStudentImage']);
    Route::put('/ressetPassword/{id}', [RessetpasswordController::class, 'ressePassword']);
    Route::post('/compareRessetPassword/{id}', [RessetpasswordController::class, 'oldPassword']);
    Route::apiResource('/student', StudentController::class);
    Route::apiResource('/comment', CommentController::class);
    Route::post('sign-out', [UserController::class, "signOut"]);
});
