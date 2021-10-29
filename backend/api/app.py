from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config['SECRET_KEY'] = 'Thisissupposedtobesecret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/User/Documents/Year 1/Thinc 10 days/tryconnect2/database.db'

db = SQLAlchemy(app)

class User(db.Model):
    #id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), primary_key=True, unique=True)
    #public_id = db.Column(db.String(50), unique=True)
    firstname = db.Column(db.String(15), unique=False)
    lastname = db.Column(db.String(30), unique=False)
    password = db.Column(db.String(80))
    telephonenumber = db.Column(db.String(16), unique=True)

    #chef = db.Column(db.Boolean)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message' : 'Token is missing!'}), 401

        try: 
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message' : 'Token is invalid'}), 401

        return f(current_user, *args, **kwargs)

    return decorated

#SaveDataMung
@app.route('/user', methods=['GET'])
@token_required
def get_all_users():

    # if not current_user.chef:
    #     return jsonify({'message' : 'Cannot perform that function!'})

    users = User.query.all()

    output = []

    for user in users:
        user_data = {}
        user_data['email'] = user.email
        #user_data['public_id'] = user.public_id
        user_data['firstname'] = user.firstname
        user_data['lastname'] = user.lastname
        user_data['password'] = user.password
        user_data['telephonenumber'] = user.telephonenumber
        #user_data['chef'] = user.chef
        output.append(user_data)

    return jsonify({'users' : output})

#GetDataMung
@app.route('/user/<email>', methods=['GET'])
@token_required
def get_one_user(current_user, public_id):

    # if not current_user.chef:
    #     return jsonify({'message' : 'Cannot perform that function!'})

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message' : 'No user found!'})

    user_data = {}
    user_data['email'] = user.email
    #user_data['public_id'] = user.public_id
    user_data['firstname'] = user.firstname
    user_data['lastname'] = user.lastname
    user_data['password'] = user.password
    user_data['telephonenumber'] = user.telephonenumber
    user_data['chef'] = user.chef

    return jsonify({'user' : user_data})

#Signup?orisitCreateAccountforsomeone?
@app.route('/newuser', methods=['POST'])
#@token_required
def create_user():

    # if not current_user.chef:
    #     return jsonify({'message' : 'Cannot perform that function!'})

    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method = "sha256")

    new_user = User(email=data['email'], firstname=data['firstname'], lastname=data['lastname'], password=hashed_password, telephonenumber=data['telephonenumber'])#, chef=False)
    db.session.add(new_user)
    db.session.commit()

    response = jsonify({'message' : 'New user has been created!'})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

#IsaChef(Promote)
# @app.route('/user/<user_id>', methods=['PUT'])
# @token_required
# def promote_user(current_user, public_id):

#    if not current_user.chef:
#        return jsonify({'message' : 'Cannot perform that function!'})

#     user = User.query.filter_by(public_id=public_id).first()

#     if not user:
#         return jsonify({'message' : 'No user found!'})

#     user.chef = True
#     db.session.commit()

#     return jsonify({'message' : 'The user has been promoted!'})

#DeleteAcc(for no reason)
# @app.route('/user/<public_id>', methods=['DELETE'])
# @token_required
# def delete_user(current_user, public_id):

#    if not current_user.chef:
#        return jsonify({'message' : 'Cannot perform that function!'})

#     user = User.query.filter_by(public_id=public_id).first()

#     if not user:
#         return jsonify({'message' : 'No user found!'})

#     db.session.delete(user)
#     db.session.commit()

#     return jsonify({'message' : 'The user has been deleted!'})

#Login
@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    user = User.query.filter_by(email=auth.username).first()

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    if check_password_hash(user.password, auth.password):
        token = ({'email' : auth.username, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({'token' : token})

    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

if __name__ == '__main__':
    app.run(debug=True)