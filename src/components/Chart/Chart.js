import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    console.log(props.data);
    const valueArray = props.data.map(data => data.value);
    const maxValue = Math.max(...valueArray);
    console.log(maxValue);
    return (
        <div className='chart'>
            {props.data.map(item =>
                <ChartBar
                    key={item.label}
                    value={item.value}
                    label={item.label}
                    maxValue={maxValue}
                />
            )
            }
        </div>
    )
}

export default Chart