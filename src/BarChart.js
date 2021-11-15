import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const colors = { 'TOPIC_0': '#1d5c39', 'TOPIC_2': '#e1e766', 'TOPIC_4':'#0b548b','TOPIC_5': '#98e5d8', 'TOPIC_7':'#c015a2','TOPIC_9':'#0097cd', 'TOPIC_11':'#f4313e', 'TOPIC_12':'#fd8204'}
const getColor = bar => colors[bar.id]
const format = v => `${v}%`

const Chart = ({data}) => {
    return (
        <ResponsiveBar
        data={data}
        keys={[ 'TOPIC_0', 'TOPIC_2', 'TOPIC_4', 'TOPIC_5', 'TOPIC_7', 'TOPIC_9', 'TOPIC_11', 'TOPIC_12']}
        indexBy= "TOPICO"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={getColor}
        labelFormat={format}
        tooltipFormat={format}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Tipo de subcentro',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Porcentaje empleos pertenecientes a cada tipo',
            legendPosition: 'middle',
            legendOffset: -40,
            format
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="black"
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)}

export default Chart;

/*export default function App() {
    return (
      <div style={{ width: 800, height: 500, margin: 'auto' }}>
        <Chart data={data} />
      </div>
    );
  }
*/

