from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return "Hello, World!"

@app.route('/greet', methods=['POST'])
def greet():
    name = request.json.get('name', 'Guest')
    return jsonify({"message": f"Hello, {name}!"})

@app.route('/about')
def about():
    return "This is a basic Flask application"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)