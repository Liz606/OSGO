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
            <svg id="svg2"></svg>
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
      mounted:function (){
        window.onload = () => {
          var s = Snap("#svg");
          initRender(s);
        }
      }
  	}
    function initRender(s){
      var _local = {};
      _local.x = 20;
      _local.y = 50;
      _local.creatCourse =s.paper.text(355, 45,'创建进程').attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        })
       s.paper.text(490, 135,'I/O事件发生').attr({
        fill: "#fff",
        'font-weight': 100,
        'font-size': 20, 
        'text-anchor': 'middle',
        });
       s.paper.path("M480,170 L400,110").attr({
            // 描边
            stroke: "#fff",
            strokeWidth: 5,
            fill: "none",
            // 结束标记
            "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                  fill: "#fff"      
                              }).marker(0, 0, 13, 13, 3, 5)
        });

        s.paper.text(360, 90,'就绪').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20, 
            'text-anchor': 'middle',
        });
        s.paper.text(215, 135,'处理机调度').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
        })
        // 旋转
        s.paper.path("M320,100 L240,160").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
          s.paper.text(200, 210,'运行').attr({
                fill: "#fff",
                'font-weight': 100,
                'font-size': 20, 
                'text-anchor': 'middle',
          });
          s.paper.text(150, 275,'终止进程').attr({
              fill: "#fff",
              'font-weight': 100,
              'font-size': 20,
              'text-anchor': 'middle',
          })
        s.paper.path("M200,240 L200,300").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
        s.paper.text(200, 360,'终止').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20, 
            'text-anchor': 'middle',
        });
        s.paper.text(335, 190,'等待I/O').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
        })
        s.paper.path("M240,200 L440,200").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
          s.paper.text(500, 210,'阻塞').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20, 
            'text-anchor': 'middle',
          });
          s.paper.circle(360, 80, 25).attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 5
          })
          s.paper.circle(200, 200, 25).attr({
            fill: "#bddd22",
            stroke: "#ffffff",
            strokeWidth: 5
          })
          s.paper.circle(200, 350, 25).attr({
            fill: "#b0a4e3",
            stroke: "#ffffff",
            strokeWidth: 5
          })
          s.paper.circle(500, 200, 25).attr({
            fill: "#f36838",
            stroke: "#ffffff",
            strokeWidth: 5
          })
          
          var triangle = s.paper.path('M70 425 L95 440 L70 455  Z').attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
          })
          var clickBtnRect = s.paper.group(triangle,s.paper.circle(80, 440,25).attr({
              fill: "transparent",
              stroke: "#ffffff",
              strokeWidth: 5
            }));
          clickBtnRect.click(function(){
            CourseState(s)
          })
    }
    function CourseState(s){ 
      s.clear();
      var local = {};
      local.x = 20;
      local.y = 50;
      var triangle = s.paper.path('M70 425 L95 440 L70 455  Z').attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
          })
      var clickBtnRect = s.paper.group(triangle,s.paper.circle(80, 440,25).attr({
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 5
        }));
      var isAnimate = true;
      creatCourse()
      
      clickBtnRect.click(function(){
          if(!isAnimate){
            isAnimate = true;
            CourseState(s)
          }else{
            return
          }
      })
      
      function creatCourse(){
        local.creatCourse =s.paper.text(355, 45,'创建进程').attr({
          fill: "#fff",
          'font-weight': 100,
          'font-size': 20,
          'text-anchor': 'middle',
        })
        toReady()
      }
      function toReady(flag){
        if(local.readyIO){
          var textState = s.paper.text(490, 135,'I/O事件发生').attr({
              fill: "#fff",
              'font-weight': 100,
              'font-size': 20, 
              'text-anchor': 'middle',
              });
            var tempArr = s.paper.path("M480,170 L400,110").attr({
              // 描边
              stroke: "#fff",
              strokeWidth: 5,
              fill: "none",
              // 结束标记
              "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                    fill: "#fff"      
                                }).marker(0, 0, 13, 13, 3, 5)
              });
        }
        if(!local.readyCPU){
          local.readyCPU =s.paper.circle(360, 80, 0).attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 5
          }).animate({
            r:25
          },500,function(){
            var textState = s.paper.text(360, 90,'就绪').attr({
              fill: "#fff",
              'font-weight': 100,
              'font-size': 20, 
              'text-anchor': 'middle',
              });
              
               getCPU(flag)
          })
        }else{
          var readyIOClone = local.readyIO.clone().animate({
            cx:360,
            cy:80
          },500,function(){
              // tempArr.remove()
              readyIOClone.remove();
               getCPU(flag)
          })
        }
      }
      function getCPU(flag){
        var creatGetCPU = s.paper.text(215, 135,'处理机调度').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
        })
        // 旋转
        var tempArr = s.paper.path("M320,100 L240,160").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
        local.running = local.readyCPU.clone().animate({
              cx:'200',
              cy:'200',
              fill:'#bddd22'
            },500,function(){
              var textState = s.paper.text(200, 210,'运行').attr({
                fill: "#fff",
                'font-weight': 100,
                'font-size': 20, 
                'text-anchor': 'middle',
                });
                // tempArr.remove()
                if(!flag){
                  readyIO();
                }else{
                  endCourse();
                }
                
        })
      }
      function endCourse(){
        var shoutOut = s.paper.text(150, 275,'终止进程').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
        })
        var tempArr = s.paper.path("M200,240 L200,300").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
        local.end = local.running.clone().animate({
                cx:'200',
                cy:'350',
                fill:'#b0a4e3'
              },500,function(){
                var textState = s.paper.text(200, 360,'终止').attr({
                  fill: "#fff",
                  'font-weight': 100,
                  'font-size': 20, 
                  'text-anchor': 'middle',
                  });
                  // tempArr.remove()
                  isAnimate = false
              })

      }
      function readyIO(){
        var readyIO = s.paper.text(335, 190,'等待I/O').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
        })
        var tempArr = s.paper.path("M240,200 L440,200").attr({
          // 描边
          stroke: "#fff",
          strokeWidth: 5,
          fill: "none",
          // 结束标记
          "marker-end": s.paper.path("M2,2 L2,8 L5,5 L2,2").attr({
                                fill: "#fff"      
                            }).marker(0, 0, 13, 13, 3, 5)
          });
        local.readyIO = local.running.clone().animate({
            cx:'500',
            cy:'200',
            fill:'#f36838'
          },500,function(){
            var textState = s.paper.text(500, 210,'阻塞').attr({
              fill: "#fff",
              'font-weight': 100,
              'font-size': 20, 
              'text-anchor': 'middle',
              });
              // tempArr.remove()
              toReady(true)
          })
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