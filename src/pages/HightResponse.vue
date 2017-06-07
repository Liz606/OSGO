<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">处理机调度——高响应比优先（HRRN）</div>
              <blockquote>
                高响应比优先（Highest Response Ratio Next，HRRN）调度算法计算就绪队列进程的响应，调度时总是选择响应比最高的就绪进程得到CPU。响应比=（进程已等待时间＋进程要求运行时间）／进程要求运行时间。此调度算法首先有利于短进程，但也兼顾到等待时间长的进程，该算法是FCFS算法和SJF算法的折衷。
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
            var s = new Snap('#svg');
            hightResponseSVG(s);
            $('#updateParams').click(function(){
              hightResponseSVG(s);
            })
          }
        } 
  	}
    function renderView(s,n,a1,a2){
      s.clear();
      var col = 80;
      var row = 80;
      var tCol = 100;//列距
      var tRow = 30;//行距
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
      for(var i = 0;i < n;i++){
        var obj = {};
            obj.name = 'P'+i;
            obj.x = col;
            obj.y = row;
            obj.arriveTime = a1[i];
            obj.runTime = a2[i];
            obj.color = colors[i];
            //process
            s.paper.text(col, row,obj.name).attr({
                fill: "#ffffff",
                stroke: "#ffffff",
            });
            
            //到达时间
            s.paper.text(col+tCol,row,obj.arriveTime).attr({
              fill: "#ffffff",
              stroke: "#ffffff",
            })
            //运行时间
            s.paper.text(col+tCol*2,row,obj.runTime).attr({
                fill: "#ffffff",
                stroke: "#ffffff",
            });
            row+=tRow;
            P.push(obj)
        }
        return P;
    }
    function renderCPU(s,p){
      var y = p[p.length-1].y+200;
      _.map(p,function(val){
         val.y=y;
         val.arriveTime = _.parseInt(val.arriveTime);
         val.runTime = _.parseInt(val.runTime);
       });
      p =  _.orderBy(p,['arriveTime'],['asc']);
      s.paper.rect(375,20,2,y-200).attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
        });
      s.paper.text(390,60,'等待时间:').attr({
        fill: "#fff",
        'font-weight': 100,
        'font-size': 16, 
        });
      s.paper.text(390,140,'平均等待时间:').attr({
        fill: "#fff",
        'font-weight': 100,
        'font-size': 16, 
        });
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
    function hightResponseSVG(s){
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
      var clickBtnRect = s.paper.group(s.paper.path('M70 425 L95 440 L70 455  Z').attr({
            fill: "#44cef6",
            stroke: "#ffffff",
            strokeWidth: 1
          }),s.paper.circle(80, 440,25).attr({
          fill: "transparent",
          stroke: "#ffffff",
          strokeWidth: 5
        }));
      var isAnimate = false;
      var pObjs = _.cloneDeep(Ps)
        pObjs = _.reverse(pObjs);
      var corretTime = 0;
      var backPObjs=[];
      pObjs.status = 1
        //事件队列
        clickBtnRect.click(function(){
          if(!isAnimate){
            if(pObjs.length > 0&&pObjs.status==1){
                //根据corretTime更新pObjs
              //更新进程列表
              pObjs = updatePObjs(corretTime);
              backPObjs.push(Active(pObjs.pop()))
            }else if(pObjs.length == 0&&pObjs.status==1){
              pObjs.status=2
              //等待时间
              var readyItem = "";
              var plantReadyTime = "(";
              var allTime = 0;
              _.map(backPObjs,function(val){
                readyItem+= val.name+ ' = ' +val.readyTime+";";
                plantReadyTime += val.readyTime + '+';
                allTime += val.readyTime;
              })
              plantReadyTime =  plantReadyTime.substring(0,plantReadyTime.length-1)+")/"+backPObjs.length+'='+allTime/backPObjs.length;
              backPObjs.readyItem = s.paper.text(390,80,readyItem).attr({
                fill:'#ffffff'
              })
              //平均等待时间
              backPObjs.plantReadyTime = s.paper.text(390,160,plantReadyTime).attr({
                fill:'#ffffff'
              })
            }else if(pObjs.length==0&&pObjs.status==2){
              //重置
              
              _.map(backPObjs,function(val){
                val.Rect.remove();
                val.circle.remove();
                val.text.remove();
                if(val.firstText){
                  val.firstText.remove();
                }
              })
              backPObjs.readyItem.remove();
              backPObjs.plantReadyTime.remove();
              pObjs = _.reverse(_.cloneDeep(Ps));
              corretTime=0;
              pObjs.status=1;
            }
          }
        })
        function Active(pObj){
           renderUse(pObj);
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
              isAnimate =false;
            })
            return pObj;
        }
        function updatePObjs(time){
          var temp = [];
          //得到已经到达的进程
          _.map(pObjs,function(valObj){
            if(valObj.arriveTime<time){
              valObj.hightResponse = (time-valObj.arriveTime+valObj.runTime)/valObj.runTime
              temp.push(valObj);
            }
          })
          //对已经到达的进程按照预估时间大小进行排序
           temp =_.reverse(_.sortBy(temp, function(o) {return o.hightResponse}));
           //把原来进程数组里的前几个替换掉
           for(var j=0;j<temp.length;j++){
            pObjs[j]=temp[j]
           }
          return pObjs;
        }
        function renderUse(pObj){
          pObj.readyTime = corretTime;
            if(pObj.readyTime==0){
              pObj.firstText = s.paper.text(75,pObj.y+40,'0').attr({
                  fill: "#ffffff",
                  stroke: "#ffffff",
              });
            }
           pObj.left = 75+pObj.readyTime*(600/50);
           pObj.width = (pObj.runTime)*(600/50);
           pObj.right = 75+(pObj.readyTime+pObj.runTime)*(600/50);
           corretTime+=pObj.runTime;
            pObj.Rect = s.paper.rect(pObj.left,370,0,20).attr({
                fill: pObj.color,
                stroke: "#ffffff",
                strokeWidth: 1
            });
            pObj.circle = s.paper.circle(pObj.left, pObj.y-30,25).attr({
              fill: "transparent",
              stroke: "#ffffff",
              strokeWidth: 0
            });
            pObj.text = s.paper.text(pObj.right,pObj.y+40,corretTime).attr({
                fill: "#ffffff",
                stroke: "#ffffff",
            });

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