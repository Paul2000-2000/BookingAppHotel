from flask import Flask, jsonify , request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)  

uri = os.getenv("MONGO_URI")


client = MongoClient(uri)






@app.route("/addUser" ,  methods=["POST"])
def addUser():
 
    data = request.get_json()

    email = data.get("emailRegister")
    password = data.get("passwordRegister")
    name = data.get("nameRegister")

    db = client["hotels_and_users"] ## selectam baza de date
    users_collection = db["users"] ## selectez colectia din baza de date

    new_user = {
        "email": email,
        "password": password,  
        "name": name
    }

    if users_collection.find_one({"email": email}):
        return jsonify({"message": "User already exists"}), 400

    users_collection.insert_one(new_user)

    
    
    return jsonify({"message": "User added successfully"}), 200


@app.route("/addHotel" ,  methods=["POST"])
def addHotel():
 
    data = request.get_json()

    country = data.get("country")
    city = data.get("city")
    image = data.get("image")
    lvl = data.get("lvl")
    rooms = data.get("rooms")

    db = client["hotels_and_users"] ## selectam baza de date
    hotels_collection = db["hotels"] ## selectez colectia din baza de date

    new_hotel = {
        "country": country,
        "city": city,  
        "image": image,
        "lvl" : lvl,
        "rooms" : rooms
    }

    if hotels_collection.find_one({"country": country} , {"city": city}):
        return jsonify({"message": "Hotel already exists"}), 400

    hotels_collection.insert_one(new_hotel)

    
    
    return jsonify({"message": "Hotel added successfully"}), 200





if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)