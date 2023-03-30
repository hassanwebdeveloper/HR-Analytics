from flask_restful import Api, Resource, reqparse
import pandas as pd

from plotly.subplots import make_subplots
import plotly.graph_objects as go
import plotly.figure_factory as ff
from plotly.io import to_html, to_json
import plotly.express as px

class HCKPIsGraphAPI(Resource):
  def get(self):
    df = pd.read_excel("D:/HassanPersonal/New/HR Analytics/api/HC-2019.xlsx")
    df["Count"] = df['Work Type'].replace(['Worker', 'Staff'], [1, 1])
    
    hckpis = {}

    hckpis["HeadCount"] = len(df["Code"].unique())

    fig = px.pie(df, values="Count", names="Work Type", hole=0.75, height=350, width=350)
    # fig = px.scatter(df, x="Qualification", y="Allowances", color="Manager", facet_col="EmpTypeName", facet_row="Work Type", hover_data=["Company","Designation1","Location","DepartmentName"])
    graphJSON = to_json(fig, pretty=True)
    hckpis["WorkTypeGrpah"] = graphJSON

    fig1 = px.bar(df, x="Department", height=350, width=350)
    graphJSON1 = to_json(fig1, pretty=True)

    hckpis["DepartmentGrpah"] = graphJSON1

    return hckpis
    # return {
    #   'resultStatus': 'SUCCESS',
    #   'message': graphJSON
    #   }

  