<template>
    <section>
        <div class="header_carousel">
            <el-carousel :interval="4000" height="270px">
                <el-carousel-item>
                    <img src="../../assets/carousel/im1.png" style="border-left: 30px;width: 100%" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/carousel/im2.png" style="border-left: 30px;width: 100%" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/carousel/im3.png" style="border-left: 30px;width: 100%" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="info_list">
            <el-row>
                <el-col :span="14" style="margin-right: 10px;margin-left: 13px"><div class="grid-content">
                    <el-tabs type="border-card" @tab-click="tabClick">
                        <el-tab-pane label="招标公告">
                            <el-collapse v-model="activeNames" style="height: 220px;overflow-y: auto;">
                                <el-collapse-item title="品高软件服务器采购招标公告" name="1">
                                    <div>品高软件近期需采购服务器若干</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="品高北京硬盘采购招标公告" name="2">
                                    <div>品高北京近期需采购硬盘若干</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="知韫科技服务器采购招标公告" name="3">
                                    <div>知韫科技近期需采购服务器若干</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="4">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="5">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-tab-pane>
                        <el-tab-pane label="中标公告">
                            <el-collapse v-model="activeNames" style="height: 220px;overflow-y: auto;">
                                <el-collapse-item title="关于鼎兴电子中标品高软件服务器采购项目的公告" name="1">
                                    <div>关于鼎兴电子中标品高软件服务器采购项目的公告</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="品高北京硬盘采购招标公告" name="2">
                                    <div>品高北京近期需采购硬盘若干</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="知韫科技服务器采购招标公告" name="3">
                                    <div>知韫科技近期需采购服务器若干</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="4">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="5">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-tab-pane>
                        <el-tab-pane label="通知">角色管理</el-tab-pane>
                        <router-link :to="{path:'/noticeInformation',query: {noticeType: informationType}}">
                            <a href="#" style="float: right">更多</a>
                        </router-link>
                    </el-tabs>
                </div></el-col>
                <el-col :span="9" style="margin-left: 10px"><div class="grid-content bg-purple">
                    <el-tabs type="border-card" v-if=this.isLogin>
                        <el-tab-pane label="采购公告">
                            <el-collapse v-model="activeNames" style="height: 220px;overflow-y: auto;">
                                <el-collapse-item title="品高软件服务器采购招标公告" name="7">
                                    <div>品高软件近期需采购服务器若干</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="品高北京硬盘采购招标公告" name="8">
                                    <div>品高北京近期需采购硬盘若干</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="知韫科技服务器采购招标公告" name="9">
                                    <div>知韫科技近期需采购服务器若干</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="10">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                                <el-collapse-item title="微软技术中心泰坦显卡招标公告" name="10">
                                    <div>微软技术中心近期需采购泰坦显卡若干</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                    <div><el-button  size="small" type="text" style="float: right" @click="openInfo()">查看详情</el-button></div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-tab-pane>
                        <router-link :to="{path:'/procurementNotice'}">
                            <a href="#" style="float: right">更多</a>
                        </router-link>
                    </el-tabs>
                    <el-form v-if=!this.isLogin :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
                        <h3 class="title">系统登录</h3>
                        <el-form-item prop="account">
                            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
                        </el-form-item>
                        <el-form-item prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
                        <el-form-item style="width:100%;padding-left: 25px">
                            <el-button type="primary" style="width:40%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>

                            <router-link :to="{path:'/register'}">
                                <el-button type="success" style="width:40%;">注册</el-button>
                            </router-link>
                            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
                        </el-form-item>
                    </el-form>
                </div></el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
    import { requestLogin,testApi } from '../../api/api';
    import ElButton from "element-ui/packages/button/src/button";
    export default {
        components: {ElButton},
        name: "sys-index",
        inject : ['reload'],
        data() {
            return {
                activeNames: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '2018年度主机公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-04',
                    name: '2018年度硬件公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-01',
                    name: '2018年度硬件公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }, {
                    date: '2016-05-03',
                    name: '2018年度服务器公开招标',
                    status: '已截至'
                }],
                isLogin: false,
                informationType: '招标公告',
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: 'admin'
                },
                rules2: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                },
                checked: true
            }
        },
        mounted: function () {
            var user = sessionStorage.getItem('user');
            this.isLogin = !!user;
            testApi().then(data => {
                console.log(data);
            })
        },
        methods: {
            tabClick(se){
                this.informationType = se.label;
            },
            openInfo() {
                this.$router.push({path: '/noticeInfo'});
            },
            handleSubmit2(ev) {
                var _this = this;
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
                        requestLogin(loginParams).then(data => {
                            if(data.data.uAccount === loginParams.username && data.data.uPassword === loginParams.password){
                                sessionStorage.setItem('user',  JSON.stringify(data.data));
                                this.reload();
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style type="text/scss" scoped lang="scss">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .info_list{
        position: relative;
        top: 20px;
        min-width: 800px;
    }
    .info_list label {
        color: #409EFF;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-tabs__content {
        height: 50px;
        overflow-y: auto;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .login-container {
        border-radius: 5px;
        background-clip: padding-box;
        margin: auto;
        padding: 20px 22% 15px 22%;;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0px auto 20px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0px 0px 10px 0px;
        }
    }
</style>