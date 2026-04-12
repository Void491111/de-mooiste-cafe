<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuCategory extends Model
{
    protected $fillable = ['name', 'slug'];

    public function menuItems()
    {
        return $this->hasMany(MenuItem::class, 'category_id');
    }
}