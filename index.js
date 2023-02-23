function increment(labelValue) { 
  if (Math.abs(Number(labelValue)) >= 1.0e+9)
return (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
    if (Math.abs(Number(labelValue)) >= 1.0e+6)
return (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
    if (Math.abs(Number(labelValue)) >= 1.0e+3)
return (Math.abs(Number(labelValue) / 1.0e+3).toFixed(2)) + " K"
}


fetch('https://api.flipsidecrypto.com/api/v2/queries/f4a144b5-8948-45bd-bb40-74b16050d0e7/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    trans:[...t.trans,i.TRANSACTIONS],
    user:[...t.user,i.ADDRESS],
    fee:[...t.fee,i.FEE],
    gas:[...t.gas,i.GAS_PRICS]
  }

},{trans:[],user:[],fee:[],gas:[]})
document.getElementById("first-box").innerHTML = increment(newData.trans)
document.getElementById("second-box").innerHTML = increment(newData.user)
document.getElementById("third-box").innerHTML = increment(newData.fee)
document.getElementById("fourth-box").innerHTML = (Math.floor((newData.gas)*1000)/1000)
})







fetch('https://api.flipsidecrypto.com/api/v2/queries/77925504-e349-4ed6-a552-242cbafe4835/data/latest').then(res=>res.json()).then(data=>{
  const newData = data.reduce((t,i)=>{
  return {...t,
    date:[...t.date,i.DATE],
    tvl:[...t.tvl,i.TVL_USD]
  }

},{date:[],tvl:[],fee:[],gas:[]})


chart2 = {
  xAxis: {
    type: 'category',
    data: newData.date
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: newData.tvl,
      type: 'line',
      color :'#ff0000' ,
      smooth: true
    }
  ]
};
echarts.init(document.getElementById('sixth-box')).setOption(chart2);

})



fetch('https://api.flipsidecrypto.com/api/v2/queries/ed191a52-2fa3-49af-a3a2-3e770c85bd78/data/latest').then(res=>res.json()).then(data=>{
  let selectedProps = data.reduce((acc, curr) => {
    let { TVL_USD:value,CHAIN:name } = curr;
    return [...acc, { value,name }];
  }, []);

  

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
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '',
      type: 'pie',      
      label: {  show: true
      },

      color: [
        '#fb7293',
        '#ca6666',
       '#d37f7f',
       '#db9999',
       '#e4b2b2',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293'],
      radius: ['50%','10'],
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
      };


echarts.init(document.getElementById('fifth-box')).setOption(chart3);

})








