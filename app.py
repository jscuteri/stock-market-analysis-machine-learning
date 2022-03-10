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

# Save references to each table
dia = Base.classes.dia_csv_graphdata
iwm = Base.classes.iwm_csv_graphdata
qqq = Base.classes.qqq_csv_graphdata
spy = Base.classes.spy_csv_graphdata
xlb = Base.classes.xlb_csv_graphdata
xle = Base.classes.xle_csv_graphdata
xli = Base.classes.xli_csv_graphdata
xlk = Base.classes.xlk_csv_graphdata
xlf = Base.classes.xlf_csv_graphdata
xlk = Base.classes.xlk_csv_graphdata
xlp = Base.classes.xlp_csv_graphdata
xlu = Base.classes.xlu_csv_graphdata
xlv = Base.classes.xlv_csv_graphdata
xly = Base.classes.xly_csv_graphdata

# Create our session (link) from Python to the DB
session = Session(engine)

#creating instance of flask
app = Flask(__name__)


# Route to render index.html template using data from postgres
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ddl")
def ddl():
    return jsonify(["DIA","IWM","QQQ","SPY","XLB","XLE","XLF","XLI","XLK","XLP","XLU","XLV","XLY"])

@app.route("/stock")
def stock():

    session = Session(engine)
### DIA
    result = session.query(dia.id,
                           dia.future_x2050,
                           dia.y_predict2050,
                           dia.y_predict,
                           dia.future_x,
                           dia.y_learned,
                           dia.y,
                           dia.xp
    ).all()

    dia_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in result:
        dia_dic = {}
        dia_dic["id"] = id
        dia_dic["future_x2050"] = future_x2050
        dia_dic["y_predict2050"] = y_predict2050
        dia_dic["y_predict"] = y_predict
        dia_dic["future_x"] = future_x
        dia_dic["y_learned"] = y_learned
        dia_dic["y"] = y
        dia_dic["xp"] = xp
        dia_data.append(dia_dic)


### IWM

    iwm_result = session.query(iwm.id,
                           iwm.future_x2050, 
                           iwm.y_predict2050,
                           iwm.y_predict,
                           iwm.future_x,
                           iwm.y_learned,
                           iwm.y,
                           iwm.xp
    ).all()


    iwm_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in iwm_result:
        iwm_dic = {}
        iwm_dic["id"] = id
        iwm_dic["future_x2050"] = future_x2050
        iwm_dic["y_predict2050"] = y_predict2050
        iwm_dic["y_predict"] = y_predict
        iwm_dic["future_x"] = future_x
        iwm_dic["y_learned"] = y_learned
        iwm_dic["y"] = y
        iwm_dic["xp"] = xp
        iwm_data.append(iwm_dic)

### QQQ

    qqq_result = session.query(qqq.id,
                           qqq.future_x2050, 
                           qqq.y_predict2050,
                           qqq.y_predict,
                           qqq.future_x,
                           qqq.y_learned,
                           qqq.y,
                           qqq.xp
    ).all()


    qqq_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in qqq_result:
        qqq_dic = {}
        qqq_dic["id"] = id
        qqq_dic["future_x2050"] = future_x2050
        qqq_dic["y_predict2050"] = y_predict2050
        qqq_dic["y_predict"] = y_predict
        qqq_dic["future_x"] = future_x
        qqq_dic["y_learned"] = y_learned
        qqq_dic["y"] = y
        qqq_dic["xp"] = xp
        qqq_data.append(qqq_dic)

### SPY

    spy_result = session.query(spy.id,
                           spy.future_x2050, 
                           spy.y_predict2050,
                           spy.y_predict,
                           spy.future_x,
                           spy.y_learned,
                           spy.y,
                           spy.xp
    ).all()


    spy_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in spy_result:
        spy_dic = {}
        spy_dic["id"] = id
        spy_dic["future_x2050"] = future_x2050
        spy_dic["y_predict2050"] = y_predict2050
        spy_dic["y_predict"] = y_predict
        spy_dic["future_x"] = future_x
        spy_dic["y_learned"] = y_learned
        spy_dic["y"] = y
        spy_dic["xp"] = xp
        spy_data.append(spy_dic)
    
### XLB

    xlb_result = session.query(xlb.id,
                           xlb.future_x2050, 
                           xlb.y_predict2050,
                           xlb.y_predict,
                           xlb.future_x,
                           xlb.y_learned,
                           xlb.y,
                           xlb.xp
    ).all()


    xlb_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlb_result:
        xlb_dic = {}
        xlb_dic["id"] = id
        xlb_dic["future_x2050"] = future_x2050
        xlb_dic["y_predict2050"] = y_predict2050
        xlb_dic["y_predict"] = y_predict
        xlb_dic["future_x"] = future_x
        xlb_dic["y_learned"] = y_learned
        xlb_dic["y"] = y
        xlb_dic["xp"] = xp
        xlb_data.append(xlb_dic) 

### XLE

    xle_result = session.query(xle.id,
                           xle.future_x2050, 
                           xle.y_predict2050,
                           xle.y_predict,
                           xle.future_x,
                           xle.y_learned,
                           xle.y,
                           xle.xp
    ).all()


    xle_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xle_result:
        xle_dic = {}
        xle_dic["id"] = id
        xle_dic["future_x2050"] = future_x2050
        xle_dic["y_predict2050"] = y_predict2050
        xle_dic["y_predict"] = y_predict
        xle_dic["future_x"] = future_x
        xle_dic["y_learned"] = y_learned
        xle_dic["y"] = y
        xle_dic["xp"] = xp
        xle_data.append(xle_dic)  

### XLF

    xlf_result = session.query(xlf.id,
                           xlf.future_x2050, 
                           xlf.y_predict2050,
                           xlf.y_predict,
                           xlf.future_x,
                           xlf.y_learned,
                           xlf.y,
                           xlf.xp
    ).all()


    xlf_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlf_result:
        xlf_dic = {}
        xlf_dic["id"] = id
        xlf_dic["future_x2050"] = future_x2050
        xlf_dic["y_predict2050"] = y_predict2050
        xlf_dic["y_predict"] = y_predict
        xlf_dic["future_x"] = future_x
        xlf_dic["y_learned"] = y_learned
        xlf_dic["y"] = y
        xlf_dic["xp"] = xp
        xlf_data.append(xlf_dic) 

### XLI

    xli_result = session.query(xli.id,
                           xli.future_x2050, 
                           xli.y_predict2050,
                           xli.y_predict,
                           xli.future_x,
                           xli.y_learned,
                           xli.y,
                           xli.xp
    ).all()


    xli_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xli_result:
        xli_dic = {}
        xli_dic["id"] = id
        xli_dic["future_x2050"] = future_x2050
        xli_dic["y_predict2050"] = y_predict2050
        xli_dic["y_predict"] = y_predict
        xli_dic["future_x"] = future_x
        xli_dic["y_learned"] = y_learned
        xli_dic["y"] = y
        xli_dic["xp"] = xp 
        xli_data.append(xli_dic)

### XLK

    xlk_result = session.query(xlk.id,
                           xlk.future_x2050, 
                           xlk.y_predict2050,
                           xlk.y_predict,
                           xlk.future_x,
                           xlk.y_learned,
                           xlk.y,
                           xlk.xp
    ).all()


    xlk_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlk_result:
        xlk_dic = {}
        xlk_dic["id"] = id
        xlk_dic["future_x2050"] = future_x2050
        xlk_dic["y_predict2050"] = y_predict2050
        xlk_dic["y_predict"] = y_predict
        xlk_dic["future_x"] = future_x
        xlk_dic["y_learned"] = y_learned
        xlk_dic["y"] = y
        xlk_dic["xp"] = xp 
        xlk_data.append(xlk_dic)

### XLP

    xlp_result = session.query(xlp.id,
                           xlp.future_x2050, 
                           xlp.y_predict2050,
                           xlp.y_predict,
                           xlp.future_x,
                           xlp.y_learned,
                           xlp.y,
                           xlp.xp
    ).all()


    xlp_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlp_result:
        xlp_dic = {}
        xlp_dic["id"] = id
        xlp_dic["future_x2050"] = future_x2050
        xlp_dic["y_predict2050"] = y_predict2050
        xlp_dic["y_predict"] = y_predict
        xlp_dic["future_x"] = future_x
        xlp_dic["y_learned"] = y_learned
        xlp_dic["y"] = y
        xlp_dic["xp"] = xp
        xlp_data.append(xlp_dic)

### XLU

    xlu_result = session.query(xlu.id,
                           xlu.future_x2050, 
                           xlu.y_predict2050,
                           xlu.y_predict,
                           xlu.future_x,
                           xlu.y_learned,
                           xlu.y,
                           xlu.xp
    ).all()


    xlu_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlu_result:
        xlu_dic = {}
        xlu_dic["id"] = id
        xlu_dic["future_x2050"] = future_x2050
        xlu_dic["y_predict2050"] = y_predict2050
        xlu_dic["y_predict"] = y_predict
        xlu_dic["future_x"] = future_x
        xlu_dic["y_learned"] = y_learned
        xlu_dic["y"] = y
        xlu_dic["xp"] = xp
        xlu_data.append(xlu_dic) 

### XLV

    xlv_result = session.query(xlv.id,
                           xlv.future_x2050, 
                           xlv.y_predict2050,
                           xlv.y_predict,
                           xlv.future_x,
                           xlv.y_learned,
                           xlv.y,
                           xlv.xp
    ).all()


    xlv_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xlv_result:
        xlv_dic = {}
        xlv_dic["id"] = id
        xlv_dic["future_x2050"] = future_x2050
        xlv_dic["y_predict2050"] = y_predict2050
        xlv_dic["y_predict"] = y_predict
        xlv_dic["future_x"] = future_x
        xlv_dic["y_learned"] = y_learned
        xlv_dic["y"] = y
        xlv_dic["xp"] = xp
        xlv_data.append(xlv_dic) 
    
### XLY

    xly_result = session.query(xly.id,
                           xly.future_x2050, 
                           xly.y_predict2050,
                           xly.y_predict,
                           xly.future_x,
                           xly.y_learned,
                           xly.y,
                           xly.xp
    ).all()


    xly_data = []

    for id, future_x2050, y_predict2050, y_predict, future_x, y_learned, y, xp in xly_result:
        xly_dic = {}
        xly_dic["id"] = id
        xly_dic["future_x2050"] = future_x2050
        xly_dic["y_predict2050"] = y_predict2050
        xly_dic["y_predict"] = y_predict
        xly_dic["future_x"] = future_x
        xly_dic["y_learned"] = y_learned
        xly_dic["y"] = y
        xly_dic["xp"] = xp 
        xly_data.append(xly_dic)

    return jsonify(dia_data, 
                    iwm_data, 
                    qqq_data, 
                    spy_data, 
                    xlb_data, 
                    xle_data, 
                    xlf_data, 
                    xli_data, 
                    xlk_data, 
                    xlp_data, 
                    xlu_data, 
                    xlv_data, 
                    xly_data)

if __name__ == '__main__':
    app.run(debug=True)