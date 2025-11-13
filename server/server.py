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

    db = client["hotels_and_users"]
    users_collection = db["users"]

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
<<<<<<< HEAD
=======
    name = data.get("name")
    description = data.get("description")
>>>>>>> 8b93908 (hotelPage almost done , need resposnvei)
    image = data.get("image")
    lvl = data.get("lvl")
    rooms = data.get("rooms")

    db = client["hotels_and_users"] 
    hotels_collection = db["hotels"]

    new_hotel = {
        "country": country,
        "city": city,  
<<<<<<< HEAD
=======
        "name": name,
        "description" : description,
>>>>>>> 8b93908 (hotelPage almost done , need resposnvei)
        "image": image,
        "lvl" : lvl,
        "rooms" : rooms
    }

    if hotels_collection.find_one({"country": country} , {"city": city}):
        return jsonify({"message": "Hotel already exists"}), 400

    hotels_collection.insert_one(new_hotel)

    
    
    return jsonify({"message": "Hotel added successfully"}), 200


@app.route("/getAllHotels" , methods=["GET"])
def getAllHotels():
    db = client["hotels_and_users"] 
    hotels_collection = db["hotels"]

    hotels_cursor = hotels_collection.find()

    print(hotels_cursor)
    
    hotels = []

    for hotel in hotels_cursor:
        hotel["_id"] = str(hotel["_id"]) 
        print(hotel)
        hotels.append(hotel)
    return jsonify(hotels), 200


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)