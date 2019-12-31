from flask import Flask
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)

CORS(app)

@app.route('/hello_world')
@cross_origin()
def hello_world():
    print('Called Hello World')
    return { "response": 'Hello, World!',
             "random": "{}".format(random.randint(0, 10)) }, 200
