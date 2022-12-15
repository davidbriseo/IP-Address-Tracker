import React from "react"

function Header(){
    return (
        <div className="header">
            <div className="container">
                <h1>IP Address Tracker</h1>
                <div className="searchField">
                    <input 
                        placeholder="Search for any IP address or domain" 
                        className="searchField-input"
                    >
                    </input>
                    <button className="searchField-btn">
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
