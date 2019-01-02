$(function(){
//网页上部数据获取
function senddata(){
$.ajax({
    type: "get",
          url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sqlue.php',
         dataType : "json",

          success: function(data){
               console.log(data[0]);
               buildData(data[0]);
          }

})

function buildData(data){

    var z1=$('.left').find('.z1');
     z1[0].innerHTML=data.Device_id;

     var imsi=$('.imsi');
     imsi[0].innerHTML=data.Imsi;
                                                                                                                                                                                                                                                  
     var ip=$('.ip');
     ip[0].innerHTML=data.Ip;


     var ms=$('.ms');
     ms[0].innerHTML=data.Delay;


     var org=$('.orgu');
     org[0].innerHTML=data.Up_bandwidth;


     var orgd=$('.orgd');
     orgd[0].innerHTML=data.Down_bandwidth;

}
}
setInterval(senddata,3000);

function send_epc_data(){
$.ajax({
    type: "get",
          url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sqlepc.php',
         dataType : "json",

          success: function(data){
               console.log(data[0]);
               build_epc_Data(data[0]);
          }

})
function build_epc_Data(data){
    var epcc=$('.left').find('.epcc');
     console.log(epcc)
     epcc[0].innerHTML=data.CpuPerc;

     var epcmu=$('.epcmu');
     epcmu[0].innerHTML=data.MemUsage;

     var epcmt=$('.epcmt');
     epcmt[0].innerHTML=data.TotalMem;


     var epcmp=$('.epcmp');
     epcmp[0].innerHTML=data.MemPerc;

     var epcn=$('.epcn');
     epcn[0].innerHTML=data.NetIO;


     var epcb=$('.epcb');
     epcb[0].innerHTML=data.BlockIO;

}
}

setInterval(send_epc_data,3000);

function send_data(){
    $.ajax({
        type: "get",
              url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sqlenb.php',
             dataType : "json",
    
              success: function(data){
                   console.log(data[0]);
                   build_Data(data[0]);
              }
    
    })
    function build_Data(data){
        var z1=$('.left').find('.z1');
        z1[1].innerHTML=data.CpuPerc;
   
        var imsi=$('.imsi');
        imsi[1].innerHTML=data.MemUsage;
                                                                                                                                                                                                                                                     
        var ip=$('.ip');
        ip[1].innerHTML=data.TotalMem;
   
   
        var ms=$('.ms');
        ms[1].innerHTML=data.MemPerc;
   
   
        var org=$('.orgu');
        org[1].innerHTML=data.NetIO;
   
   
        var orgd=$('.orgd');
        orgd[1].innerHTML=data.BlockIO;
    
    }
    }
    
    setInterval(send_data,3000);
    





//左边的折线显示
var myChart1 = echarts.init(document.getElementById('lineChart1'));

    // 指定图表的配置项和数据
    myChart1.setOption( {
        title: {
        text: ''
        },
        tooltip: {
           trigger: 'axis',
    },
     legend: {
           data:'数据统计',
           itemWidth:40,
           textStyle:{
               fontSize:15,
               color:'#fff'
           }
       },
        //横轴、纵轴坐标显示
        xAxis: {
         data:[],
          name:"时间"},

        yAxis: {},
        series: [{
            name: '数据',
            type: 'line'
        }]
    });
    // 异步加载数据
 function send1(){

$.ajax({ type: "get",
          url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sqldelay.php',
         dataType : "json",

          success: function(data){
            // 使用刚指定的配置项和数据显示图表。
            console.log(data);
            var xtime=[];
            var jsonstr = [];
            for(var i=0;i<data.length;i++) {
              jsonstr.push(parseFloat(data[i].Up_bandwidth));
             xtime.push(data[i].time)
              }
             myChart1.setOption({
                 xAxis: {
                  data:xtime,
                  name:"时间",
                  axisLabel:{
                    rotate:30,
                    interval:10
                }
                 },
                 series:[{
                    data: jsonstr,
                    type: 'line',
                     name: '数据',
                      color:['red'],
                       itemStyle:{
                        normal:{
                            lineStyle:{
                                width:1,
                                type:'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },
               }]
            });
            },
       error:function(){
            alert("请求失败")
                },

})

}
setInterval(send1,1000);


//中间的折线显示
  // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById('lineChart2'));

    // 指定图表的配置项和数据
    myChart2.setOption( {
        title: {
        text: ''
        },
        tooltip: {
           trigger: 'axis',
    },
     legend: {
           data:'数据统计',
           itemWidth:40,
           textStyle:{
               fontSize:15,
               color:'#fff'
           }
       },
        //横轴、纵轴坐标显示
        xAxis: {
          data:[],
          name:"时间",
          axisLine:{
             lineStyle:{
                color:'#0087ED',
                width:1,
            }
        },
    },

        yAxis: {
            axisLine:{
                lineStyle:{
                   color:'#0087ED',
                   width:1,//这里是为了突出显示加上的
               }
        },
    },
        series: [{
            name: '数据',
            type: 'line'
        }]
    });
    // 异步加载数据
 function send2(){

$.ajax({ type: "get",
          url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sql.php',
         dataType : "json",

          success: function(data){
            // 使用刚指定的配置项和数据显示图表。
            console.log(data);
            var xtime=[];
            var jsonstr = [];
            for(var i=0;i<data.length;i++) {
              jsonstr.push(parseFloat(data[i].Up_bandwidth));
             xtime.push(data[i].time)
            //  console.log(jsonstr)
             //   console.log(xtime)
              }
             myChart2.setOption({
                 xAxis: {
                  data:xtime,
                  name:"时间",
                  axisLabel:{
                    rotate:30,
                    interval:10
                }
                 },
                 series:[{
                    data: jsonstr,
                    type: 'line',
                     name: '数据',
                      color:['red'],
                       itemStyle:{
                        normal:{
                            lineStyle:{
                                width:1,
                                type:'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },
               }]
            });
            },
       error:function(){
            alert("请求失败")
                },

})
}
setInterval(send2,3000);

//右边的折线显示
var myChart3 = echarts.init(document.getElementById('lineChart3'));

    // 指定图表的配置项和数据
    myChart3.setOption( {
        title: {
        text: ''
        },
        tooltip: {
           trigger: 'axis',
    },
     legend: {
           data:'数据统计',
           itemWidth:40,
           textStyle:{
               fontSize:15,
               color:'#fff'
           }
       },
        //横轴、纵轴坐标显示
        xAxis: {
         data:[],
          name:"时间"},

        yAxis: {},
        series: [{
            name: '数据',
            type: 'line'
        }]
    });
    // 异步加载数据
 function send3(){

$.ajax({ type: "get",
          url:'https://bird.ioliu.cn/v1?url=http://39.104.172.7:8080/echarts3/sqldown.php',
         dataType : "json",

          success: function(data){
            // 使用刚指定的配置项和数据显示图表。
            console.log(data);
            var xtime=[];
            var jsonstr = [];
            for(var i=0;i<data.length;i++) {
            if(parseFloat(data[i].Up_bandwidth)<=40){
              jsonstr.push(parseFloat(data[i].Up_bandwidth));
             xtime.push(data[i].time)
             }else{
             }
            //  console.log(jsonstr)
             //   console.log(xtime)
              }
             myChart3.setOption({
                 xAxis: {
                  data:xtime,
                  name:"时间",
                  axisLabel:{
                    rotate:30,
                    interval:5
                }
                 },
                 series:[{
                    data: jsonstr,
                    type: 'line',
                     name: '数据',
                      color:['red'],
                       itemStyle:{
                        normal:{
                            lineStyle:{
                                width:1,
                                type:'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },
               }]
            });
            },
       error:function(){
            alert("请求失败")
                },

})
}
setInterval(send3,3000);
}
)
