from flask_restful import Resource
import pandas as pd

from plotly.subplots import make_subplots
import plotly.graph_objects as go
import plotly.figure_factory as ff
from plotly.io import to_json
import plotly.express as px

class WorkTypeGraphAPI(Resource):
  def get(self):
    df = pd.read_excel("D:/HassanPersonal/New/HR Analytics/api/HC-2019.xlsx")
    # df["Count"] = df['Work Type'].replace(['Worker', 'Staff'], [1, 1])
    
    fig = px.bar(df, x="Department", height=350, width=350)

    # fig = px.pie(df, values="Count", names="Work Type", hole=0.75, height=350, width=350)
    # fig = px.scatter(df, x="Qualification", y="Allowances", color="Manager", facet_col="EmpTypeName", facet_row="Work Type", hover_data=["Company","Designation1","Location","DepartmentName"])
    graphJSON = to_json(fig, pretty=True)
    return graphJSON
    # return {
    #   'resultStatus': 'SUCCESS',
    #   'message': graphJSON
    #   }

  