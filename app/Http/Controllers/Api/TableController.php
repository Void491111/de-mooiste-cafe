<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Table;

class TableController extends Controller
{
    public function show(string $tableNumber)
    {
        $table = Table::where('table_number', $tableNumber)->firstOrFail();
        return $table;
    }
}