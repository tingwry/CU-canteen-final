from flask import Blueprint, request, jsonify, make_response, session
from flask.json import jsonify
from . import db
from .models import OrderTry
from .models2 import MenuTry2
from .models3 import User
from .models4 import rUser
import sqlite3 as sql
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps
from flask_cors import CORS

main = Blueprint('main', __name__)

@main.route('/add_order', methods=['POST'])
def add_order():
    if not request.is_json:
        return "Invalid JSON", 400

    
    new_order = OrderTry(dish=request.json['dish'], customer=request.json['customer'], amount=request.json['amount'])
    
    db.session.add(new_order)
    db.session.commit()

    # amount decreased
    orders_list = OrderTry.query.all()
    orders = []

    menu_list = MenuTry2.query.all()
    menu = []

    for order in orders_list:
         orders.append({'dish' : order.dish, 'customer' : order.customer, 'amount' : order.amount})
    
    for eachMenu in menu_list:
        menu.append({'menu' : eachMenu.menu, 'price' : eachMenu.price, 'amountLeft' : eachMenu.amountLeft})
    
    # # count amount of ordered khaomunkai
    ordered_khaomunkai = 0

    for row in orders:
        if (row["dish"] == "khaomunkai") :
            ordered_khaomunkai += row["amount"]

    # # delete amount of khaomunkai
    for i in menu:
        if (i["menu"] == "khaomunkai") :
            i["amountLeft"] -= ordered_khaomunkai
            
    # # count amount of ordered khaomunmoo
    ordered_khaomunmoo = 0

    for row in orders:
        if (row["dish"] == "khaomunmoo") :
            ordered_khaomunmoo += row["amount"]

    # delete amount of khaomunmoo
    for i in menu:
        if (i["menu"] == "khaomunmoo") :
            i["amountLeft"] -= ordered_khaomunmoo

    # # count amount of ordered khaomunped
    ordered_khaomunped = 0

    for row in orders:
        if (row["dish"] == "khaomunped") :
            ordered_khaomunped += row["amount"]
    
    # # delete amount of khaomunped
    for i in menu:
        if (i["menu"] == "khaomunped") :
            i["amountLeft"] -= ordered_khaomunped
    
    # count amount of ordered khaomunpla
    ordered_khaomunpla = 0

    for row in orders:
        if (row["dish"] == "khaomunpla") :
            ordered_khaomunpla += row["amount"]

    # delete amount of khaomunpla
    for i in menu:
        if (i["menu"] == "khaomunpla") :
            i["amountLeft"] -= ordered_khaomunpla

    #----
    khaomunkaiLeft = menu[0]["amountLeft"]
    khaomunmooLeft = menu[1]["amountLeft"]
    khaomunpedLeft = menu[2]["amountLeft"]
    khaomunplaLeft = menu[3]["amountLeft"]
    
    # Decrease the amount
    conn = sql.connect('database2.db')
    cur = conn.cursor()

    cur.execute("UPDATE menu_try2 SET amountLeft = ? where menu='khaomunkai'", (khaomunkaiLeft,))
    cur.execute("UPDATE menu_try2 SET amountLeft = ? where menu='khaomunmoo'", (khaomunmooLeft,))
    cur.execute("UPDATE menu_try2 SET amountLeft = ? where menu='khaomunped'", (khaomunpedLeft,))
    cur.execute("UPDATE menu_try2 SET amountLeft = ? where menu='khaomunpla'", (khaomunplaLeft,))

    conn.commit()

    return 'Done', 201
@main.route('/orders')
def orders():
    orders_list = OrderTry.query.all()
    orders = []

    for order in orders_list:
         orders.append({'dish' : order.dish, 'customer' : order.customer, 'amount' : order.amount})

    # clear table
    conn = sql.connect('database2.db')
    cur = conn.cursor()

    cur.execute("DELETE FROM order_try")
    conn.commit()
    
    return jsonify({'orders' : orders})


#@main.route('/orders/<int: >')

@main.route('/allMenu')
def allMenu():
    allMenu = MenuTry2.query.all()
    allMenuList = []

    for i in allMenu:
        allMenuList.append({'id' : i.id, 'menu' : i.menu, 'price' : i.price, 'amountLeft' : i.amountLeft})


    return jsonify({'allMenu' : allMenuList})

@main.route('/allMenu/1')
def row1():
    allMenu = MenuTry2.query.all()
    allMenuList = []

    for i in allMenu:
        allMenuList.append({'id' : i.id, 'menu' : i.menu, 'price' : i.price, 'amountLeft' : i.amountLeft})


    return jsonify(allMenuList[0])

@main.route('/allMenu/2')
def row2():
    allMenu = MenuTry2.query.all()
    allMenuList = []

    for i in allMenu:
        allMenuList.append({'id' : i.id, 'menu' : i.menu, 'price' : i.price, 'amountLeft' : i.amountLeft})


    return jsonify(allMenuList[1])

@main.route('/allMenu/3')
def row3():
    allMenu = MenuTry2.query.all()
    allMenuList = []

    for i in allMenu:
        allMenuList.append({'id' : i.id, 'menu' : i.menu, 'price' : i.price, 'amountLeft' : i.amountLeft})


    return jsonify(allMenuList[2])

@main.route('/allMenu/4')
def row4():
    allMenu = MenuTry2.query.all()
    allMenuList = []

    for i in allMenu:
        allMenuList.append({'id' : i.id, 'menu' : i.menu, 'price' : i.price, 'amountLeft' : i.amountLeft})


    return jsonify(allMenuList[3])

@main.route('/add_menu', methods=['POST'])
def add_menu():
    if not request.is_json:
        return "Invalid JSON", 400
    #order_data = request.get_json()

    #print(order_data)
    
    new_menu = MenuTry2(menu=request.json['menu'], price=request.json['price'], amountLeft=request.json['amountLeft'])
    
    db.session.add(new_menu)
    db.session.commit()

    return 'Done', 201


# @main.route('/order_amount')
# def order_amount():
#     ordered_menu = OrderTry.query.filter_by(dish='admin').first()
#     ordered_menu.email = 'my_new_email@example.com'
#     db.session.commit()

#     user = User.query.get(5)
#     user.name = 'New Name'
#     db.session.commit()

# sign up
@main.route('/newuser', methods=['POST'])
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
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response

#Login
@main.route('/login', methods=['GET','POST'])
def login():
    #auth = request.authorization
    auth = request.get_json()

    # if not auth or not auth.username or not auth.password:
    #     return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    # user = User.query.filter_by(email=auth.username).first()

    # if not auth or not auth["username"] or not auth["password"]:
    #     return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    user = User.query.filter_by(email=auth['username']).first()
    # if user:
    #     #if check_password_hash(user.password, form.password.data):
    #     #if user.password == auth["password"]:
    #         # login_user(user, remember=form.remember.data)
    #         #return redirect(url_for('index'))
    #         return ''
    # return '<h1>Invalid studentid or password</h1>'

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    if check_password_hash(user.password, auth["password"]):
        token = ({'email' : auth["username"], 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)})#, app.config['SECRET_KEY'])

        return jsonify({'token' : token})

    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

# sign up res
@main.route('/rnewuser', methods=['POST'])
#@token_required
def create_ruser():

    # if not current_user.chef:
    #     return jsonify({'message' : 'Cannot perform that function!'})

    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method = "sha256")

    new_user = rUser(email=data['email'], firstname=data['firstname'], lastname=data['lastname'], password=hashed_password, telephonenumber=data['telephonenumber'], restaurantname=data['restaurantname'])#, chef=False)
    db.session.add(new_user)
    db.session.commit()

    response = jsonify({'message' : 'New user has been created!'})
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response

#Login res
@main.route('/rlogin', methods=['GET','POST'])
def rlogin():
    #auth = request.authorization
    auth = request.get_json()

    # if not auth or not auth.username or not auth.password:
    #     return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    # user = User.query.filter_by(email=auth.username).first()

    # if not auth or not auth["username"] or not auth["password"]:
    #     return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    user = rUser.query.filter_by(email=auth['username']).first()
    # if user:
    #     #if check_password_hash(user.password, form.password.data):
    #     #if user.password == auth["password"]:
    #         # login_user(user, remember=form.remember.data)
    #         #return redirect(url_for('index'))
    #         return ''
    # return '<h1>Invalid studentid or password</h1>'

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

    if check_password_hash(user.password, auth["password"]):
        token = ({'email' : auth["username"], 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)})#, app.config['SECRET_KEY'])

        return jsonify({'token' : token})

    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm ="Login Required!"'})

# @main.route('/logout')
# def logout():
#     if 'username' in session:
#         session.pop('username', None)
#     return jsonify({'message': 'You successfully logged out'})