<x-filament-panels::page>
    <div class="max-w-md mx-auto">
        {{-- Print Button --}}
        <div class="mb-4 flex justify-end no-print">
            <button
                onclick="window.print()"
                class="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 transition"
            >
                Print Receipt
            </button>
        </div>

        {{-- Receipt Card --}}
        <div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-700" id="receipt">
            <div class="text-center mb-6">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">De-Mooiste Cafe</h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Receipt</p>
            </div>

            <div class="border-t border-dashed border-gray-300 dark:border-gray-600 my-4"></div>

            <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                    <span class="text-gray-500">Order #</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $this->order->id }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Customer</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $this->order->customer_name }}</span>
                </div>
                @if($this->order->table)
                <div class="flex justify-between">
                    <span class="text-gray-500">Meja</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $this->order->table->table_number }}</span>
                </div>
                @endif
                <div class="flex justify-between">
                    <span class="text-gray-500">Waktu</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ $this->order->created_at->format('d M Y, H:i') }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Status</span>
                    <span class="font-medium text-gray-900 dark:text-white">{{ ucfirst($this->order->status) }}</span>
                </div>
            </div>

            <div class="border-t border-dashed border-gray-300 dark:border-gray-600 my-4"></div>

            <div class="space-y-3">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pesanan</p>
                @foreach($this->order->orderItems as $item)
                <div class="flex justify-between text-sm">
                    <div class="flex-1">
                        <p class="font-medium text-gray-900 dark:text-white">{{ $item->menuItem->name }}</p>
                        <p class="text-xs text-gray-500">
                            {{ $item->quantity }}x @ Rp {{ number_format($item->price, 0, ',', '.') }}
                        </p>
                        @if($item->note)
                        <p class="text-xs text-gray-400">{{ $item->note }}</p>
                        @endif
                    </div>
                    <span class="font-medium text-gray-900 dark:text-white ml-4">
                        Rp {{ number_format($item->price * $item->quantity, 0, ',', '.') }}
                    </span>
                </div>
                @endforeach
            </div>

            <div class="border-t border-dashed border-gray-300 dark:border-gray-600 my-4"></div>

            <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                    <span class="text-gray-500">Subtotal</span>
                    <span>Rp {{ number_format($this->order->subtotal, 0, ',', '.') }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Pajak (11%)</span>
                    <span>Rp {{ number_format($this->order->tax, 0, ',', '.') }}</span>
                </div>
                <div class="flex justify-between text-base font-bold border-t border-gray-300 pt-2 mt-2">
                    <span>Total</span>
                    <span>Rp {{ number_format($this->order->total, 0, ',', '.') }}</span>
                </div>
            </div>

            <div class="border-t border-dashed border-gray-300 dark:border-gray-600 my-4"></div>

            <div class="text-center">
                <p class="text-sm text-gray-500">Terima kasih!</p>
                <p class="text-xs text-gray-400 mt-1">De-Mooiste Cafe</p>
            </div>
        </div>
    </div>

    <style>
        @media print {
            .no-print, .fi-header, .fi-sidebar, .fi-topbar, nav { display: none !important; }
            body { background: white !important; }
            #receipt { box-shadow: none !important; border: none !important; }
        }
    </style>
</x-filament-panels::page>