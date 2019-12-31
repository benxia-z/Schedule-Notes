from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    print('Called Hello World')
    return 'Hello, World!'
