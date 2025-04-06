console.log('hello')

const xValues = ["SUN", "MON", "TUE", "WED", "THU"];
const yValues = [5500, 4995, 2521, 2459, 8000];
const barColors = ["red", "purple","blue","orange","white"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
          
        }
      }]
    },

    title: {
      display: false,
      text: "Weekly sales chart"
    }
  }
});

var xv = ["FaceBook", "Instagram", "Twitter", "X", "Website"];
var yv = [55, 49, 44, 24, 15];
var bColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("mychart2", {
  type: "pie",
  data: {
    labels: xv,
    datasets: [{
      backgroundColor: bColors,
      data: yv
    }]
  },
  options: {
    title: {
      display: true,
      text: "Distributions of sales across platform"
    }
  }
});


const xva = [20000,25000,30000,35000,40000];
const yva = [12500,18000,26844,21005,10566];

new Chart("mychart1", {
  type: "line",
  data: {
    labels: xva,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yva
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 20000, max:40000}}],
    }
  }
});