import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function WorkTypeGraph({onPieSectionClick}){
    const [getMessage, setGetMessage] = useState({});
    const [styleState, setStyle] = useState({
        display:"none"
    });

    useEffect(() => {
        fetch('http://localhost:5000/worktypegraph').then(res => res.json()).then(data => {
        setGetMessage(JSON.parse(data));
        setStyle({display:"inline-block"});
        });
    }, []);

    function onPlotClick(e){
        onPieSectionClick(e.points[0].label);
    }

    let plotlyConfig = {displayModeBar: false};

    return <Plot data={getMessage.data} layout={getMessage.layout} style={styleState} onClick={onPlotClick} config={plotlyConfig} />;   


}

export default WorkTypeGraph;