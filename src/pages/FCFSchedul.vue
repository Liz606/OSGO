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
            <div class="input-group" id="">
              <label class="input-group-addon"  for="InputEnd1">输入进程参数</label>
              <input type="text" class="form-control" id="InputEnd1" placeholder="[0,20],[15,10],[6,5],[7,2]" value="[0,20],[15,10],[6,5],[7,2]">
              <span class="input-group-btn">
                <button class="btn btn-default" id="updateParams" type="button">提交</button>
              </span>
            </div>
            
            <p>一个数组为一个进程，数组第一个参数表示进程到达就绪队列时刻，第二个参数表示进程预估使用临处理机时长。</p>
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
      mounted:function(){
        window.onload = () => {
          var s = Snap("#svg");
          FCFSchedul(s);
          $('#updateParams').click(function(){
            FCFSchedul(s);
          })
        }
      }
  	}
    function renderView(s,n,a1,a2){
      s.clear();
      var col = 80;
      var row = 80;
      var colors = ['#44cef6','#9ed048','#ffa400','#f47983']
      var P = [];
      s.paper.text(80,row-row/2,'进程').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(180,row-row/2,'到达时间').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(280,row-row/2,'运行时间').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      s.paper.text(380,row-row/2,'等待时间').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      for(var i = 0;i < n;i++){
        var obj = {};
            obj.x = col;
            obj.y = row;
            obj.arriveTime = _.parseInt(a1[i],10);
            obj.runTime = a2[i];
            obj.color = colors[i];
            obj.readingTime = '-';
            obj.tCol = 100;//列距
            obj.tRow = 30;//行距
            P.push(obj)
        }
        return P;
    }
    function renderCPU(s,p){
       p = _.orderBy(p,['arriveTime'],['asc']);
      var y =  p[p.length-1].y+p[p.length-1].tRow*(p.length-1)+200;
      var CUPRect = s.paper.rect(75 ,y,600,20).attr({
            fill: "#d6ecf0",
            stroke: "#ffffff",
            strokeWidth: 1
        });
        s.paper.text(75,y+40,'0').attr({
            fill: "#ffffff",
            stroke: "#ffffff",
        });
      var allTime = 0;
      _.map(p,function(val){
         val.arriveTime = _.parseInt(val.arriveTime);
         val.runTime = _.parseInt(val.runTime);
         allTime+=val.runTime;
       });
     
      var curretTime = 0;
      var readyItem = '';
      var plantReadyTime = '(';
      _.map(p,function(val,index){
          val.name = 'P'+index;
        val.ry = val.y+val.tRow*(index);
        val.left = 75+curretTime*(600/allTime);
        val.right = 75+(curretTime+val.runTime)*(600/allTime);
        curretTime+=val.runTime;
        val.width = val.right-val.left;
        s.paper.text(val.right,y+40,curretTime).attr({
            fill: "#ffffff",
            stroke: "#ffffff",
        });
        val.Rect = s.paper.rect(val.left ,370,0,20).attr({
            fill: val.color,
            stroke: "#ffffff",
            strokeWidth: 1
        });
        val.circle = s.paper.circle(val.left, y-30,25).attr({
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 0
        });
        val.curretTime = curretTime-val.arriveTime;
        readyItem += val.name+ ' = ' +val.curretTime+";";
        plantReadyTime += val.curretTime + '+';


        //process
        var tempArrive = val.arriveTime;
        s.paper.text(val.x, val.ry,val.name).attr({
            fill: val.color,
            stroke: val.color,
        });
        //到达时间
        s.paper.text(val.x+val.tCol,val.ry,_.toString(tempArrive)).attr({
          fill: "#ffffff",
          stroke: "#ffffff",
        })
        //运行时间
        s.paper.text(val.x+val.tCol*2,val.ry,val.runTime).attr({
            fill: "#ffffff",
            stroke: "#ffffff",
        });
        //等待时间
        
        val.readingTimeObj =  s.paper.text(val.x+val.tCol*3,val.ry,val.readingTime).attr({
            fill: "#ffffff",
            stroke: "#ffffff",
        });

      })
      plantReadyTime = plantReadyTime.substring(0,plantReadyTime.length-1)+') = '+allTime/p.length;
      s.paper.rect(440,20,2,y-200).attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
        });
      s.paper.text(450,60,'等待时间:').attr({
        fill:'#ffffff'
      })
      s.paper.text(450,140,'平均等待时间:').attr({
        fill:'#ffffff'
      })
      return p;
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
    function FCFSchedul(s){
      s.clear();
      var n = 4;


      var coursesArr = getArrStr();
      var a1 = [];
      var a2 = [];
      _.map(coursesArr,function(val){
        a1.push(_.toString(val[0]));
        a2.push(_.toString(val[1]));
      })
      
      

      var Ps = renderView(s,n,a1,a2);
      Ps = renderCPU(s,Ps);
      console.table(Ps)
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
      var isAnimate = false;
      var pObjs = _.cloneDeep(Ps)
        pObjs = _.reverse(pObjs);
        var backPObjs=[];
        pObjs.status = 1
        //事件队列
        clickBtnRect.click(function(){
         if(!isAnimate){
            if(pObjs.length > 0&&pObjs.status==1){
               backPObjs.push(Active(pObjs.pop()));
            }else if(pObjs.length == 0&&pObjs.status==1){
              pObjs.status=2
               //等待时间
              var readyItem = "";
              var plantReadyTime = "(";
              var allTime = 0;
              _.map(backPObjs,function(val){
                readyItem+= val.name+ ' = ' +val.readingTime+";";
                plantReadyTime += val.readingTime + '+';
                allTime += val.readingTime;
              })
              plantReadyTime =  plantReadyTime.substring(0,plantReadyTime.length-1)+")/"+backPObjs.length+'='+allTime/backPObjs.length;
              backPObjs.readyItem = s.paper.text(450,80,readyItem).attr({
                fill:'#ffffff'
              })
              //平均等待时间
              backPObjs.plantReadyTime = s.paper.text(450,160,plantReadyTime).attr({
                fill:'#ffffff'
              })
              }else if(pObjs.length==0&&pObjs.status==2){
              _.map(backPObjs,function(backPObj){
                backPObj.readingTimeObj.remove();
              })
              backPObjs.readyItem.remove();
              backPObjs.plantReadyTime.remove();
              backPObjs = [];
              pObjs = _.cloneDeep(Ps);
              pObjs = _.reverse(pObjs);
              _.map(Ps,function(val){
                val.Rect.attr({
                  width:0
                });
                val.circle.attr({
                  cx:val.left,
                  fill:'transparent',
                  strokeWidth: 0
                });
                val.readingTime='-';
                val.readingTimeObj.remove();
              })
              pObjs.status=1;
            }
          }
        })
        function Active(pObj){
           isAnimate = true;
            pObj.Rect.animate({
              width:pObj.width
            },pObj.runTime*100,function(){
              isAnimate =false;
            })
            pObj.circle.attr({
              fill:pObj.color,
              strokeWidth: 5
            }).animate({
              cx:pObj.right
            },pObj.runTime*100,function(){
              //更新等待时间
               if(pObj.readingTime != '-'){
                  pObj.readingTime = pObj.readingTime;
                }else{
                  pObj.readingTime = pObj.arriveTime;
                }
                pObj.readingTimeObj.remove();
                pObj.readingTimeObj=s.paper.text(pObj.x+pObj.tCol*3,pObj.ry,_.toString(pObj.readingTime)).attr({
                    fill: "#fff143",
                    stroke: "#fff143",
                });

              _.map(pObjs,function(val){
                  if(val.curretTime > val.arriveTime){
                    if(val.readingTime != '-'){
                      val.readingTime = val.readingTime+pObj.runTime;
                    }else{
                      val.readingTime = pObj.readingTime+pObj.runTime-val.arriveTime;
                    }
                  }else{
                    val.readingTime = pObj.runTime;
                  }
                val.readingTimeObj.remove();
                val.readingTimeObj=s.paper.text(val.x+val.tCol*3,val.ry,_.toString(val.readingTime)).attr({
                    fill: "#ffffff",
                    stroke: "#ffffff",
                });
              })


              isAnimate =false;
            })
       
        return pObj;
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