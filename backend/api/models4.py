from . import db

class rUser(db.Model):
    #id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), primary_key=True, unique=True)
    #public_id = db.Column(db.String(50), unique=True)
    firstname = db.Column(db.String(15), unique=False)
    lastname = db.Column(db.String(30), unique=False)
    password = db.Column(db.String(80))
    telephonenumber = db.Column(db.String(16), unique=True)
    restaurantname = db.Column(db.String(50), unique=True)