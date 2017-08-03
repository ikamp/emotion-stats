<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$apiRoute = "/api/";

Route::get($apiRoute, function () {
    return view('index');
});

Route::group(['middleware' => 'checkIfManager'], function () use ($apiRoute) {
    Route::resource($apiRoute . 'employee', 'EmployeeController');
});

Auth::routes();

Route::get($apiRoute . 'home', 'HomeController@index')->name('home');
