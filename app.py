from flask import Flask, render_template, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import numpy as np


engine = create_engine("postgresql://postgres:Static2$@localhost:5432/StockMarket")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save references the ETF table
ETF = Base.classes.etf_graphdata

# Create our session (link) from Python to the DB
session = Session(engine)

#creating instance of flask
app = Flask(__name__)


# Route to render index.html template using data from postgres
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_asset_ids")
def ddl():
    return jsonify(["DIA","IWM","QQQ","SPY","XLB","XLE","XLF","XLI","XLK","XLP","XLU","XLV","XLY"])

@app.route("/get_asset_by_asset_id/<id>")
def get_etf_by_id(id=-1):

    session = Session(engine)

    result = session.query(ETF.id,
                           ETF.asset_id,
                           ETF.future_x2050,
                           ETF.y_predict2050,
                           ETF.y_predict,
                           ETF.future_x,
                           ETF.y_learned,
                           ETF.y,
                           ETF.xp).filter_by(asset_id=id).order_by(ETF.id)

    ETF_data = []

    for id, asset_id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in result:
        ETF_dic = {}
        ETF_dic["id"] = id
        ETF_dic["asset_id"] = asset_id
        ETF_dic["future_x2050"] = future_x2050
        ETF_dic["y_predict2050"] = y_predict2050
        ETF_dic["y_predict"] = y_predict
        ETF_dic["future_x"] = future_x
        ETF_dic["y_learned"] = y_learned
        ETF_dic["y"] = y
        ETF_dic["xp"] = xp
        ETF_data.append(ETF_dic)

    return jsonify(ETF_data)

if __name__ == '__main__':
    app.run(debug=True)