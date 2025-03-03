from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory database to store the URL mappings
url_db = {}

# Generate a random 6-character URL short key
def generate_short_key(length=6):
    import string
    import random
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

@app.route('/shorten', methods=['POST'])
def shorten_url():
    data = request.get_json()
    
    if 'url' not in data:
        return jsonify({"error": "URL is required"}), 400
    
    original_url = data['url']
    short_key = generate_short_key()
    
    # Store the URL in the database (here we're using an in-memory dictionary)
    url_db[short_key] = original_url
    
    return jsonify({"shortened_url": f"http://localhost:5000/{short_key}"}), 201

@app.route('/<short_key>', methods=['GET'])
def redirect_to_url(short_key):
    if short_key not in url_db:
        return jsonify({"error": "URL not found"}), 404
    
    original_url = url_db[short_key]
    return jsonify({"original_url": original_url}), 200

if __name__ == '__main__':
    app.run(debug=True)

