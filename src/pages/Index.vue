<template>
    <main-layout>
        <div class="content-container">
            <div class="contanier-fluid">
                <div class="row">
                    <v-link href="/courseState" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">进程的状态转换</div>
                            <div class="content">
                                <img src="../assets/images/courseState-mask.png" height="424" width="618" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/courseSync" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">信号量机制</div>
                            <div class="content">
                                <img src="../assets/images/courseSync-mask.png" height="424" width="618" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/FCFSchedul" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">先来先服务调度算法</div>
                            <div class="content">
                                <img src="../assets/images/FCFSchedul-mask.png" height="364" width="582" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/SJFSchedul" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">短作业优先调度算法</div>
                            <div class="content">
                                <img src="../assets/images/SJFSchedul-mask.png" height="392" width="627" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/hightResponse" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">高响应比优先调度算法</div>
                            <div class="content">
                                <img src="../assets/images/SJFSchedul-mask.png" height="392" width="627" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/firstFit" class="card-container col-xs-12 col-sm-6 col-md-4"> 
                        <div class="card">
                            <div class="title">首次适应分配</div>
                            <div class="content">
                                <img src="../assets/images/FirstFix-mask.png" height="392" width="627" alt="">
                                 <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/bestFit" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">最佳分配</div>
                            <div class="content">
                                <img src="../assets/images/FirstFix-mask.png" height="392" width="627" alt="">
                                 <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div> 
                    </v-link>
                    <v-link href="/worstFit" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">最差分配</div>
                            <div class="content">
                                <img src="../assets/images/WorstFix-mask.png" height="392" width="627" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/page9" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">分页置换算法</div>
                            <div class="content">
                                <img src="../assets/images/page9-mask.png" height="392" width="627" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                    <v-link href="/bestFit(0)" class="card-container col-xs-12 col-sm-6 col-md-4">
                        <div class="card">
                            <div class="title">分页置换算法</div>
                            <div class="content">
                                <img src="../assets/images/page9-mask.png" height="392" width="627" alt="">
                                <div class="illustrate">以图形的方式展现每种调度算法的优点和缺点，帮助教师讲解课程内容、帮助学生理解知识点</div>
                            </div>
                        </div>
                    </v-link>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'
export default {
    components: {
        MainLayout,
        VLink
    }
}
</script>
<style scoped>
.contanier-fluid>.row {
    width: 100%;
    margin: 0;
}

.card-container {
    margin-bottom: 20px;
    height: 228px;
    position: relative;
    transition: .3s all linear;
}

.card-container:hover,
.card-container:visited {
    text-decoration: none;
}



.card {
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
    width: 100%;
    height: 100%;
    background: #c0c0c0;
}

.card .content {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    position: relative;
    overflow: hidden;
    -webkit-transition: background-size 0.4s;
    transition: background-size 400ms 0ms;
}

.card .content:before {
    top: -100%;
    left: -100%;
}

.card .content:after,
.card .content:before {
    width: 100%;
    content: "";
    display: block;
    background-color: #44BCBC;
    background-color: rgba(68, 188, 188, 0.3);
    position: absolute;
    -webkit-transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 10;
    height: 0;
}

.card .content:before {
    top: -100%;
    left: -100%;
}

.card .content:after {
    right: -100%;
    bottom: -100%;
}

.card:hover .content:before {
    top: 0;
    left: 0;
    height: 100%;
}

.card:hover .content:after {
    right: 0;
    bottom: 0;
    height: 100%;
}

.card .content img{
    width: 100%;
    height: 100%;
}

.card .content .illustrate {
    color: #fff;
    position: absolute;
    z-index: 111;
    top: 50%;
    padding: 50px;
    transform: translateY(-50%);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}



.card:hover .content .illustrate {
    opacity: 1;
}

.content-container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    min-height: 500px;
}

.card>.title {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    overflow: hidden;
    color: #fff;
    font-weight: bold;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(270deg, rgba(75, 150, 220, .7), #4b96dc);
}

.card>.content {
    height: calc(100% - 48px);
}

.post {
    padding: 35px;
    background: #ffffff;
    margin-bottom: 35px;
    position: relative;
    overflow: hidden;
}

.post .featured {
    position: absolute;
    background: rgb(2, 153, 255);
    color: #ffffff;
    text-align: center;
    top: -12px;
    right: -32px;
    width: 80px;
    height: 40px;
    line-height: 54px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.post .post-head {
    text-align: center;
}

.post .post-head .post-title {
    margin: 0;
    font-size: 2.5em;
    line-height: 1em;
}

.post .post-head .post-title a {
    color: #303030;
}

.post .post-head .post-meta {
    color: #959595;
    margin: 14px 0 0px;
}

.post .post-head .post-meta span {
    margin: 0px 7px;
    white-space: nowrap;
}

.post .post-content {
    margin: 30px 0;
}

.post-content {
    font: 400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
    color: #444443;
}

.post-content p {
    margin-top: 0;
    margin-bottom: 1.46em;
}


.btn-default {
    border: 1px solid rgb(2, 153, 255);
    background: rgb(2, 153, 255);
    color: #ffffff;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.btn {
    padding: 7px 14px;
    border-radius: 2px;
}

.post .post-footer {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 21px 0 0;
}

.post .post-footer .tag-list {
    color: #959595;
    line-height: 28px;
}

.pull-left {
    float: left!important;
}
</style>