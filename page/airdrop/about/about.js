function increment(labelValue) { 
    if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
      if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
      if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}
// closing  converting function



fetch('https://node-api.flipsidecrypto.com/api/v2/queries/f5a09faf-f79a-462b-a136-1f6c80aebcfb/data/latest')

.then((response) => response.json())
.then((data) => document.getElementById("threethin-box").innerHTML = increment(data[0].US));

//

fetch('https://api.flipsidecrypto.com/api/v2/queries/4f9e0aa4-480c-43a7-bb95-baaec07b7f2e/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    claimer:[...t.claimer,i.CLAIMERS],
    op:[...t.op,i.OP] ,
    eligible:[...t.eligible,i.ELIGIBLE_CLAIMERS] ,
    remaining_claimer:[...t.remaining_claimer,i.REMAINING_CLAIMERS],
    remaining_op:[...t.remaining_op,i.REMAINING_OP] ,
    allocation:[...t.allocation,i.OP_AIRDROP_ALLOCATION] ,
    max:[...t.max,i.MAXX_OP] ,
    avg:[...t.avg,i.AVG_OP] , 
    median:[...t.median,i.MEDIAN_OP] 

  }

},{claimer:[]
  ,op:[],eligible:[],allocation:[],avg:[],median:[],
  remaining_claimer:[],remaining_op:[] ,max:[] 
})

document.getElementById("first-box").innerHTML = increment(data[0].CLAIMERS)
document.getElementById("fourth-box").innerHTML = increment(data[0].OP)
document.getElementById("sixth-box").innerHTML = increment(data[0].ELIGIBLE_CLAIMERS)
document.getElementById("third-box").innerHTML = increment(data[0].REMAINING_CLAIMERS)
document.getElementById("fifth-box").innerHTML = increment(data[0].REMAINING_OP)
document.getElementById("second-box").innerHTML = increment(data[0].OP_AIRDROP_ALLOCATION)
document.getElementById("seventh-box").innerHTML = increment(data[0].MAXX_OP)
document.getElementById("eighth-box").innerHTML = increment(data[0].AVG_OP)
document.getElementById("ninth-box").innerHTML = (Math.floor(data[0].MEDIAN_OP)*10)/10


})







// fetch and put them in a single arrays 
fetch('https://api.flipsidecrypto.com/api/v2/queries/4f9e0aa4-480c-43a7-bb95-baaec07b7f2e/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,eligible:[...t.eligible,i.ELIGIBLE_CLAIMERS],remaining:[...t.remaining,i.REMAINING_CLAIMERS],claimer:[...t.claimer,i.CLAIMERS]}
},{eligible:[],remaining:[],claimer:[]}) //Beethovenew Number(2); 
   
   
   
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
      name: 'Eligible Claimer',
      type: 'bar',
      stack: 'total',
      color:['#FD4592'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,newData["eligible"],0,0]
    },
    {
      name: 'Remaining Claimer',
      type: 'bar',
      stack: 'total',
      color:['#ED93B9'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,0, newData["remaining"],0]
    },
    {
      name: 'Total Claimer',
      type: 'bar',
      stack: 'total',
      color:['#F0F23A'] ,
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data:[0,0,0,newData["claimer"]]
    }
  ]
};
echarts.init(document.getElementById('chart1')).setOption(chart1);
    })

fetch('https://api.flipsidecrypto.com/api/v2/queries/bec34f0c-970c-4abb-90d3-7daf9ee0e846/data/latest').then(res=>res.json()).then(data=>{

  let selectedProps = data.reduce((acc, curr) => {
    let { CLAIMER:value,VOLUME:name } = curr;
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
    orient: 'horizontal',
    left: 'left'
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
    orient: 'horizontal',
    left: 'left'
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
        { value: 140652, name: '0-2k' },
        { value: 21356, name: '2k-5k' },
        { value: 12982, name: '5k-10k' },
        { value: 3658, name: 'more than 10k' }
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




// fetch and put them in a single arrays 
fetch('https://node-api.flipsidecrypto.com/api/v2/queries/c8d63c85-a654-4e15-bcc8-12e915531425/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,date1:[...t.date1,i.DATE],trans1:[...t.trans1,i.CLAIMERS],cum1:[...t.cum1,i.CUM_CLAIMERS],cum2:[...t.cum2,i.REMAINING_CLAIMERS]}
},{date1:[],trans1:[],cum1:[],cum2:[]}) //Beethoven


chart4 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [ 'claimers', 'cum claimer', 'remaining claimer']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: newData.date1
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Claimers',
      type: 'line',
      //stack: 'Total',
      data: newData.trans1
    },
    {
      name: 'Cumulative Claimer',
      type: 'line',
      data: newData.cum1
    },
    {
      name: 'Remaining Claimer',
      type: 'line',
      data: newData.cum2
    }
  ]
};
echarts.init(document.getElementById('chart4')).setOption(chart4);

})


// fetch and put them in a single arrays 
fetch('https://node-api.flipsidecrypto.com/api/v2/queries/c8d63c85-a654-4e15-bcc8-12e915531425/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,date1:[...t.date1,i.DATE],trans1:[...t.trans1,i.OP],cum1:[...t.cum1,i.CUM_OP],cum2:[...t.cum2,i.REMAINING_OP]}
},{date1:[],trans1:[],cum1:[],cum2:[]}) //Beethoven


chart5 = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [ 'claimers', 'cum claimer', 'remaining claimer']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: newData.date1
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'OP Token Airdroped',
      type: 'line',
      //stack: 'Total',
      data: newData.trans1
    },
    {
      name: 'Cumulative OP Token Airdroped',
      type: 'line',
      data: newData.cum1
    },
    {
      name: 'Remaining OP Token',
      type: 'line',
      data: newData.cum2
    }
  ]
};
echarts.init(document.getElementById('chart5')).setOption(chart5);

})

