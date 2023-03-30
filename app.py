from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HCKPIsGraphAPI import HCKPIsGraphAPI

import pandas as pd

from plotly.subplots import make_subplots
import plotly.graph_objects as go
import plotly.figure_factory as ff
from plotly.io import to_html, to_json
import plotly.express as px

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment test
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    print("test")
    return send_from_directory(app.static_folder,'index.html')

app.route("/plot")
def plot():
    df = pd.read_excel("D:/HassanPersonal/New/HR Analytics/api/HC-2019.xlsx")
    fig = px.scatter(df, x="Qualification", y="Allowances", color="Manager", facet_col="EmpTypeName", facet_row="Work Type", hover_data=["Company","Designation1","Location","DepartmentName"])
    graphJSON = to_json(fig, pretty=True)
    return graphJSON

api.add_resource(HCKPIsGraphAPI, '/hckpis')
