<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
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
        for ($x = 0; $x <= 20; $x++) {
            DB::table('products')->insert([
                'name' => $faker->sentence(5),
                'supplier_id' => $faker->randomDigit(),
                'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100),
                'category' => $faker->randomElement(['womens', 'mens', 'kids', 'accessories']),
                'size' => $faker->randomElement(['sm', 'md', 'lg']),
                'image_url' => $faker->imageUrl(640, 480, 'technics'),
                'gender' => $faker->randomElement(['mens', 'womens']),
                'type' => $faker->randomElement(['sm', 'md', 'lg']),             
            ]);            
        } 
    }
}
