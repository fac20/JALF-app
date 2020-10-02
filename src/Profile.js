import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import './Profile.css';

import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
highchartsMore(Highcharts);

const options = {
  chart: {
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 1000,
      scrollPositionX: 1,
    },
  },
  title: {
    text: 'Blood Glucose Level',
  },
  xAxis: {
    type: 'datetime',
    labels: {
      overflow: 'justify',
    },
  },
  yAxis: {
    title: {
      text: 'BGL (mmol/mL)',
    },
  },

  series: [
    {
      name: 'Blood Glucose Level',
      data: [1, 2, 1, 4, 3, 6, 5, 4, 3, 8, 10, 11, 4, 14, 15, 5, 7],
    },
    {
      name: 'Safe Range',
      data: Array(17).fill([5, 7]),
      type: 'arearange',
      lineWidth: 0,
      color: Highcharts.getOptions().colors[2],
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
        enabled: false,
      },
    },
  ],
};

export default function Profile({ setPage, navigate }) {
  return (
    <>
      <h1>My Profile</h1>
      <figure class='highcharts-figure'>
        <div id='container'>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </figure>
    </>
  );
}
