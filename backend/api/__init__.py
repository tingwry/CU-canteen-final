from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'Thisissupposedtobesecret!'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/User/Documents/Year 1/Thinc 10 days/tryconnect2/database2.db'

    db.init_app(app)

    from .views import main
    app.register_blueprint(main)

    return app
