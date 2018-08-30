<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">供应商全称</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sFullName}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">供应商简称</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sShortName}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">传真</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sFax}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">统一信用代码</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sSocialCreditCode}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">网址</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sUrl}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">电话</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sPhone}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">地址</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sAddress}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">联系人</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sDeputy}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">邮箱地址</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sEmailUrl}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">联系人</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sDeputy}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">注册资本</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sMoney}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">实际注册资本</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sRealMoney}}</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><div class="grid-content bg-purple">平均月营业额</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sAvgIncome}}</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">主要产品及服务</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">{{supplier.sProduct}}</div></el-col>
            </el-row>
            <el-button type="primary" @click="download" plain >下载附件</el-button>
            <el-button type="success" @click="review" plain >审核通过</el-button>
            <el-button type="danger" plain >审核不通过</el-button>
        </el-col>
    </section>
</template>
<script>
    import { review } from '../../api/api';
    export default {
        data() {
            return {
                supplier:{}
            }
        },
        methods:{
            review(){
                review({supplier:this.supplier}).then(data => {
                    console.log(data);
                    this.$router.push({path: '/'});
                })
            },
            download(){
                window.location.href = 'http://localhost:8084/static/公司简介.zip';
            }
        },
        mounted() {
            this.supplier = this.$route.query.supplier;
            console.log(this.supplier)
        }
    }
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
</style>