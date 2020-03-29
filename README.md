# suburban-outfitters

# Angular Client Development

Install dependencies

```bash
npm i
```

Start development server

```bash
ng serve
```

# Angular Client Deployment

```bash
ng build --extractCss=true --optimization=false
```
## Compile App for Deployment to github pages.

```bash
ng build --prod --base-href "suburban-outfitters"

```

## Build and run angular app as Docker Container

```bash
docker build -t suburban-outfitters .
```

```bash
docker run suburban-outfitters -p 4200:4200 
```

# Laravel API Development

1. Start a mysql database
2. Run database migrations and see to create populate database with test data

```bash
php artisan migrate:refresh --seed
```

3. Run the developement server

```bash
composer install
```

```bash
php artisan serve
```

# Dependencies

https://cli.angular.io
https://laravel.com
mysql