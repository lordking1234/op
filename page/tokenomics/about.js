

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
        { value: 25, name: 'Ecosystem Fund	' },
        { value: 20, name: 'Retroactive Public Goods Funding' },
        { value: 19, name: 'User airdrops' },
        { value: 19, name: 'Core contributors' },
        { value: 17, name: 'Sugar xaddies' }

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

