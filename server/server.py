from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route("/members")
def member():
    return jsonify({"members": ["Member1", "Member2"]})

if __name__ == "__main__":
    app.run(debug=True)