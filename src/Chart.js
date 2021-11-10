//PIE CHART
import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const data =[
    {
      "id": "go",
      "label": "go",
      "value": 361,
      "color": "hsl(12, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 342,
      "color": "hsl(100, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 63,
      "color": "hsl(149, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 42,
      "color": "hsl(323, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 343,
      "color": "hsl(301, 70%, 50%)"
    }
  ];

const PieChart = ({data}) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        //enableArcLinkLabels = {false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        arcLabelsTextColor="#ffffff"
        colors = {{datum: 'data.color'}}
        valueFormat={value =>
            `${Number(value).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
            })} %`
        }
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
           {
                 match: {
                     id: 'ruby'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'c'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'go'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'python'
                 },
                 id: 'dots'
             },
             {
                 match: {
                     id: 'scala'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'lisp'
                 },
        
                     id: 'lines'
             },
             {
                 match: {
                     id: 'elixir'
                 },
                 id: 'lines'
             },
             {
                 match: {
                     id: 'javascript'
                 },
                 id: 'lines'
             }
         ]}
        /*legends={[
            {
                anchor: 'left',
                direction: 'column',
                justify: false,
                 translateX: -80,
                 translateY: -95,
                itemsSpacing: 5,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#000000',
                itemDirection: 'right-to-left',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}*/
    />
);

export default PieChart;

/*export default function App() {
    return (
      <div style={{ width: 300, height: 300, margin: 'auto' }}>
        <Chart data={data} />
      </div>
    );
  }
*/
