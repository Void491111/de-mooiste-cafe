<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuCategory;
use App\Models\MenuItem;

class MenuController extends Controller
{
    public function categories()
    {
        return MenuCategory::all();
    }

    public function index()
    {
        return MenuItem::with('category')->get();
    }

    public function specialOffers()
    {
        return MenuItem::where('is_special_offer', true)->with('category')->get();
    }

    public function todayPicks()
    {
        return MenuItem::where('is_today_pick', true)->with('category')->get();
    }
}