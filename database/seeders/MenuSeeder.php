<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\Table;
use App\Models\Notification;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        // Categories
        $coffee = MenuCategory::create(['name' => 'Coffee', 'slug' => 'coffee']);
        $nonCoffee = MenuCategory::create(['name' => 'Non-Coffee', 'slug' => 'non-coffee']);
        $snack = MenuCategory::create(['name' => 'Snack', 'slug' => 'snack']);
        $dessert = MenuCategory::create(['name' => 'Dessert', 'slug' => 'dessert']);

        // Coffee
        MenuItem::create(['category_id' => $coffee->id, 'name' => 'Espresso Classic', 'description' => 'Kopi espresso murni dengan cita rasa bold dan aroma yang kuat.', 'price' => 28000, 'image' => '/images/menuImages/putih.png', 'rating' => 4.8, 'is_special_offer' => true, 'is_today_pick' => true]);
        MenuItem::create(['category_id' => $coffee->id, 'name' => 'Cappuccino', 'description' => 'Perpaduan sempurna espresso, susu panas, dan foam lembut di atasnya.', 'price' => 35000, 'image' => '/images/menuImages/kuning.png', 'rating' => 4.7, 'is_today_pick' => true]);
        MenuItem::create(['category_id' => $coffee->id, 'name' => 'Ice Shaken Black Peach', 'description' => 'Ledakan rasa buah persik yang cerah dalam pelukan kopi hitam yang pekat.', 'price' => 42000, 'image' => '/images/menuImages/merah.png', 'rating' => 4.7, 'is_special_offer' => true, 'is_today_pick' => true]);
        MenuItem::create(['category_id' => $coffee->id, 'name' => 'Caramel Macchiato', 'description' => 'Espresso lembut dengan lapisan susu manis dan siraman karamel emas.', 'price' => 38000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.6, 'is_today_pick' => true]);
        MenuItem::create(['category_id' => $coffee->id, 'name' => 'V60 Pour Over', 'description' => 'Metode seduh manual yang menghasilkan kopi bersih dengan kompleksitas rasa tinggi.', 'price' => 45000, 'image' => '/images/menuImages/kuning.png', 'rating' => 4.9]);

        // Non-Coffee
        MenuItem::create(['category_id' => $nonCoffee->id, 'name' => 'Matcha Latte', 'description' => 'Matcha premium Jepang yang creamy, dipadukan dengan susu segar.', 'price' => 38000, 'image' => '/images/menuImages/putih.png', 'rating' => 4.7, 'is_special_offer' => true]);
        MenuItem::create(['category_id' => $nonCoffee->id, 'name' => 'Taro Milk Tea', 'description' => 'Teh susu dengan ubi ungu yang kaya, manis alami.', 'price' => 35000, 'image' => '/images/menuImages/kuning.png', 'rating' => 4.5]);
        MenuItem::create(['category_id' => $nonCoffee->id, 'name' => 'Chocolate Hazelnut', 'description' => 'Coklat belgia yang kaya dengan sentuhan hazelnut.', 'price' => 36000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.6]);
        MenuItem::create(['category_id' => $nonCoffee->id, 'name' => 'Strawberry Lemonade', 'description' => 'Perpaduan segar stroberi lokal dan lemon segar.', 'price' => 32000, 'image' => '/images/menuImages/merah.png', 'rating' => 4.4]);

        // Snack
        MenuItem::create(['category_id' => $snack->id, 'name' => 'Grilled Toast', 'description' => 'Roti panggang tebal dengan mentega, madu, atau selai pilihan.', 'price' => 22000, 'image' => '/images/menuImages/putih.png', 'rating' => 4.5, 'is_special_offer' => true]);
        MenuItem::create(['category_id' => $snack->id, 'name' => 'Beef Burger', 'description' => 'Burger daging sapi juicy dengan sayuran segar dan saus spesial.', 'price' => 55000, 'image' => '/images/menuImages/kuning.png', 'rating' => 4.7]);
        MenuItem::create(['category_id' => $snack->id, 'name' => 'Margherita Pizza', 'description' => 'Pizza tipis klasik dengan tomat segar, mozzarella, dan basil.', 'price' => 65000, 'image' => '/images/menuImages/merah.png', 'rating' => 4.6]);
        MenuItem::create(['category_id' => $snack->id, 'name' => 'French Fries', 'description' => 'Kentang goreng renyah dengan garam laut.', 'price' => 28000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.3]);

        // Dessert
        MenuItem::create(['category_id' => $dessert->id, 'name' => 'Tiramisu', 'description' => 'Dessert Italia klasik dengan lapisan krim mascarpone.', 'price' => 45000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.9, 'is_special_offer' => true]);
        MenuItem::create(['category_id' => $dessert->id, 'name' => 'Cheesecake New York', 'description' => 'Cheesecake creamy gaya New York dengan topping buah segar.', 'price' => 42000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.8]);
        MenuItem::create(['category_id' => $dessert->id, 'name' => 'Croissant', 'description' => 'Croissant butter berlapis-lapis yang renyah dan buttery.', 'price' => 32000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.6]);
        MenuItem::create(['category_id' => $dessert->id, 'name' => 'Chocolate Lava Cake', 'description' => 'Kue coklat hangat dengan inti lelehan coklat.', 'price' => 48000, 'image' => '/images/menuImages/biru.png', 'rating' => 4.9]);

        // Table
        Table::create(['table_number' => '93', 'status' => 'available', 'wifi_name' => 'Hicalypse', 'wifi_password' => 'PPPPPPP']);

        // Notifications
        Notification::create(['title' => 'Promo Spesial Hari Ini!', 'message' => 'Dapatkan Grilled Toast + Ice Shaken Black Peach hanya Rp47.000!', 'is_active' => true]);
        Notification::create(['title' => 'Buy 1 Get 1', 'message' => 'Buy 1 Get 1 semua minuman Coffee setiap Senin-Rabu. Yuk order sekarang!', 'is_active' => true]);
        Notification::create(['title' => 'Diskon Dessert', 'message' => 'Diskon 20% untuk semua dessert hari ini. Jangan sampai kehabisan!', 'is_active' => true]);
    }
}