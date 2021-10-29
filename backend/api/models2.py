from . import db

class MenuTry2(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    menu = db.Column(db.String(50))
    price = db.Column(db.Integer)
    amountLeft = db.Column(db.Integer)