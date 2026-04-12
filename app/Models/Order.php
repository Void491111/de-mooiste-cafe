<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'table_id', 'customer_name', 'status',
        'subtotal', 'tax', 'total',
    ];

    public function table()
    {
        return $this->belongsTo(Table::class, 'table_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}