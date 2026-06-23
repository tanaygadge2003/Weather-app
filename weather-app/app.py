from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_KEY = "96c275eaa6b6439dbe054105262306"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/weather')
def weather():
    location = request.args.get('location')

    url = f"http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={location}&aqi=yes"

    response = requests.get(url)
    data = response.json()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)