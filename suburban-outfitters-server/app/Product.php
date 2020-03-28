<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = ['name', 'category', 'supplier_id', 'price', 'size', 'image_url', 'gender', 'type'];
}
