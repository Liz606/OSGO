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
      mounted:function () {
        CourseSync();
        function CourseSync() {
          var s = Snap("#svg");
          s.clear();
          var Snum = 2;
          var SR = 25;
          var SPadding = 20;
          var _SContainer = s.paper.rect((800 - Snum * 50 - 60) / 2, 50, Snum * 50 + SPadding * 3, SR * 2 + 30).attr({
            fill: 'rgba(255,255,255,.3)',
            stroke: "#ffffff",
            strokeWidth: 5
          })
          var _S1 = s.paper.circle((800 - Snum * 50 - 60) / 2 + SR + SPadding, 90, 25).attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 5
          });
          var _S2 = s.paper.circle((800 - Snum * 50 - 60) / 2 + SR * 3 + SPadding * 2, 90, 25).attr({
            fill: "#44cef6", 
            stroke: "#ffffff",
            strokeWidth: 5
          });

          var M = new Snap.Matrix();
          var P1_SyncRect1 = s.paper.group(s.paper.rect(75, 190, 150, 50, 5, 5).attr({
            fill: "#44cef6"
          }), s.paper.text(150, 220, 'wait(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P1_SyncRect2 = s.paper.group(s.paper.rect(75, 245, 150, 50, 5, 5).attr({
            fill: "#9ed048"
          }), s.paper.text(150, 275, 'critical section').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P1_SyncRect3 = s.paper.group(s.paper.rect(75, 300, 150, 50, 5, 5).attr({
            fill: "#ffa400"
          }), s.paper.text(150, 330, 'signal(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          M.translate(50, 0);
          var P1 = s.paper.group(P1_SyncRect1, P1_SyncRect2, P1_SyncRect3).attr({
            fill: 'rgba(255,255,255,.3)',
            stroke: "#ffffff",
            strokeWidth: 1
          }).transform(M);




          var P2_SyncRect1 = s.paper.group(s.paper.rect(75, 190, 150, 50, 5, 5).attr({
            fill: "#44cef6"
          }), s.paper.text(150, 220, 'wait(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P2_SyncRect2 = s.paper.group(s.paper.rect(75, 245, 150, 50, 5, 5).attr({
            fill: "#9ed048"
          }), s.paper.text(150, 275, 'critical section').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P2_SyncRect3 = s.paper.group(s.paper.rect(75, 300, 150, 50, 5, 5).attr({
            fill: "#ffa400"
          }), s.paper.text(150, 330, 'signal(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))

          M.translate(200, 0);
          var P2 = s.paper.group(P2_SyncRect1, P2_SyncRect2, P2_SyncRect3).attr({
            fill: 'rgba(255,255,255,.3)',
            stroke: "#ffffff",
            strokeWidth: 1
          }).transform(M)




          var P3_SyncRect1 = s.paper.group(s.paper.rect(75, 190, 150, 50, 5, 5).attr({
            fill: "#44cef6"
          }), s.paper.text(150, 220, 'wait(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P3_SyncRect2 = s.paper.group(s.paper.rect(75, 245, 150, 50, 5, 5).attr({
            fill: "#9ed048"
          }), s.paper.text(150, 275, 'critical section').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          var P3_SyncRect3 = s.paper.group(s.paper.rect(75, 300, 150, 50, 5, 5).attr({
            fill: "#ffa400"
          }), s.paper.text(150, 330, 'signal(S)').attr({
            fill: "#fff",
            'font-weight': 100,
            'font-size': 20,
            'text-anchor': 'middle',
          }))
          M.translate(200, 0);
          var P3 = s.paper.group(P3_SyncRect1, P3_SyncRect2, P3_SyncRect3).attr({
            fill: 'rgba(255,255,255,.3)',
            stroke: "#ffffff",
            strokeWidth: 1
          }).transform(M);

          _S1.animate({
            cx: '200',
            cy: '215'
          }, 1000, function() {
            animateS2();
            P1_SyncRect1.animate({
              'fill-opacity': 0
            }, 500, function() {
              _S1.animate({
                cx: '200',
                cy: '270'
              }, 1000, function() {
                P1_SyncRect2.animate({
                  'fill-opacity': 0
                }, 500)
              })
            })
          })

          function animateS2() {
            _S2.animate({
              cx: '600',
              cy: '215'
            }, 2000, function() {
              P3_SyncRect1.animate({
                'fill-opacity': 0
              }, 500, function() {
                _S2.animate({
                  cx: '600',
                  cy: '270'
                }, 1000, function() {
                  P3_SyncRect2.animate({
                    'fill-opacity': 0
                  }, 500, function() {

                  })
                })
              })
            })
          }
        }
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