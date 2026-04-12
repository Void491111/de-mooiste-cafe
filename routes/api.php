<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\TableController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\NotificationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Menu
Route::get('/categories', [MenuController::class, 'categories']);
Route::get('/menu', [MenuController::class, 'index']);
Route::get('/menu/special-offers', [MenuController::class, 'specialOffers']);
Route::get('/menu/today-picks', [MenuController::class, 'todayPicks']);

// Tables
Route::get('/tables/{tableNumber}', [TableController::class, 'show']);

// Orders
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders/{id}', [OrderController::class, 'show']);

// Notifications
Route::get('/notifications', [NotificationController::class, 'index']);