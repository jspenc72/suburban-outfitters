<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call([
            ProductSeeder::class,
            CustomerSeeder::class,
            CreditCardSeeder::class,
            InventorySeeder::class,
            OrderLineItemSeeder::class,
            OrderSeeder::class,
            OrderStatusSeeder::class,
            ProductSeeder::class,
            SupplierSeeder::class,
            TransactionSeeder::class            
        ]);        
    }
}
