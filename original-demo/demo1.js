

var options = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

function clickMe() {
  chart.appendData([{
    data: [{x:[2000, 2001, 2002, 2003, 2004], y:[32, 44, 31, 41, 22]}]
  }])
}