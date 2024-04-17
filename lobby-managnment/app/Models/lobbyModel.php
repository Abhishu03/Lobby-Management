<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lobbyModel extends Model
{
    use HasFactory;

    protected $table = 'drivers';
    protected $fillable =[
        'name' , 'age' , 'city' , 'vehicle' 
    ];
}
