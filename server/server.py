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







if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)