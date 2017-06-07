<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">信号量机制</div>
              <blockquote>
                <p>
                  临界区:一段一次只能被一个进程执行的代码；
                  <br>当一个进程进入临界区，没有其他进程可被允许在临界区内执行，即没有两个进程可同时在临界区内执行。这种进程之间的关系被称为互斥（mutual excluxion）。
                  <br>解决临界区问题(critical-section problem)就是设计一个进程之间协作的机制，以实现进程之间对各自临界区访问的互斥。有临界区软件实现算法、临界区硬件实现算法及信号量。
                  <br>这里主要针对信号量机制进行演示：
                </p>
              </blockquote>
            </div>
          </div>
          
          <div class="svg-container col-xs-12 col-md-8">
            <div class="input-group" id="">
              <label class="input-group-addon"  for="InputEnd1">输入进程参数</label>
              <input type="text" class="form-control" id="InputEnd1" placeholder="[1,2],[2,3],[0,2]" value="[1,2],[2,3],[0,2]">
              <label class="input-group-addon"  for="InputEnd2">输入信号量个数</label>
              <input type="text" class="form-control" id="InputEnd2" placeholder="请输入数字" value="2">
              <span class="input-group-btn">
                <button class="btn btn-default" id="updateParams" type="button">提交</button>
              </span>
            </div>
            
            <p>一个数组为一个进程，数组第一个参数表示进程请求临界资源时刻，第二个参数表示进程预估使用临界资源时长。</p>
            <svg id="svg"></svg>
          </div>
        </div>
      </div>
    </div>
</main-layout>
</template>

<script>
    import Vue from 'vue'
  	import MainLayout from '../layouts/View.vue'
    import VLink from '../components/VLink.vue'
    import '../assets/snap/snap.svg.0.5.1.js'
    import _ from '../assets/lodash/lodash.min.js'
    import $ from '../assets/jquery/jquery.js'
    export default {
      components: {
        MainLayout,
        VLink
      },
      mounted:function () {
        window.onload = () => {
          var s = Snap("#svg");
          CourseSync(s);
          $('#updateParams').click(function(){
            CourseSync(s);
          })
        }
      }
    }
    function getArrStr(){
      var tempCourseInfo =$('#InputEnd1').val();
      if(tempCourseInfo){
        tempCourseInfo =_.drop(_.split(tempCourseInfo,'['));
        for(var j=0;j<tempCourseInfo.length;j++){
           if(j<tempCourseInfo.length-1){
            tempCourseInfo[j] = tempCourseInfo[j].slice(0,-2).split(',');
          }else{
            tempCourseInfo[j] = tempCourseInfo[j].slice(0,-1).split(',');
          }
        }
      }
      return tempCourseInfo;
    }
    function CourseSync(s){
      s.clear();
      var sNum = $('#InputEnd2').val()||2;
      console.log(getArrStr());
      var courseInfo = getArrStr()||[[1,2],[2,3],[0,2]];//到达时间，预估使用时长
      console.log(courseInfo)
      var courseObj = [];
      _.map(courseInfo,function(obj,index){
        var tempObj = {};
        tempObj.start = obj[0];
        tempObj.use = obj[1];
        tempObj.name = 'p'+(index+1);
        courseObj.push(tempObj);
      })
     var sObj = renderSView(s,sNum);
     courseObj = renderCVive(s,courseObj);
     courseObj =  _.reverse(_.sortBy(courseObj, function(o) { return _.parseInt(o.start,10); }));
     
     var corretTime = 0;

     var clickBtnRect = s.paper.group(s.paper.path('M70 425 L95 440 L70 455  Z').attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
          }),s.paper.circle(80, 440,25).attr({
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 5
        }));
      clickBtnRect.click(function(){
        if(sObj.length>0&&courseObj.length>0){
          requstS(s,courseObj.pop(),sObj);
        }else if(sObj.length<=0){
           var tempText = s.paper.text(100,100,'信号量不足').attr({
             'fill': "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
           }).animate({
            fil:'transparent'
          },500,function(){
            tempText.remove();
          })
        }else if(courseObj.length<=0){
          CourseSync(s)
        } 
      });
    }
    //请求信号量
    //发出请求进程：cObj
    //信号量对象：sObj
    function requstS(s,cObj,sObj){
      if(sObj.length>0){
        var _s = sObj.pop();
        //如果还有可用信号量
        if(_s){
          //分配信号量
          _s.animate({
            cx:cObj.X+cObj.width/2,
            cy:cObj.waitCY+cObj.height/2
          },500,function(){
            //等待执行结束
            cObj.waitRect[0].attr({
              fill:'rgba(255,255,255,.3)',
            })
            //进入临界区
            _s.attr({
              cy:cObj.criticalCY+cObj.height/2
            })
            //使用临界区结束
            cObj.criticalRect[0].animate({
                fill:'rgba(255,255,255,.3)',
              },cObj.use*1000,function(){
                //执行signal
                _s.animate({
                  cy:cObj.signalCY+cObj.height/2
                },500,function(){
                  //执行signal结束
                  cObj.signalRect[0].attr({
                    fill:'rgba(255,255,255,.3)',
                  });
                  //回收信号量
                   _s.animate({
                    cx:_s._x,
                    cy:_s._y
                  },500,function(){
                    sObj.push(_s);
                  })
                })
              })
          })
        }
      }
    }
    //渲染信号量
    function renderSView(s,sN){
      var SR = 25;
      var SPadding = 20;
      var _SContainer = s.paper.rect((800 - sN * 50 - 60) / 2, 50, sN * 50 + SPadding * 3, SR * 2 + 30).attr({
        fill: 'rgba(255,255,255,.3)',
        stroke: "#ffffff",
        strokeWidth: 5
      })
      var sObj = [];
      for(var i = 0;i<sN;i++){
        var _x = (800 - sN * 50 - 60) / 2 + (i+1)*50+i*10;
        var _y = 85;
        var temp = s.paper.circle(_x, _y,25).attr({
          fill: "#44cef6",
          stroke: "#ffffff",
          strokeWidth: 5
        });
        temp._x = _x;
        temp._y = _y;
        sObj.push(temp);
      }
      return sObj;
    }
    //渲染进程块
    function renderCVive(s,courseObj){
      _.map(courseObj,function(valObj,index){
        valObj.X = (800 - courseObj.length * 190)/2 + index*190;
        valObj.nameText = s.paper.text(valObj.X + 80, 170, valObj.name).attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        })
        valObj.width = 150;
        valObj.height = 50;
        valObj.waitCY = 190;
        valObj.waitRect = s.paper.group(s.paper.rect(valObj.X, valObj.waitCY, valObj.width, valObj.height, 5, 5).attr({
          fill: "#44cef6"
        }), s.paper.text(valObj.X + 80, valObj.waitCY+30, 'wait(S)').attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        }))
        valObj.criticalCY = 245;
        valObj.criticalRect = s.paper.group(s.paper.rect(valObj.X, valObj.criticalCY, valObj.width, valObj.height, 5, 5).attr({
          fill: "#9ed048"
        }), s.paper.text(valObj.X + 80, valObj.criticalCY+30, 'critical section').attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        }))
        valObj.signalCY = 300;
        valObj.signalRect = s.paper.group(s.paper.rect(valObj.X, valObj.signalCY, valObj.width, valObj.height, 5, 5).attr({
          fill: "#ffa400"
        }), s.paper.text(valObj.X + 80, valObj.signalCY+30, 'signal(S)').attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        }))
      })
      return courseObj;
    }
    

</script>
<style scoped>
  .content-container {
    width: 100%;    
    max-width: 1024px;  
    margin: 0 auto;   
    min-height: 300px;  
  }
#svg {
    background: #4c8abd;  
    -moz-border-radius: 10px;  
    -webkit-border-radius: 10px;  
    border-radius: 10px;  
    border: solid 2px #ccc;  
    height: 500px;  
    width: 800px;  
    float: left;  
    margin: 20px 10px 40px 0;  
    font: 1em source-sans-pro, Source Sans Pro, Helvetica, sans-serif;  
  }
  .ready-btn:hover{
    cursor: pointer;
  }
.illustrate-container .title {
    padding: 20px;  
  }
/* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .illustrate-container .title {
      font-size: 20px;  
    }
  }
/* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: 992px) {
    .illustrate-container .title {
      font-size: 24px;  
    }
  
  }
/* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width:1200px) {
    .illustrate-container .title {
      font-size: 30px;  
    }
  }
</style>