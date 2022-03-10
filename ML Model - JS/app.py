from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import stock_predict

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/placeholderdb"
mongo = PyMongo(app)

@app.route("/form")
def index():
    stocksweb = mongo.db.variable_placeholder.find_one()
    return render_template("index.html", variable_placeholder=stocksweb)

@app.route('/data')
def data():
    # create individual variables for each collection
    industry_data = list(db['inudstrydb'].find())

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)