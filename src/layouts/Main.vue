<template>
  <div class="app-container bgImg">
    <header class="main-header p-r" style="background-image: url(http://static.ghostchina.com/image/b/5e/877fa798be75dbe791dba07ac4811.jpg)">
        <div class="acm">
        <img src="../assets/images/white-logo.png" width="80%" alt="">
        <p>欢迎使用操作系统原理课程教学辅助系统
        </p>
        <p>
        <small>
          OSGO 是一个简洁、强大的操作系统原理课程教学辅助系统。和OSGO一起快乐学习吧！
        </small>
        </p>
        </div>
    </header>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../assets/images/blue-logo.png" height="50px"></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页<span class="sr-only">(current)</span></a></li>
            <li><a href="#">关于</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="搜索" aria-describedby="basic-addon2">
              <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-search"></span></span>
            </div>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <slot></slot>


    <a href="#" id="back-to-top" style="display: block;"><span class="glyphicon glyphicon-triangle-top"></span></a>


    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <span>Copyright © <a href="http://www.ghostchina.com/">Ghost中文网</a></span> | 
                    <span><a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备11008151号</a></span> | 
                    <span>京公网安备11010802014853</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import $ from '../assets/jquery/jquery.js'
  //import '../assets/css/mian.css'
  export default {
    components: {
      VLink
    }
  }
  var themeApp = {
    backToTop: function() {
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      $('#back-to-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},1000);
        return false;
      });
    },
    init: function() {
      themeApp.backToTop();
    }
  }
  $(document).ready(function(){
    themeApp.init();
  });
</script>

<style scoped>

  .navbar-brand > img {
      display: block;
      margin-top: -15px;
  }
  .navbar {
    border-radius: 0;
  }
  .main-header{
    height: 300px;
  }
  .main-header p{
    color: #fff;
  }
  .copyright {
      background: #111;
      font-size: 13px;
      text-align: center;
      color: #555555;
      padding-top: 28px;
      padding-bottom: 28px;
      border-top: 1px solid #303030;
      /*position: fixed;
      width: 100%;
      bottom: 0;*/
  }
  #back-to-top {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: rgb(2, 153, 255);
    color: #ffffff;
    text-align: center;
    border-radius: 2px;
    z-index: 1;
    display: none;
  }
  #back-to-top span {
      width: 30px;
      height: 30px;
      line-height: 30px;
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .main-header p{
        font-size: 20px;
      }
  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: 992px) { 
    .main-header p{
        font-size: 24px;
      }
  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width:1200px) { 
    .main-header p{
        font-size: 30px;
      }
  }
</style>