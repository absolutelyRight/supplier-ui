<template>
    <section>
        <el-card class="box-card" style="margin-top: 20px;">
            <div slot="header" class="clearfix">
                <span class='title'>{{name}}</span>
                <div style="float: right;margin-top: -8px;">
                    <el-button type="success" v-if="reviewStatus=='审核中'" v-on:click="pass">通过</el-button>
                    <el-button type="danger" v-if="reviewStatus=='审核中'" v-on:click="reject">不通过</el-button>
                    <el-button type="primary" v-on:click="goBack">返回</el-button>
                </div>
                <!--<el-button style="float: right; padding: 3px 0" type="text" v-on:click="goBack">返回</el-button>-->
            </div>
            <div v-html="noticeInfo" class="text"></div>
            <div class="time">{{time}}</div>
        </el-card>
    </section>
</template>

<script>
    import {getNotices,passNoticeReview,rejectNoticeReview} from '../../api/api'
    export default {
        name: "",
        data() {
            return {
                noticeInfo: "",
                name:'',
                time:'',
                reviewStatus:""
            }
        },
        methods:{
            goBack(){
                this.$router.back(-1);
            },
            getData(){
                getNotices().then(list=>{
                    list.data.some(l=> {
                        if(l.id==this.$route.params.id){
                            this.noticeInfo= l.info;
                            this.name= l.name;
                            this.time= l.time;
                            this.reviewStatus= l.reviewStatus;
                        }
                    })
                })
            },
            pass(){
                passNoticeReview({id:this.$route.params.id}).then(res=>{
                    if(res){this.reviewStatus="审核通过";
                        this.goBack();}
                });
            },
            reject(){
                rejectNoticeReview({id:this.$route.params.id}).then(res=>{
                    if(res){this.reviewStatus="审核不通过";
                    this.goBack();}
                });
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style scoped>
    .text{
        color:#666;
        min-height: 200px;
    }
    .time{
        text-align:right;
        padding:10px 0
    }
    .box-card .title{
        font-weight:bold;
        font-size: 16px;
    }
</style>