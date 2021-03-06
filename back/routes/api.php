<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CarController;
use App\Http\Controllers\UserController;
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

//Routes pour voir/ajouter/modifier (+ supprimer) les voitures
Route::get('cars', [CarController::class, 'index'])->middleware(['auth:sanctum']);
Route::get('car/{car_id}', [CarController::class, 'show']);
Route::post('car', [CarController::class, 'store']);
Route::put('car/{car_id}', [CarController::class, 'update']);
Route::delete('delete/{car_id}', [CarController::class, 'delete']);

//Routes pour login/register
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout']);


Route::get('users/{id}', function ($id) {
    
});