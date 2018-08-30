<template>
    <section>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class='title'>{{title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="goBack">返回</el-button>
          </div>
          <div v-html="noticeInfo" class="text"></div>
          <div class="time">{{createTime}}</div>
        </el-card>
    </section>
</template>

<script>
    import { getMessage } from '../../api/api';
    import util from '../../common/js/util';
    export default {
        name: "",
        data() {
            return {
                noticeInfo: "<br><br><br><br><br><br>",
                createTime:'',
                title:''
            }
        },
        methods:{
            goBack(){
                this.$router.back(-1);
            }
        },
        mounted(){
            getMessage({id:this.$route.params.id}).then(data=>{
                this.noticeInfo=data.content;
                this.createTime=util.formatDate.format(new Date(data.createTime),'yyyy/MM/dd');
                this.title=data.title;

            })
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