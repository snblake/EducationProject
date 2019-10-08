
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
# import plotly
# import plotly.graph_objs as go
from flask_sqlalchemy import SQLAlchemy

from flask import Flask, jsonify, render_template, url_for, flash, redirect
import pandas as pd

engine = create_engine("sqlite:///db/Performance.sqlite")


conn = engine.connect()
session=Session(engine)

# Define the app as a flask app
app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.Performance'

# Define the home
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route('/scores')
def scores():
    scores_df = pd.read_sql("SELECT * FROM scores", engine)
    scores_df['Mean Scale Score'] = pd.to_numeric(scores_df['Mean Scale Score'], errors='coerce')
#     # return scores_df.to_json(None, 'records')
return (scores_df.groupby('State/District/School')['Mean Scale Score'].mean()).to_json(None, 'split')
#     # return jsonify(['score1', 'score2'])
# #Change just to trigger restart

@app.route('/retention')
def retention():
    retention_df = pd.read_sql("SELECT * FROM retention", engine)
    return (retention_df("Job Classification")['Mean'].mean()).to_json(None, 'split')


# @app.route('budget')

# @app.route('salary')

if __name__ == "__main__":
    app.run(debug=True)

 
    
