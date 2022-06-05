import React from "react";

function footer() {
    return (
        <div className={'py-20 px-30'}>
            <p >@ OpenWeather {new Date().getFullYear()}.</p>
        </div>
    );
}

export default footer;
