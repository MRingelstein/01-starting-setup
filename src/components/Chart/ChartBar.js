import React from 'react'
import './ChartBar.css'

const ChartBar = props => {

    let fillHeight = '0%'
    console.log(props.value)
    console.log('maxValue : ' + props.maxValue)
    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue)*100) + '%'
    }
    console.log(fillHeight)
;
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
export default ChartBar