<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item >
                    <el-button type="text">{{title}}</el-button>
                </el-form-item>
                <el-form-item >
                    <el-button type="text">{{createTime}}</el-button>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-button type="primary" v-on:click="goBack">返回</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <div style="padding-top: 100px;
                    padding-bottom: 20px;" v-html="noticeInfo"></div>

    </section>
</template>

<script>
    import { getMessage } from '../../api/api';
    import { format } from '../../common/js/util';
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
                this.createTime=format(new Date(data.createTime),'yyyy/MM/dd');
                this.title=data.title;
            })
        }
    }
</script>

<style scoped>

</style>