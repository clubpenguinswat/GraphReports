let sizeMax = 50;
let sizeMin = 0;

function _(id) {  return document.querySelector(`#${id}`);  }

function updateChart1(namedata, sizedata) {

  let categories = [];
  let sizes = [];
  for (let i = 0; i < sizedata.split(",").length; i++) {
    let size = sizedata.replaceAll(", ", ",");
    size = sizedata.split(",")[i];
    if (namedata.split(",")[i] == `` || namedata.split(",")[i] == ` ` || namedata.split(",")[i] == undefined) {
      categories.push(`(${(i + 1)}) Event`);
    } else {
      categories.push(`(${(i + 1)}) ${namedata.split(",")[i]}`);
    }
    sizes.push(Number(size));
  }

  console.log("---");
  console.log(categories);
  console.log(sizes);

  Highcharts.chart('chart1', {
    chart: {
      type: 'line',
      backgroundColor: '#00000010',
      borderRadius: '10px'
    },
    title: {
      text: 'Weekly Event Size Report',
      style: {
        fontFamily: 'Unbounded, sans-serif'
      }
    },
    xAxis: {
      title: {
        text: 'Events',
        color: '#006900'
      },
      categories: categories
    },
    yAxis: {
      title: {
        text: 'Sizes',
        color: '#006900'
      },
      min: sizeMin,
      max: sizeMax
    },
    series: [{
      name: 'Size',
      data: sizes,
      color: '#006900'
    }]
  });

}

function updateAllCharts() {
  updateChart1(_('chart1names').value, _('chart1sizes').value);
}
