from flask import Flask,render_template, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import numpy as np


engine = create_engine("postgresql://postgres:postgres@localhost:5432/**DATABASE**")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
ticker = Base.classes.table
ticker = Base.classes.table
ticker = Base.classes.table
ticker = Base.classes.table

# Create our session (link) from Python to the DB
session = Session(engine)

#creating instance of flask
app = Flask(__name__)


# Route to render index.html template using data from postgres
@app.route("/")
def home():
    return render_template("index.html")



@app.route("/stock")
def stock():

    session = Session(engine)

    result = session.query(db.table, 
                           db.table,
                           db.table,
                           db.table,
                           db.table

    ).all()


    ticker = []

    for stock in result:
        ticker_dic= {}
        ticker_dic["open"] = open
        ticker_dic["close"] = close
        ticker_dic["volume"] = volume
        ticker_dic["Date"] = date
        ticker_dic["Industry"] = industry
        ticker_dic["ticker"] = ticker
        ticker.append(ticker_dic)

    return jsonify(ticker_dic)

