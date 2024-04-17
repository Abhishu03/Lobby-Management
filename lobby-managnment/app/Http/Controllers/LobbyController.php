<?php

namespace App\Http\Controllers;

use App\Models\lobbyModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class LobbyController extends Controller
{
    public function register (Request $request){
        $lobby_user['name']=$request->name;
        $lobby_user['age']=$request->age;
        $lobby_user['city']=$request->city;
        $lobby_user['vehicle']=$request->vehicle;
        // $lobby_user['password']=Hash::make($request->password);

        lobbyModel::create($lobby_user);
        return response()->json(['msg'=>$lobby_user] , 200);
    }

    public function registered(){
        $getLobbyData=lobbyModel::get();
        return response()->json(['userData'=>$getLobbyData]);
    }

    public function Deleteregistered(Request $request , $name){
        $deleteLobbyData = lobbyModel::where('name' ,$name)->first()->delete();
        return response('data deleted');
    }

    public function loginuser(Request $request){
        $loginuser['name']=$request->name;
        $loginuser['password']=Hash::make($request->password);

        User::create($loginuser);
        return response()->json(['msg'=>$loginuser] , 200);
    }

    public function existLogin(Request $request)
    {
        try {
            // Validate request parameters
            $validatedData = $request->validate([
                'name' => 'required|string',
                'password' => 'required|string',
            ]);
    
            // Attempt authentication
            if (Auth::attempt($validatedData)) {
                $user = Auth::user();
                $token = $user->createToken('myApp')->plainTextToken;
                
                // Return response with token and user data
                return response()->json([
                    'token' => $token,
                    'user' => $user,
                ], 200);
            } else {
                // Authentication failed
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (\Throwable $th) {
            // Handle exceptions gracefully
            // Log the exception or return a generic error message
            return response()->json(['error' => 'Something went wrong'], 500);
        }
    }

    public function singleExistUser($name){
        {
            $user = lobbyModel::where('name', $name)->first();
            if ($user) {
                return response()->json([
                    'data' => $user,
                ], 200);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'User not found.',
                ], 404);
            }
        }
    }

    // public function loginuser(Request $request){
    //     try{
    //         $login_user['name']=$request->name;
    //         $login_user['password']=$request->password;
    //         if(Auth::attempt($login_user)){
    //             dd($login_user);
    //             $user = Auth::user();
    //             $token = $user->createToken('myApp')->plainTextToken;
    //             return response()->json(["token"=>$token, "data"=>$user], 200);
    //         }else{
    //             return response()->json(["msg"=>"login fail"], 401);
    //         }
    //     } 
    //     catch (\Throwable $th) {
    //         return $th;
    //     }
    // }
    
}
