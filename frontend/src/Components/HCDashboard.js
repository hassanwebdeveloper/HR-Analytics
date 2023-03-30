import React, {useState}from "react";
import HCKPIsGraphs from "./HCKPIsGraphs";
import WorkTypeDetails from "./WorkTypeDetails";

function HCDashboard(){
    const [showDetailsState, setShowDetailsState] = useState({show:false});
    const [workTypeDetailsState, setWorkTypeDetailsState] = useState("");

    function onPieSectionClick(label){
        if (label) {
            setWorkTypeDetailsState(label);
            setShowDetailsState({show:true});
        }
    }

    if (showDetailsState.show) {
        return <WorkTypeDetails onPieSectionClick={onPieSectionClick} workType={workTypeDetailsState}></WorkTypeDetails>
    }else{
        return <HCKPIsGraphs ></HCKPIsGraphs>
    }

    
}

export default HCDashboard