<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $fillable = ['customer_id', 'order_status_id', 'order_date', 'departure_date', 'delivery_date', 'purchase_date', 'return_date'];
}
