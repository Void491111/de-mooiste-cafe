<?php

namespace App\Filament\Resources\Orders\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class OrdersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('Order #')
                    ->sortable(),
                TextColumn::make('table.table_number')
                    ->label('Meja')
                    ->sortable(),
                TextColumn::make('customer_name')
                    ->label('Customer')
                    ->searchable(),
                TextColumn::make('orderItems.menuItem.name')
                    ->label('Pesanan')
                    ->listWithLineBreaks()
                    ->limitList(3)
                    ->expandableLimitedList(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'warning',
                        'preparing' => 'info',
                        'ready' => 'success',
                        'done' => 'gray',
                        default => 'secondary',
                    }),
                TextColumn::make('total')
                    ->label('Total')
                    ->numeric()
                    ->prefix('Rp ')
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Waktu')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}