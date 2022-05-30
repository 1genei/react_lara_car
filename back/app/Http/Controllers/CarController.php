<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;

class CarController extends Controller
{
    //
    public function index(){
        
        $cars = Car::all();
        
        return Response()->json([
            'cars'=> $cars,            
        ]);
    }
    
    public function store(Request $request){
        
        $car = Car::create([
            "brand" => $request->input('marque'),
            "modele" => $request->input('modele'),
            "type" => $request->input('type'),
            "kilometrage" => $request->input('kilometrage'),
        ]);
        
        return Response()->json([
            "message" => "Voiture enregistrée",
            "status" => 200
        ]);
    }
    
}
