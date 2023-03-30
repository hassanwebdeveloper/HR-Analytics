import React,{ useEffect, useState }  from "react";
import { Text } from "@fluentui/react";
import Plot from "react-plotly.js";


function HCKPIsGraphs(){
    const [getMessage, setGetMessage] = useState({});
    const [styleState, setStyle] = useState({
        display:"none"
    });

    useEffect(() => {
        fetch('http://localhost:5000/hckpis').then(res => res.json()).then(data => {
            debugger;
        data.DepartmentGrpah = JSON.parse(data.DepartmentGrpah);
        data.WorkTypeGrpah = JSON.parse(data.WorkTypeGrpah);
        setGetMessage(data);
        setStyle({display:"inline-block"});
        });
    }, []);

    function onPlotClick(e){
        // onPieSectionClick(e.points[0].label);
    }

    let plotlyConfig = {displayModeBar: false};

    return (<>
            <Text>{getMessage.HeadCount}</Text>
            <Plot data={getMessage.WorkTypeGrpah.data} layout={getMessage.WorkTypeGrpah.layout} style={styleState} onClick={onPlotClick} config={plotlyConfig} />
            <Plot data={getMessage.DepartmentGrpah.data} layout={getMessage.DepartmentGrpah.layout} style={styleState} config={plotlyConfig} />
        </>);   
}

export default HCKPIsGraphs;