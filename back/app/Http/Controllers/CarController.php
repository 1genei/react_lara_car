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
    
    public function show ($car_id){
    
        $car = Car::where('id', '=', $car_id)->first();
        
        return Response()->json([
            "car" => $car,
            "status" => 200
        ]);
    
    }
    
    public function update (Request $request, $car_id){
    
        $car = Car::where('id', '=', $car_id)->first();
        
        $car->brand = $request->marque; 
        $car->modele = $request->modele; 
        $car->type = $request->type; 
        $car->kilometrage = $request->kilometrage; 
        
        
        $car->update();
        
        return Response()->json([
            "message" => "Voiture modifiée",
            "status" => 200
        ]);
    
    }
    
}
