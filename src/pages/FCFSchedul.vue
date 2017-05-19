<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">处理机调度——先来先服务（FCFS）</div>
              <blockquote>
                <p>
                  处理机调度负责动态地把处理器分配给进程或内核级线程。处理机调度也称CPU调度或进程调度，在有线程的操作系统中也称线程调度。为了最大限度的提高CPU 利用率，多道程序设计的目标是保持总是有进程可供执行。在单处理机系统中，一次只能运行一个进程；其它的任何进程都必须等到CPU 空闲时才能够被重新调度。
                </p>
                <p>先来先服务（First Come First Served，FCFS）调度算法是按照进程进入就绪队列的先后次序来挑选进程，先进入就绪队列的进程优先被挑中。先来先服务调度算法是最简单的调度算法，但是它会让短进程等待非常长的进程。FCFS会产生所谓的Belady异常现象。</p>
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
  	  },
      mounted:function(){
          var s = Snap("#svg");
          s.clear();
          var prosess = s.paper.text(80,50,'进程').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          var arrivedTime = s.paper.text(180,50,'到达时间').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          var runningTime = s.paper.text(280,50,'运行时间').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          //到达时间
          s.paper.text(180,100,'0').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(180,160,'5').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(180,230,'6').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          //运行时间
          s.paper.text(280,100,'20').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(280,160,'10').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(280,230,'5').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });

          var _S1 = s.paper.circle(100, 90, 25).attr({
              fill: "#44cef6",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          var _S2 = s.paper.circle(100, 160, 25).attr({
              fill: "#9ed048",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          var _S3 = s.paper.circle(100, 230, 25).attr({
              fill: "#ffa400",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          s.paper.circle(100, 90, 25).attr({
              fill: "#44cef6",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          s.paper.circle(100, 160, 25).attr({
              fill: "#9ed048",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          s.paper.circle(100, 230, 25).attr({
              fill: "#ffa400",
              stroke: "#ffffff",
              strokeWidth: 5
          });
          //CPU
          var CUPRect = s.paper.rect(75 ,350,600,20).attr({
                fill: "#d6ecf0",
                stroke: "#ffffff",
                strokeWidth: 1
            });
          s.paper.text(75,390,'0').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(417,390,'20').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(575,390,'30').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
          s.paper.text(663,390,'35').attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });

          var _S1Rect = s.paper.rect(75 ,350,0,20).attr({
              fill: "#44cef6",
              stroke: "#ffffff",
              strokeWidth: 1
          });
          var _S2Rect = s.paper.rect(417 ,350,0,20).attr({
              fill: "#9ed048",
              stroke: "#ffffff",
              strokeWidth: 1
          });
          var _S3Rect = s.paper.rect(576 ,350,0,20).attr({
              fill: "#ffa400",
              stroke: "#ffffff",
              strokeWidth: 1
          });

          var hr = s.paper.rect(200 ,20,0,20).attr({
              fill: "#ffffff",
              stroke: "#ffffff",
              strokeWidth: 1
          });
          function S1Active(){
            _S1.animate({
              cx:'75',
              cy:'320'
            },500,function(){
              _S1Rect.animate({
                width:'342'
              },3000)
              _S1.animate({
                cx:'417'
              },3000,function(){
                S2Active();
              })
            })
          }
          function S2Active(){
            _S2.attr({
              cx:'417'
            })
            _S2Rect.animate({
                width:'157'
              },2000)
              _S2.animate({
                cx:'576'
              },2000,function(){
                S3Active();
              })
          }
          function S3Active(){
            _S3.attr({
              cx:'576'
            })
            _S3Rect.animate({
              width:'97'
            },1000)
            _S3.animate({
              cx:'675'
            },1000)
          }
          setTimeout(S1Active,5000);
          setTimeout(function(){
            _S2.animate({
              cx:'100',
              cy:'320'
            },500)
          },5500);
          setTimeout(function(){
            _S3.animate({
              cx:'120',
              cy:'320'
            },500)
          },6000);
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