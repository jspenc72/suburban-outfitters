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

// Route::get('transaction', 'TransactionController@index');
// Route::get('transactions/{transaction}', 'TransactionController@show');
// Route::post('transactions', 'TransactionController@store');
// Route::put('transactions/{transaction}', 'TransactionController@update');
// Route::delete('transactions/{transaction}', 'TransactionController@destroy');
