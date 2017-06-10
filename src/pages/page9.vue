<template>
  <main-layout>
    <div class="content-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="illustrate-container">
              <div class="title">动态存储分配算法—分页置换算法（worst-fit）</div>
              <blockquote>
               分页 (paging) 内存管理方案允许进程的物理地址空间可以是非连续的。分页避免了将不同大小的内存块匹配到交换空间上这样的麻烦。当位于内存中的代码或数据需要换出时，必须先在备份区上找到空间，这时间题就产生了。</blockquote>
               
              <div class="input-group">
              <label class="input-group-addon"  for="InputEnd1">内存块</label>
              <input type="text" class="form-control" id="InputEnd1" placeholder="[0,50]" value="[0,50]">
            </div><div class="input-group">
              <label class="input-group-addon"  for="InputEnd2">占用块</label>
              <input type="text" class="form-control" id="InputEnd2" placeholder="[0,6],[8,12],[28,30],[40,45]" value="[0,6],[8,12],[28,30],[40,45]">
            </div><div class="input-group">
              <label class="input-group-addon"  for="InputEnd3">待分配</label>
              <input type="text" class="form-control" id="InputEnd3" placeholder="" value="[18,10,1,5,2]">
            </div><div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-default" id="updateParams" type="button">提交</button>
              </span>
            </div>
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
          WorstFit(s);
          $('#updateParams').click(function(){
              WorstFit(s);
            })
        }
      }
  	}
    function renderMemory(s,a0,a1){
      var flag = {};
     flag.hight = 300;
     flag.width = 100;
     flag.row = 80;
     flag.col = 100;
     flag.start = _.parseInt(a0[0],10);
     flag.end = _.parseInt(a0[1],10);
     flag.allMemory = flag.end-flag.start;
      //绘制内存
      s.paper.rect(flag.row ,flag.col,flag.width,flag.hight).attr({
          fill: "#d6ecf0",
          stroke: "#ffffff",
          strokeWidth: 1
      });
      _.map(a0,function(v){
        s.paper.text(flag.row-20,flag.col+2+flag.hight/flag.allMemory*_.parseInt(v,10),v).attr({
            fill: "#ffffff",
            stroke: "#ffffff",
        });
      })
      _.map(a1,function(val){
        var _obj = {};
        _obj.start = flag.col+flag.hight/flag.allMemory*_.parseInt(val[0],10);
        _obj.long = flag.hight/flag.allMemory*(_.parseInt(val[1],10)-_.parseInt(val[0],10));
        _obj.end = flag.col+flag.hight/flag.allMemory*_.parseInt(val[1],10);

        s.paper.rect(flag.row,_obj.start,100,_obj.long).attr({
            fill: "#4b5cc4",
            stroke: "#ffffff",
            strokeWidth: 1
        });
        _.map(val,function(v){
          s.paper.text(flag.row-20,flag.col+2+flag.hight/flag.allMemory*_.parseInt(v,10),v).attr({
              fill: "#ffffff",
              stroke: "#ffffff",
          });
        })
      })
    }
    function getEmptyFlag(s,a0,a1){
     var flag = {};
     flag.hight = 300;
     flag.width = 100;
     flag.row = 80;
     flag.col = 100;
     flag.start = _.parseInt(a0[0],10);
     flag.end = _.parseInt(a0[1],10);
     flag.allMemory = flag.end-flag.start;
     flag.status = [];
       //绘制内存占用情况
      var beforeEnd = flag.col;//起始位置，绝对
      var beforeEmptyEnd = flag.start;//起始位置，相对
      //对a1进行重新排序
      a1 = _.sortBy(a1, function(o) { return _.parseInt(o[0],10); });
      
      _.map(a1,function(val){
        var _obj = {};
        //记录当前占用块
        _obj.start = flag.col+flag.hight/flag.allMemory*_.parseInt(val[0],10);
        _obj.blockStart = _.parseInt(val[0],10);
        _obj.long = flag.hight/flag.allMemory*(_.parseInt(val[1],10)-_.parseInt(val[0],10));
        _obj.blockLong = _.parseInt(val[1],10)-_.parseInt(val[0],10);
        _obj.end = flag.col+flag.hight/flag.allMemory*_.parseInt(val[1],10);
        _obj.blockEnd = _.parseInt(val[1],10);
        //记录空闲块
        var __emptyObj = {};
        if(_obj.blockStart - beforeEmptyEnd>0){
          __emptyObj.start = beforeEnd;
          __emptyObj.emptyStart = beforeEmptyEnd;
          __emptyObj.emptyLong = _obj.blockStart - beforeEmptyEnd;
          __emptyObj.longSingle = flag.hight/flag.allMemory;
          __emptyObj.x = flag.row+102;
          __emptyObj.row = flag.row;
          beforeEnd = _obj.end;
          beforeEmptyEnd = _obj.blockEnd;
        }else{
          beforeEnd = _obj.end;
          beforeEmptyEnd = _obj.blockEnd;
          __emptyObj = null;
        }
        __emptyObj?flag.status.push(__emptyObj):__emptyObj;
      })
      //处理末尾
      if(flag.end - beforeEmptyEnd>0){
        var __emptyObj = {};
          __emptyObj.start = beforeEnd;
          __emptyObj.emptyStart = beforeEmptyEnd;
          __emptyObj.emptyLong = flag.end - beforeEmptyEnd;
          __emptyObj.x = flag.row+102;
          __emptyObj.row = flag.row;
          __emptyObj.longSingle = flag.hight/flag.allMemory;
          __emptyObj?flag.status.push(__emptyObj):__emptyObj;
        }


      //返回空闲区flag
      return  flag;
    }
    function renderWork(s,a0,a2){
      var row = 555;
      var col = 80;
      var hight = 300;
      var colors = ['#44cef6','#9ed048','#ffa400','#f47983','#f05654','#56004f']
      var allMemory = _.parseInt(a0[1],10)-_.parseInt(a0[0],10);
      var corretCol = col;
      var allWorks = [];
      _.map(a2,function(val,index){
         var temp = {};
           temp.rect =  s.paper.rect(row,corretCol,100,hight/allMemory*_.parseInt(val,10)).attr({
                fill: colors[index],
                stroke: "#ffffff",
                strokeWidth: 1
            }).clone();
            s.paper.text(row-80,corretCol+hight/allMemory*_.parseInt(val,10)/2+2,'作业' + (index+1)).attr({
                fill: "#f47983",
                stroke: "#ffffff",
                strokeWidth: 1
            });
            s.paper.text(row+45,corretCol+hight/allMemory*_.parseInt(val,10)/2+2,val).attr({
                fill: "#f47983",
                stroke: "#ffffff",
                strokeWidth: 1
            });
            temp.x = row;
            temp.y = corretCol;
            temp.isFix = false;
            temp.numNext = 0;
            temp.long = val;
        allWorks.push(temp);
        corretCol+=hight/allMemory*_.parseInt(val,10)+20;
      })
      
      return allWorks;
    }
    
    function getArrStr(){
      var tempCourseInfo =$('#InputEnd2').val();
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
    function WorstFit(s){
      s.clear();
            var a0 = $('#InputEnd1').val();
          a0 = a0.slice(1,a0.length-1).split(',');

      var a1 = getArrStr();//内存被占用情况
      var _a1 = _.cloneDeep(a1);

      var a2 = $('#InputEnd3').val();
          a2 = a2.slice(1,a2.length-1).split(',');
      s.paper.text(110,50,'内存').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      renderMemory(s,a0,a1);
      

      s.paper.text(590,50,'作业').attr({
          fill: "#ffffff",
          stroke: "#ffffff",
      });
      var W = _.reverse(renderWork(s,a0,a2));
      var evts = _.cloneDeep(W);
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
        clickBtnRect.click(function(){
          if(!isAnimate){
            isAnimate = true;
            if(evts.length > 0){
                Active(evts.pop(),getEmptyFlag(s,a0,a1));
            }else{
              //重置
              WorstFit(s)
            }
          }
        })
        function Active(Obj,M){
          M.status = _.orderBy(M.status,['emptyLong'],['desc']);
          //对应a1也要进行排序
           _.map(a1,function(val){
             _.filter(a1,function(value,index){
              if(_.nth(val,1) == _.nth(value,0)){
                val[1] = value[1];
                _.pullAt(a1,index);
              }
             })
           })
          var ___a1 = [];
          _.map(M.status,function(val){
            _.map(a1,function(value){
              if(val.emptyStart == _.parseInt(value[1],10)){
                ___a1.push(value);
              }
            })
          })
          a1 = _.cloneDeep(___a1);
          
          toStart(Obj,M);
          //到达第一个空闲区开始
          function toStart(Obj,v){
            Obj.rect.animate({
              x:v.row+102,
              y:v.status[0].start
            },1000,function(){
              objActive(Obj,v.status,0)
            })
          }
          //当个待分配作业一一对比
          function objActive(Obj,status,n){
             if(!isallow(Obj,status,n)){
                var ex =  s.paper.text(status[n].x,status[n].start,'没有满足该作业的空闲区,作业进入等待队列。').attr({
                  fill:'#ffffff'
                })
                ex.animate({},1000,function(){
                  Obj.rect.remove();
                  ex.remove();
                })
                isAnimate = false;
                return;
             }else if(isallow(Obj,status,n)&&!Obj.isFix){
                fixMemory(Obj,status,n)
              }else if(!Obj.isFix){
                toNextEmptyBlock(Obj,status,n)
              }
          }

          //判断允许分配
          function isallow(Obj,status,n){
            if(status[n].emptyLong>=_.parseInt(Obj.long,10)){
              return true;
            }else{
              return false;
            }
          }
          
          //移动到下一个空闲区
          function toNextEmptyBlock(Obj,status,n){
            Obj.numNext++;
            var statu = status[n+1];
            console.log(status[n])
            var ex =  s.paper.text(status[n].x,status[n].start,'空闲区大小不满足此作业内存需求，不允许分配').attr({
                fill:'#ffffff'
              })
              ex.animate({
                x:status[n].x
              },500,function(){
                  Obj.rect.animate({
                    x:statu.x,
                    y:statu.start
                  },1000,function(){
                    ex.remove();
                    objActive(Obj,status,n+1);
                  })
              })
          }
          //插入空闲区
          function fixMemory(Obj,status,n){
            var ex =  s.paper.text(status[n].x,status[n].start,'空闲区大小满足此作业内存需求，允许分配').attr({
                fill:'#ffffff'
              })
             Obj.rect.animate({
              x:status[n].row
            },1000,function(){
              a1[n][1] = status[n].emptyStart+_.parseInt(Obj.long,10);
             var isEqual = _.filter(a1,function(val){
              return a1[n][1]==_.nth(val,0);
             })
              if(isEqual.length==0&&a1[n][1]!=_.nth(a0,1)){
                  s.paper.text(M.row-20,status[n].start+status[n].longSingle*_.parseInt(Obj.long,10),_.toString(status[n].emptyStart+_.parseInt(Obj.long,10))).attr({
                      fill: "#ffffff",
                      stroke: "#ffffff"
                  });
              }
              ex.remove();
              Obj.isFix = true;
              isAnimate = false;
            })
            
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