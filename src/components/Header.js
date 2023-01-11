import React from "react"

function Header(props){

    let styles = {
        visibility: props.showWarning? "visible" : "hidden"
    }

    return (
        <div className="header">
            <div className="container">
                <h1>IP Address Tracker</h1>
                <div className="searchField tooltip">
                    <p className="tooltip-text" style={styles}>Input correct search term</p>
                    <input 
                        type="text"
                        placeholder="Search for any IP address or domain" 
                        className="searchField-input"
                        onChange={props.handleChange}
                        onKeyDown={props.handleKeyDown}
                        value={props.inputSearch}
                    >
                    </input>
                    
                    <button className="searchField-btn" onClick={props.handleClick}>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
