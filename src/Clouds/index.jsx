import React from 'react';
import './clouds.css';

const Clouds = ({ numberOfClouds }) => (
    <div id="background-wrap">
        {Array.from({length: numberOfClouds}, (_, i) => (
            <div className={`x${i + 1}`} key={i}>
                <div className="cloud" />
            </div>
        ))}
    </div>
);

export default Clouds;
