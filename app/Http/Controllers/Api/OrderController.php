<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'table_id' => 'required|exists:tables,id',
            'customer_name' => 'required|string',
            'items' => 'required|array|min:1',
            'items.*.menu_item_id' => 'required|exists:menu_items,id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.sweetness_level' => 'required|string',
            'items.*.note' => 'nullable|string',
            'items.*.price' => 'required|integer',
        ]);

        $subtotal = collect($validated['items'])->sum(fn($item) => $item['price'] * $item['quantity']);
        $tax = (int) round($subtotal * 0.11);
        $total = $subtotal + $tax;

        $order = Order::create([
            'table_id' => $validated['table_id'],
            'customer_name' => $validated['customer_name'],
            'status' => 'pending',
            'subtotal' => $subtotal,
            'tax' => $tax,
            'total' => $total,
        ]);

        foreach ($validated['items'] as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'menu_item_id' => $item['menu_item_id'],
                'quantity' => $item['quantity'],
                'sweetness_level' => $item['sweetness_level'],
                'note' => $item['note'] ?? '',
                'price' => $item['price'],
            ]);
        }

        return $order->load('orderItems.menuItem');
    }

    public function show($id)
    {
        return Order::with('orderItems.menuItem', 'table')->findOrFail($id);
    }
}