import React from "react";

function IpInfo(){
    return(
        <div className="ipInfo"> 
            <div className="columns">
                <div className="col">
                    <div className="col-title">IP Adress</div>
                    <div className="col-info">IP Adress Info</div>
                </div>
                <div className="col">
                    <div className="col-title">Location</div>
                    <div className="col-info">Location Info</div>
                </div>
                <div className="col">
                    <div className="col-title">Timezone</div>
                    <div className="col-info">Timezone Info</div>
                </div>
                <div className="col">
                    <div className="col-title">ISP</div>
                    <div className="col-info">ISP Info</div>
                </div>
            </div>
        </div>
    )
}

export default IpInfo