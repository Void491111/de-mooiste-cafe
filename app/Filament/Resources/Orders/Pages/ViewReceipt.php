<?php

namespace App\Filament\Resources\Orders\Pages;

use App\Filament\Resources\Orders\OrderResource;
use App\Models\Order;
use Filament\Resources\Pages\Page;

class ViewReceipt extends Page
{
    protected static string $resource = OrderResource::class;

    protected string $view = 'filament.resources.orders.pages.view-receipt';

    public Order $order;

    public function mount(int|string $record): void
    {
        $this->order = Order::with(['orderItems.menuItem', 'table'])->findOrFail($record);
    }

    public function getTitle(): string
    {
        return 'Receipt #' . $this->order->id;
    }
}