import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const colors = { 'Tipo 1': '#1d5c39','Tipo 2': "#FFDC00",'Tipo 3': '#e1e766', 'Tipo 4':'#0b548b','Tipo 5': '#98e5d8', 'Tipo 6':'#c015a2','Tipo 7':'#0097cd', 'Tipo 8':'#f4313e', 'Tipo 9':'#fd8204'}
const getColor = bar => colors[bar.id]
const format = v => `${v}%`
const theme = {
    //background: "#222222",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555"
        },
        text: {
          fill: "#black"
        }
      },
      legend: {
        text: {
          fill: "black"
        }
      }
    },
    grid: {
      line: {
        stroke: "#555555"
      }
    }
  };

const Chart = ({data}) => {
    return (
        <ResponsiveBar
        data={data}
        keys={[ 'Tipo 1', 'Tipo 2','Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6', 'Tipo 7', 'Tipo 8', 'Tipo 9']}
        indexBy= "TOPICO"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={getColor}
        labelFormat={format}
        tooltipFormat={format}
        theme={theme}
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
            legendOffset: 40,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Porcentaje empleos pertenecientes a cada tipo',
            legendPosition: 'middle',
            legendOffset: -50,
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
                itemTextColor:"black",
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
        tooltip={({ id, value, color }) => (
            <div
                style={{
                    padding: 12,
                    color,
                    background: 'white',
                }}
            >
                {/*<span>Look, I'm custom :)</span>*/}
                {/*<br />*/}
                <strong>
                    {id}: {value}%
                </strong>
            </div>
        )}
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

