<template>
  <div class="app-container bgImg">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <v-link class="navbar-brand" href="/"><img src="../assets/images/blue-logo.png" height="50px"></v-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><v-link href="/">首页<span class="sr-only">(current)</span></v-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
      <div id="js-pjax-loader-bar" class="pjax-loader-bar is-loading">
        <div class="progress"></div>
      </div>
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
.bgImg{
  height: 100%;
}
/*.content-container{
  height:calc( 100% - 127px );
}*/
.copyright{
  height: 75px;
}
  .navbar-brand > img {
      display: block;
      margin-top: -15px;
  }
  .navbar{
     margin-bottom: 0px; 
  }
  .pjax-loader-bar {
      position: absolute;
      top: 50px;
      left: 0;
      z-index: 40;
      opacity: 0;
      -webkit-transition: opacity 0.4s linear 0.4s;
      transition: opacity 0.4s linear 0.4s;
  }
  .pjax-loader-bar.is-loading {
      opacity: 1;
      -webkit-transition: none;
      transition: none
  }
  .pjax-loader-bar .progress {
      position: absolute;
      top: 50px;
      left: 0;
      height: 2px;
      background: #77b6ff;
      box-shadow: 0 0 10px rgba(119,182,255,0.7);
      -webkit-transition: width 0.4s ease;
      transition: width 0.4s ease;
      width: 100%;
  }
  .copyright {
      background: #111;
      font-size: 13px;
      text-align: center;
      color: #555555;
      padding-top: 28px;
      padding-bottom: 28px;
      border-top: 1px solid #303030;
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
  .svg-container{
    margin: 20px 0 0 0;
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