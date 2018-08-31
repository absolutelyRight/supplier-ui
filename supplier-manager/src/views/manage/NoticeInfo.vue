<template>
    <section>
        <!--工具条-->
        <div style="padding-top: 100px;
                    padding-bottom: 20px;" v-html="noticeInfo"></div>
        <el-button type="primary" @click="download" plain >下载附件</el-button>
        <el-button type="success" v-if="notice.reviewStatus== '审核中'" @click="agree" plain>审核通过</el-button>
        <el-button type="danger" v-if="notice.reviewStatus== '审核中'"  @click="refuse" plain>审核不通过</el-button>
        <el-button type="primary" @click="refuse" plain>返回</el-button>
    </section>
</template>

<script>
    import {getNoticeId} from '../../api/api';
    import {updataNotice} from '../../api/api';
    export default {
        name: "",
        data() {
            return {
                notice: {},
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
            download(){
                window.location.href = 'http://localhost:8084/static/公司简介.zip';
            },
            agree() {
                this.notice.reviewStatus= "审核通过";
                updataNotice(this.notice);
                this.$router.back(-1);
            },
            refuse() {
                this.notice.reviewStatus = "审核未通过";
                updataNotice(this.notice);
                this.$router.back(-1);
            },
            goBack() {
                this.$router.back(-1);
            }
        },
        mounted() {
            if (this.$route.params.id) {
                getNoticeId({id: this.$route.params.id}).then(data => {
                        this.notice = data;
                        if (data.noticeInfo != null) {
                            this.noticeInfo = this.notice.noticeInfo;
                        }
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>