<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">处理机调度——最短作业/进程优先（SJF/SPF）</div>
              <blockquote>
                <p>
                  处理机调度负责动态地把处理器分配给进程或内核级线程。处理机调度也称CPU调度或进程调度，在有线程的操作系统中也称线程调度。为了最大限度的提高CPU 利用率，多道程序设计的目标是保持总是有进程可供执行。在单处理机系统中，一次只能运行一个进程；其它的任何进程都必须等到CPU 空闲时才能够被重新调度。
                </p>
                <p>最短作业/进程优先（Shortest Job/Process First，SJF/SPF）调度算法是以进程所要求的CPU时间为标准，总是选取估计计算时间最短的进程投入运行。最短进程优先调度算法是局部最佳的方法，它满足最短平均等待时间的要求。但实现SJF调度比较困难，因为预测进程的下一个CPU需求区间的长度有难度。SJF算法是优先权调度算法的特例，优先权调度和SJF调度会产生饥饿，老化（Aging）技术可解决饥饿问题。</p>
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
    // function SNPFSchedulSVG(){
    //   s.clear();
    //   var prosess = s.paper.text(80,50,'进程').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   var arrivedTime = s.paper.text(180,50,'到达时间').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   var runningTime = s.paper.text(280,50,'运行时间').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   //到达时间
    //   s.paper.text(180,100,'0').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(180,160,'2').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(180,230,'4').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(180,300,'5').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   //运行时间
    //   s.paper.text(280,100,'7').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(280,160,'4').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(280,230,'1').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(280,300,'4').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });

    //   var _S1 = s.paper.circle(100, 90, 25).attr({
    //       fill: "#44cef6",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   var _S2 = s.paper.circle(100, 160, 25).attr({
    //       fill: "#9ed048",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   var _S3 = s.paper.circle(100, 230, 25).attr({
    //       fill: "#ffa400",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   var _S4 = s.paper.circle(100, 300, 25).attr({
    //       fill: "#f47983",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   s.paper.circle(100, 90, 25).attr({
    //       fill: "#44cef6",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   s.paper.circle(100, 160, 25).attr({
    //       fill: "#9ed048",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   s.paper.circle(100, 230, 25).attr({
    //       fill: "#ffa400",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   s.paper.circle(100, 300, 25).attr({
    //       fill: "#f47983",
    //       stroke: "#ffffff",
    //       strokeWidth: 5
    //   });
    //   //CPU
    //   var CUPRect = s.paper.rect(75 ,400,600,20).attr({
    //         fill: "#d6ecf0",
    //         stroke: "#ffffff",
    //         strokeWidth: 1
    //     });
    //   s.paper.text(75,440,'0').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(337.5,440,'7').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(375,440,'8').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(525,440,'12').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });
    //   s.paper.text(675,440,'16').attr({
    //       fill: "#ffffff",
    //       stroke: "#ffffff",
    //   });

    //   var _S1Rect = s.paper.rect(75 ,400,0,20).attr({
    //       fill: "#44cef6",
    //       stroke: "#ffffff",
    //       strokeWidth: 1
    //   });
    //   var _S2Rect = s.paper.rect(337.5 ,400,0,20).attr({
    //       fill: "#9ed048",
    //       stroke: "#ffffff",
    //       strokeWidth: 1
    //   });
    //   var _S3Rect = s.paper.rect(375 ,400,0,20).attr({
    //       fill: "#ffa400",
    //       stroke: "#ffffff",
    //       strokeWidth: 1
    //   });
    //   var _S4Rect = s.paper.rect(525 ,400,0,20).attr({
    //       fill: "#f47983",
    //       stroke: "#ffffff",
    //       strokeWidth: 1
    //   });
    //   function S1Active(){
    //     _S1.animate({
    //       cx:'75',
    //       cy:'370'
    //     },500,function(){
    //       _S1Rect.animate({
    //         width:'262.5'
    //       },3000)
    //       _S1.animate({
    //         cx:'337.5'
    //       },3000,function(){
    //         S2Active();
    //       })
    //     })
    //   }
    //   function S2Active(){
    //     _S2.attr({
    //       cx:'337.5'
    //     })
    //     _S2Rect.animate({
    //         width:'37.5'
    //       },500)
    //       _S2.animate({
    //         cx:'375'
    //       },500,function(){
    //         S3Active();
    //       })
    //   }
    //   function S3Active(){
    //     _S3.attr({
    //       cx:'375'
    //     })
    //     _S3Rect.animate({
    //       width:'150'
    //     },1000)
    //     _S3.animate({
    //       cx:'525'
    //     },1000,function(){
    //       S4Active();
    //     })
    //   }
    //   function S4Active(){
    //     _S4.attr({
    //       cx:'525'
    //     })
    //     _S4Rect.animate({
    //       width:'150'
    //     },1000)
    //     _S4.animate({
    //       cx:'675'
    //     },1000)
    //   }
    //   setTimeout(S1Active,5000);
    //   setTimeout(function(){
    //     _S2.animate({
    //       cx:'100',
    //       cy:'370'
    //     },500)
    //   },5500);
    //   setTimeout(function(){
    //     _S3.animate({
    //       cx:'120',
    //       cy:'370'
    //     },500)
    //   },6000);
    //   setTimeout(function(){
    //     _S4.animate({
    //       cx:'120',
    //       cy:'370'
    //     },500)
    //   },7000);
    // }
    // SNPFSchedulSVG();
    function SPFSchedulSVG(){
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
      s.paper.text(180,160,'2').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(180,230,'4').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(180,300,'5').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      //运行时间
      s.paper.text(280,100,'7').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(280,160,'4').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(280,230,'1').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(280,300,'4').attr({
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
      var _S4 = s.paper.circle(100, 300, 25).attr({
          fill: "#f47983",
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
      s.paper.circle(100, 300, 25).attr({
          fill: "#f47983",
          stroke: "#ffffff",
          strokeWidth: 5
      });
      //CPU
      var CUPRect = s.paper.rect(75 ,400,600,20).attr({
            fill: "#d6ecf0",
            stroke: "#ffffff",
            strokeWidth: 1
        });
      s.paper.text(75,440,'0').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(150,440,'2').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(225,440,'4').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(262.5,440,'5').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(337.5,440,'7').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(487.5,440,'11').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(675,440,'16').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });

      var _S1Rect1 = s.paper.rect(75 ,400,0,20).attr({
          fill: "#44cef6",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      var _S1Rect2 = s.paper.rect(487.5 ,400,0,20).attr({
          fill: "#44cef6",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      var _S2Rect1 = s.paper.rect(150 ,400,0,20).attr({
          fill: "#9ed048",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      var _S2Rect2 = s.paper.rect(262.5 ,400,0,20).attr({
          fill: "#9ed048",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      var _S3Rect = s.paper.rect(225 ,400,0,20).attr({
          fill: "#ffa400",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      var _S4Rect = s.paper.rect(337.5 ,400,0,20).attr({
          fill: "#f47983",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      function S1Active(){
        _S1.animate({
          cx:'75',
          cy:'370'
        },300,function(){
          _S1Rect1.animate({
            width:'75'
          },1000)
          _S1.animate({
            cx:'150'
          },1000,function(){
            S2Active();
          })
        })
      }
      function S2Active(){
        _S2.attr({
          cx:'150',
          cy:'370'
        })
        _S2Rect1.animate({
            width:'75'
          },1000)
          _S2.animate({
            cx:'225'
          },1000,function(){
            S3Active();
          })
      }
      function S3Active(){
        _S3.attr({
          cx:'225',
          cy:'370'
        })
        _S3Rect.animate({
          width:'37.5'
        },500)
        _S3.animate({
          cx:'262.5',
          cy:'370'
        },500,function(){
          _S2.attr({
            cx:'262.5'
          });
          _S2Rect2.animate({
            width:'75'
          },1000)
           _S2.animate({
            cx:'337.5'
          },1000,function(){
            S4Active();
          })
        })
      }
      function S4Active(){
        _S4.attr({
          cx:'337.5',
          cy:'370'
        })
        _S4Rect.animate({
          width:'150'
        },2000)
        _S4.animate({
          cx:'487.5'
        },2000,function(){
          _S1.attr({
            cx:'487.5'
          })
          _S1Rect2.animate({
            width:'187.5'
          },1500)
          _S1.animate({
            cx:'675'
          },1500)
        })
      }
      setTimeout(S1Active,1000);
      setTimeout(function(){
         _S2.animate({
          cx:'150',
          cy:'370'
        },300)
      },2000);
      setTimeout(function(){
         _S3.animate({
          cx:'225',
          cy:'370'
        },300)
      },3000);
      setTimeout(function(){
         _S4.animate({
          cx:'337.5',
          cy:'370'
        },300)
      },4500);
    }
    SPFSchedulSVG();

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