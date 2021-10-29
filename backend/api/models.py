from . import db

class OrderTry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer = db.Column(db.String(50))
    dish = db.Column(db.String(50))
    amount = db.Column(db.Integer)

