<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
    public function register(Request $request) {
    
        $validator = Validator::make($request->all(),[
            "name" => "required|string",
            "email" => "required|email|unique:users",
            "password" => "required|string|min:4"
        ]);
        
        if($validator->fails()){
            return Response()->json([
                "error" => $validator->errors(),
                "status" => 400
            ]);
        }
        
        $user = User::create([
            "name" => $request->input("name"),
            "email" => $request->input("email"),
            "password" => Hash::make($request->input("password"))
        ]);

        return Response()->json([
            "message" => "Profil créé",
            "status" => 200
        ], 200);
    }
}
