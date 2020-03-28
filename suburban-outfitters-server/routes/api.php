<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    'user' => 'UserController',
    'credit-card' => 'TransactionController',
    'customer' => 'TransactionController',
    'inventory' => 'TransactionController',
    'order-line-item' => 'TransactionController',
    'order-status' => 'TransactionController',
    'product' => 'TransactionController',
    'supplier' => 'TransactionController'
]);

// Route::resource('supplier', 'TransactionController');

Route::get('transactions', 'TransactionController@index');
Route::get('transactions/{transaction}', 'TransactionController@show');
Route::post('transactions', 'TransactionController@store');
Route::put('transactions/{transaction}', 'TransactionController@update');
Route::delete('transactions/{transaction}', 'TransactionController@destroy');
