<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">进程的状态转换</div>
              <blockquote>
                <p>
                  进程与程序的最大区别是其动态性。随着进程的推进，它会不断改变状态。进程状态由具体操作系统根据进程当前活动而定义。例如，每个进程可处于如下状态：创建、就绪、运行、等待（阻塞）、终止。通常讲的进程三个基本状态是指就绪状态、运行状态和等待或阻塞状态。
                  <br> 创建（新）：进程正被创建；
                  <br> 运行：进程的指令正被执行；
                  <br> 等待：进程正在等待发生一些事件（如I/O 完成或接收一个信号），也称阻塞状态；
                  <br> 就绪：进程正等待分配处理器；
                  <br> 终止：进程结束运行。
                </p>
              </blockquote>
            </div>
          </div>
          <div class="svg-container col-xs-12 col-md-8">
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
  	export default {
  	  components: {
  	    MainLayout,
  	    VLink
  	  }
  	}

    var s = Snap("#svg");
    // function courseStateSVG(){
    //       s.clear();
    //       //进程调度
    //       var path1 = s.paper.line(450, 220, 500, 320).attr({
    //       stroke: "#fff",
    //       strokeWidth: 5  
    //       });
    //       //时间片完
    //       var path2 = s.paper.line(470, 220, 520, 320).attr({
    //       stroke: "#fff",
    //       strokeWidth: 5  
    //       });
    //       //I/O完成
    //       var path3 = s.paper.line(270, 220, 220, 320).attr({
    //       stroke: "#fff",
    //       strokeWidth: 5  
    //       });
    //       //I/O请求
    //       var path4 = s.paper.line(250, 380, 480, 380).attr({
    //       stroke: "#fff",
    //       strokeWidth: 5  
    //       });
    //       var bigCircle = s.paper.circle(375, 80, 50).attr({
    //       fill: "#44cef6",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //       });
          
          
    //       var stateRect1 =s.paper.group(s.paper.rect(300, 150,150,50,5,5).attr({
    //       fill: "#44cef6"
    //       }),s.paper.text(370, 180,'就绪状态').attr({
    //       fill: "#fff",
    //       'font-weight': 100,
    //       'font-size': 20,
    //       'text-anchor': 'middle',
    //       })) 
          
          
    //       var stateRect2 =s.paper.group(s.paper.rect(500, 350,150,50,5,5).attr({
    //       fill: "#9ed048"
    //       }),s.paper.text(570, 380,'运行状态').attr({
    //       fill: "#fff",
    //       'font-weight': 100,
    //       'font-size': 20,
    //       'text-anchor': 'middle',
    //       })) 
          
          
    //       var stateRect3 =s.paper.group(s.paper.rect(75, 350,150,50,5,5).attr({
    //       fill: "#ffa400"
    //       }),s.paper.text(150, 380,'阻塞状态').attr({
    //       fill: "#fff",
    //       'font-weight': 100,
    //       'font-size': 20,
    //       'text-anchor': 'middle',
    //       }))
          
          
          
          
          
          
    //       stateRect1.click(function(){
    //       runningToReady()
    //       });
    //       stateRect2.click(function(){
    //       readyToRunning()
    //       });
    //       stateRect3.click(function(){
    //       runningToBlocked()
    //       });
          
    //       function readyToRunning(){
    //         bigCircle.attr({
    //         cx: 375,
    //         cy: 80,
    //         fill:'#44cef6'
    //         })
    //         bigCircle.animate({
    //         cx: 580,
    //         cy: 280,
    //         fill:'#9ed048'
    //         }, 100);
    //       }
    //       function runningToReady(){
    //         bigCircle.attr({
    //         cx: 580,
    //         cy: 280,
    //         fill:'#9ed048'
    //         })
    //         bigCircle.animate({
    //         cx: 375,
    //         cy: 80,
    //         fill:'#44cef6'
    //         }, 100);
    //       }
    //       function runningToBlocked(){
    //         bigCircle.attr({
    //         cx: 580,
    //         cy: 280,
    //         fill:'#9ed048'
    //         })
    //         bigCircle.animate({
    //         cx: 150,
    //         cy: 280,
    //         fill:'#ffa400'
    //         }, 100);
    //       }
    //       function blockedToReady(){
    //         bigCircle.attr({
    //         cx: 150,
    //         cy: 280,
    //         fill:'#ffa400'
    //         })
    //         bigCircle.animate({
    //         cx: 580,
    //         cy: 280,
    //         fill:'#9ed048'
    //         }, 100);
    //       }
    //       }
    // courseStateSVG();

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