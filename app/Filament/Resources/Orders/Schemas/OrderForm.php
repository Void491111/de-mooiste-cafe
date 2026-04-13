<?php

namespace App\Filament\Resources\Orders\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class OrderForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('customer_name')
                    ->label('Nama Customer')
                    ->required(),
                TextInput::make('table_id')
                    ->label('Table ID')
                    ->disabled(),
                Select::make('status')
                    ->label('Status')
                    ->options([
                        'pending' => 'Pending',
                        'preparing' => 'Preparing',
                        'ready' => 'Ready',
                        'done' => 'Done',
                    ])
                    ->required(),
                TextInput::make('subtotal')
                    ->label('Subtotal')
                    ->disabled()
                    ->prefix('Rp'),
                TextInput::make('tax')
                    ->label('Pajak')
                    ->disabled()
                    ->prefix('Rp'),
                TextInput::make('total')
                    ->label('Total')
                    ->disabled()
                    ->prefix('Rp'),
            ]);
    }
}