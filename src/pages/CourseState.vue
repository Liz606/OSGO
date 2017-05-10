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
          <div id="svg">
          </div>
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
  	  },
      ready:function () {
        var s = Snap('#svg');
        console.log(Snap);
        console.log(Snap('#svg'));
        var bigCircle = s.circle(150, 150, 100);
        // Lets create big circle in the middle:
        //var bigCircle = s.circle(150, 150, 100);
      }
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
    width: 100%;  
    float: left;  
    margin: 20px 10px 40px 0;  
    font: 1em source-sans-pro, Source Sans Pro, Helvetica, sans-serif;  
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