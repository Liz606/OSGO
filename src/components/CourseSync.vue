<template>
  <svg id="svg">
  </svg>  
</template>

<script>
  import Vue from 'vue'
  import '../assets/snap/snap.svg.0.5.1.js'
  var courseSync =  new Vue({
        el:'#svg',
        mounted:function () {
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
      })
</script>

<style>

</style>
