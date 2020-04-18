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


Route::post('login', 'API\AuthController@login');
Route::post('register', 'API\AuthController@register');
Route::middleware('auth:api')->get('/profile', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    // 'users' => 'UserController',
    'credit-card' => 'CreditCardController',
    'customers' => 'CustomerController',
    'orders' => 'OrderController',
    'products' => 'ProductController',
    'suppliers' => 'SupplierController',
    'inventory' => 'InventoryController',   
    'order-line-item' => 'OrderLineItemController',
    'order-status' => 'OrderStatusController',    
]);



// Route::resource('supplier', 'TransactionController');

// Route::get('customers', 'CustomerController@index');
// Route::get('customers/{customers}', 'CustomerController@show');
// Route::post('customers', 'CustomerController@store');
// Route::put('customers/{customers}', 'CustomerController@update');
// Route::delete('customers/{customers}', 'CustomerController@destroy');

// Route::get('transaction', 'TransactionController@index');
// Route::get('transactions/{transaction}', 'TransactionController@show');
// Route::post('transactions', 'TransactionController@store');
// Route::put('transactions/{transaction}', 'TransactionController@update');
// Route::delete('transactions/{transaction}', 'TransactionController@destroy');
