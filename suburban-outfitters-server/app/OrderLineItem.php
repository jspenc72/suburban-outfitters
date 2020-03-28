<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderLineItem extends Model
{
    //
    protected $fillable = ['order_id', 'product_id', 'inventory_id', 'quantity'];
}
