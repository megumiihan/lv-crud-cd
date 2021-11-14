

<?php

use Illuminate\Support\Facades\Route;
use Resources\js\app;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/
 
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');