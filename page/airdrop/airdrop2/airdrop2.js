function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function





fetch('https://api.flipsidecrypto.com/api/v2/queries/46d51bdd-ce5f-4e46-a0c8-b868b3059406/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    claimer:[...t.claimer,i.CLAIMER],
    op:[...t.op,i.OP] , 
    avg:[...t.avg,i.AVG]  ,
    median:[...t.median,i.MEDIAN] 

  }

},{claimer:[]
  ,op:[],avg:[],median:[]
})

document.getElementById("first-box").innerHTML = increment(data[0].CLAIMER)
document.getElementById("second-box").innerHTML = increment(data[0].OP)
document.getElementById("third-box").innerHTML = (Math.floor(data[0].MEDIAN)*10)/10
document.getElementById("fourth-box").innerHTML = (Math.floor(data[0].AVG)*10)/10


})








   
chart1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' 
    }
  },
  legend: {
    left: 'left' 
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: []
  },
  series: [
    {
      name: 'Total OP Airdrop',
      type: 'bar',
      stack: 'total',
      color:['#FD4592'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,0,815100000]
    },
    {
      name: '#1 OP Airdroped',
      type: 'bar',
      stack: 'total',
      color:['#ED93B9'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,214700000]
    },
    {
      name: '#2 OP Airdroped',
      type: 'bar',
      stack: 'total',
      color:['#F0F23A'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[11740000,0]
    }
  ]
};
echarts.init(document.getElementById('chart1')).setOption(chart1);



fetch('https://api.flipsidecrypto.com/api/v2/queries/a0d9fadd-6833-4fc8-9c1e-1065592b3c20/data/latest').then(res=>res.json()).then(data=>{

  let selectedProps = data.reduce((acc, curr) => {
    let { WALLETS:value,TYPE:name } = curr;
    return [...acc, { value,name }];
  }, []);
  
chart2 = {
  
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right'
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['20%','80%'],
      

            color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      data: selectedProps,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
 echarts.init(document.getElementById('chart2')).setOption(chart2);
})
 



chart3 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
 show:false
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['30%','70'],
      

            color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      data: [
        { value: 206033, name: 'No Bonus' },
        { value: 53529, name: '5% Bonus' },
        { value: 39531, name: '10% Bonus' },
        { value: 6320, name: '50% Bonus' },
        { value:2552, name: '100% Bonus' }

      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
   echarts.init(document.getElementById('chart3')).setOption(chart3);





chart4 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show:false

   },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['30%','70'],
      

            color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      data: [
        { value: 30762, name: 'Active Snapshot' },
        { value: 23089, name: 'OP Delegated x Days' },
        { value: 52438, name: 'made transactions' },
        { value: 55470, name: 'Spent ≥ $20 on Gas Fees' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
echarts.init(document.getElementById('chart4')).setOption(chart4);





chart5 = {
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show:false

  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['30%','70'],
      

            color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      data: [
        { value: 57204, name: 'Governance Delegation Reward' },
        { value: 280057, name: 'Gas Usage Reward' }

      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
echarts.init(document.getElementById('chart5')).setOption(chart5);


