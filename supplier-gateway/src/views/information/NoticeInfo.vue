<template>
    <section>
        <!--工具条-->
        <div style="padding-top: 100px;
                    padding-bottom: 20px;" v-html="noticeInfo"></div>

        <el-row>
            <el-col :span="2">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                    <el-button size="small" type="primary">上传附件</el-button>
                </el-upload>
            </el-col>
            <el-col :span="3">
                <el-button type="primary" size="small" @click="download" plain>下载附件</el-button>
            </el-col>
        </el-row>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                <el-form-item label="报价：（元）" v-show="notice.type=='采购公告'">
                    <el-input v-model.number="price"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-show="notice.type=='采购公告'" v-on:click="tender">投标</el-button>
                    <el-button type="primary" v-on:click="goBack">返回</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </section>
</template>

<script>
    import {supplierTender} from '../../api/api';
    import {getNoticeId} from '../../api/api';

    export default {
        name: "",
        data() {
            return {
                notice: {},
                price:0,
                noticeInfo: "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">一、招标编号：</span></strong><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">JWC/H-20170816-056</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">二、项目概况：</span></strong></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;1.项目地点：江苏建筑职业技术学院内。</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;2.招标范围：</span><span style=\"margin: 0px; padding: 0px; text-decoration-line: underline; background: none !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\"><span style=\"margin: 0px; padding: 0px; background: none !important;\">服务器</span>4台</span></span><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">（详见招标文件）</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">三、投标人资质要求：</span></strong></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;1、具有独立法人资格、企业法人营业执照；</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;2、有销售同样产品的业绩；</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;3、投标单位应独立参与投标；</span></p>\n" +
                "<p style=\"margin: 0px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">&nbsp;&nbsp;&nbsp;&nbsp;4、具有良好的企业资信，近年无不良业绩，并自愿遵守招标须知的厂家；</span></p>\n" +
                "<p style=\"margin: 0px 0px 0px 28px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">5、</span><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">相关产品生产、销售、代理资质；</span></p>\n" +
                "<p style=\"margin: 0px 0px 0px 28px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">6、具有一定的经营规模，注册资金人民币100万元以上（含100万元）。</span></p>\n" +
                "<p style=\"margin: 0px 0px 0px 28px; padding: 0px; background-color: #f2f2f2; line-height: 32px; font-size: 15px; color: #333333; font-family: 'Microsoft YaHei', helvetica, verdana, san-serif; background-image: none !important; background-position: initial !important; background-size: initial !important; background-repeat: initial !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important;\"><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">7</span><span style=\"margin: 0px; padding: 0px; font-family: 仿宋; font-size: 16px; background: none !important;\">、详见招标文件。</span></p>\n"
            }
        },
        methods: {
            goBack() {
                this.$router.back(-1);
            },
            download() {
                window.location.href = 'http://localhost:8084/static/公司简介.zip';
            },
            tender() {
                var user = JSON.parse(sessionStorage.getItem('user'));
                let tender = {
                    supplierId: user.sId,
                    purchaseId: this.notice.id,
                    supplier: user,
                    purchase: this.notice,
                    status: '未选中',
                    price: this.price,
                    time: '2018/08/31'
                };
                supplierTender(tender);
                alert("投标成功");
            }
        },
        mounted() {
            // console.log(this.$router.query.id)
            // this.isbuy=this.$router.params.isbuy
            if (this.$route.params.id) {
                getNoticeId({id: this.$route.params.id}).then(data => {
                        console.log(data);
                        this.notice = data;
                        this.noticeInfo = this.notice.noticeInfo;
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>