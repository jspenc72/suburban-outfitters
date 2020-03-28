<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CreditCardSeeder extends Seeder
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
        for ($x = 0; $x <= 10; $x++) {
            DB::table('credit_cards')->insert([
                'first_name' => $faker->firstName(),
                'last_name' => $faker->lastName(),
                'card_number' => $faker->creditCardNumber(),
                'expiration' => $faker->creditCardExpirationDate(),
                'customer_id' => $faker->randomDigit()
            ]);
        } 
    }
}
