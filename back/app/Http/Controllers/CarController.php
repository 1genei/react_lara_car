<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use Illuminate\Support\Facades\Validator;

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

        $validator = Validator::make($request->all(),[
            "brand" => "required|string",
            "modele" => "required|string",
            "type" => "required|string",
            "kilometrage" => "required|numeric"
        ]);
        
        if($validator->fails()){
            return Response()->json([
                "error" => $validator->errors(),
                "status" => 400
            ]);
        }
        
        $car = Car::create([
            "brand" => $request->input('brand'),
            "modele" => $request->input('modele'),
            "type" => $request->input('type'),
            "kilometrage" => $request->input('kilometrage'),
        ]);
        
        return Response()->json([
            "message" => "Voiture enregistrée",
            "status" => 200
        ], 200);
    }
    
    public function show ($car_id){
    
        $car = Car::where('id', '=', $car_id)->first();
        
        return Response()->json([
            "car" => $car,
            "status" => 200
        ]);
    
    }
    
    public function update (Request $request, $car_id){
    
        $validator = Validator::make($request->all(),[
            "brand" => "required|string",
            "modele" => "required|string",
            "type" => "required|string",
            "kilometrage" => "required|numeric"
        ]);
        
        if($validator->fails()){
            return Response()->json([
                "error" => $validator->errors(),
                "status" => 400
            ]);
        }

        $car = Car::where('id', '=', $car_id)->first();
        
        $car->brand = $request->brand; 
        $car->modele = $request->modele; 
        $car->type = $request->type; 
        $car->kilometrage = $request->kilometrage; 
        
        
        $car->update();
        
        return Response()->json([
            "message" => "Voiture modifiée",
            "status" => 200
        ]);
    
    }

    public function delete ($car_id) {

        Car::where('id','=',$car_id)->delete();

        return Response()->json([
            "message" => "Voiture supprimée",
            "status" => 200
        ]);
    }
    
}
