<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LobbyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[LobbyController::class , 'register']);

Route::middleware('auth:sanctum')->get('/registered',[LobbyController::class ,'registered']);

Route::delete('/registered/{name}',[LobbyController::class ,'Deleteregistered']);

Route::post('/login' , [LobbyController::class , 'loginuser']);

Route::get('/existRegister/{name}' , [LobbyController::class , 'singleExistUser']);

Route::post('/existlogin' , [LobbyController::class , 'existlogin']); 