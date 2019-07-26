import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const WeaterExtrasInfo = ({humidity, wind}) => (
    <div className = "weatherExtraInfo">
        <span className="extraInfoText">{` Humedad: ${humidity} % - `}</span>
        <span className="extraInfoText">{` Viento: ${wind} `}</span>
    </div>

);

WeaterExtrasInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeaterExtrasInfo;