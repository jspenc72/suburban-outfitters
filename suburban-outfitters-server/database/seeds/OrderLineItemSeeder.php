<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class OrderLineItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker::create();
        for ($x = 0; $x <= 100; $x++) {
            DB::table('order_line_items')->insert([
                'order_id' => $faker->randomDigit(),
                'product_id' => $faker->randomDigit(),
                'inventory_id' => $faker->randomDigit(),
                'quantity' => $faker->randomDigit()
            ]);
        }
    }
}
