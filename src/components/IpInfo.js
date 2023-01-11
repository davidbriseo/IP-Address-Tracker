import React from "react";

function IpInfo(props){

    return(
        <div className="ipInfo"> 
            <div className="columns">
                <div className="col">
                    <h3 className="col-title">IP Adress</h3>
                    <p className="col-info">{props.ipData.ip}</p>
                </div>
                <div className="col">
                    <h3 className="col-title">Location</h3>
                    <p className="col-info">
                        {
                            props.ipData.location?
                                `${props.ipData.location.city} ${props.ipData.location.region} ${props.ipData.location.postalCode}`
                                : "-"
                        }
                    </p>
                </div>
                <div className="col">
                    <h3 className="col-title">Timezone</h3>
                    <p className="col-info">
                        {
                            props.ipData.location?
                                props.ipData.location.timezone
                                : "-"
                        }
                    </p>
                </div>
                <div className="col">
                    <h3 className="col-title">ISP</h3>
                    <p className="col-info">{props.ipData.isp}</p>
                </div>
            </div>
        </div>
    )
}

export default IpInfo