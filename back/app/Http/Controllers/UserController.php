<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Auth;

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
    
    
    public function login (Request $request) {
        
        if(!Auth::attempt($request->only(['email', 'password']))){
        
            return Response()->json([
                "message" => "Email ou mot de passe incorrect",
                "status" =>  401
            
            ]);
        }
        
        
        $user = Auth::user();
        
        $abilities1 = ['edit-car', 'add-car'];
        $abilities2 = ['edit-car', 'add-car','get-cars'];
            
        $token = $user->createToken('token', $abilities2)->plainTextToken;
    
        $cookie = cookie('jwt', $token, 60*24); // 1 jour
        
        // return $cookie;
        return Response()->json([            
            "status" => 200,
            "token" => $token,
            // "cookie" => $cookie,
            "user" => $user
        ])->withCookie("jwt=150%7CUr3seGhOVERXGSDfd8s1EcfOp5ezn61GvS1dNe3Z; expires=Sat, 23-Jul-2022 15:47:27 GMT; Max-Age=86400; path=/;httponly; samesite=lax");
        
        
        
    
    }
    
    
    public function logout(){
    
        $cookie = Cookie::forget('jwt');
        
        return Response()->json([
        
            'message' => 'success'
        ])->withCookie($cookie);
    }
}
