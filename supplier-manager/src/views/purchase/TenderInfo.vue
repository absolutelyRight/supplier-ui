<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 8px;">
            <label style="font-size: 18px;color: #909399">公司基本信息</label>
            <el-button style="float: right; padding: 3px 10px" type="text" v-on:click="goBack">返回</el-button>
        </el-col>

        <el-form  label-width="120px" class="demo-ruleForm">
            <el-col :span="7">
                <div class="el-form-item">
                    <label class="el-form-item__label" style="width: 120px;">公司名称</label>
                    <div class="el-form-item__content" style="margin-left: 120px;">
                        <div class="el-input">
                            <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sFullName}}</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">传真</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sFax}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">公司简称</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sShortName}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">统一信用代码</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sSocialCreditCode}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">公司网址</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sUrl}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">电话</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sPhone}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="21">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">地址</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sAddress}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">法定代表人</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sDeputy}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">联系人</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sContact}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">邮箱</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sEmailUrl}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">投标次数</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.tenderTime}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">中标次数</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.winTime}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">评分</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.score}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                <div class="el-form-item">
                    <label class="el-form-item__label" style="width: 120px;">报价</label>
                    <div class="el-form-item__content" style="margin-left: 120px;">
                        <div class="el-input">
                            <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.price}}元</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="el-form-item">
                    <label class="el-form-item__label" style="width: 120px;">提交时间</label>
                    <div class="el-form-item__content" style="margin-left: 120px;">
                        <div class="el-input">
                            <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.time}}</span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-form>
        <el-col :span="21" style="text-align: right"><el-button  type="primary" plain v-on:click="download">下载附件</el-button></el-col>
    </section>
</template>
<script>
    import {getTender} from '../../api/api';
    import util from '../../common/js/util';
    import ElButton from "element-ui/packages/button/src/button";

    export default {
        components: {ElButton},
        data() {
            return {
                ruleForm: {
                    sFullName: "",
                    sFax: "",
                    sShortName: "",
                    sSocialCreditCode: "",
                    sUrl: "",
                    sPhone: "",
                    sAddress: "",
                    sDeputy: "",
                    sEmailUrl: "",
                    sContact: "",
                    sMoney: "",
                    sRealMoney: "",
                    sFoundDate: "",
                    sAvgIncome: "",
                    sBankName: "",
                    sBankCredit: "",
                    sBankAccount: "",
                    sBankAccountName: "",
                    sProduct: "",
                    sClient: "",
                    sAbility: "",
                    alreadyAssess: '0',
                    alreadyReview: '0',
                    score:0,
                    tenderTime:0,
                    winTime:0,
                    price:'',
                    time:''
                },
                fileList: [],
                options: [{
                    value: '硬件',
                    label: '硬件',
                    children: [{
                        value: 'IT硬件',
                        label: 'IT硬件',
                        children: [{
                            value: '服务器',
                            label: '服务器'
                        }, {
                            value: '交换机',
                            label: '交换机'
                        }, {
                            value: '主机硬件',
                            label: '主机硬件'
                        }, {
                            value: '其他',
                            label: '其他'
                        }]
                    }, {
                        value: '日用硬件',
                        label: '日用硬件',
                        children: [{
                            value: '打印机',
                            label: '打印机'
                        }, {
                            value: '办公器材',
                            label: '办公器材'
                        }, {
                            value: '其他',
                            label: '其他'
                        }]
                    }]
                }, {
                    value: '软件',
                    label: '软件',
                    children: [{
                        value: '管理系统',
                        label: '管理系统',
                        children: [{
                            value: '模板建站',
                            label: '模板建站'
                        }, {
                            value: '定制建站',
                            label: '定制建站'
                        }, {
                            value: '其他',
                            label: '其他'
                        }]
                    }, {
                        value: '移动端应用',
                        label: '移动端应用',
                        children: [{
                            value: 'HTML5应用',
                            label: 'HTML5应用'
                        }, {
                            value: '安卓应用',
                            label: '安卓应用'
                        }, {
                            value: '游戏',
                            label: '游戏'
                        }, {
                            value: '其他',
                            label: '其他'
                        }]
                    }]}, {
                    value: '外包',
                    label: '外包',
                    children: [{
                        value: 'JAVA',
                        label: 'JAVA'
                    }, {
                        value: '.NET',
                        label: '.NET'
                    }, {
                        value: '前端开发',
                        label: '前端开发'
                    }, {
                        value: '移动应用',
                        label: '移动应用'
                    }, {
                        value: '其他',
                        label: '其他'
                    }]
                }],
                selectedOptions: "",
                rules: {
                    sFullName: [
                        { required: true, message: '请输入公司全称', trigger: 'blur' }
                    ],
                    sSocialCreditCode: [
                        { required: true, message: '请输入统一信用代码', trigger: 'blur' }
                    ],
                    sUrl: [
                        { required: true, message: '请输入公司网址', trigger: 'blur' }
                    ],
                    sPassword: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    sPhone: [
                        { required: true, message: '请输入电话', trigger: 'blur' }
                    ],
                    sAddress: [
                        { required: true, message: '请输入公司地址', trigger: 'blur' }
                    ],
                    sDeputy: [
                        { required: true, message: '请输入法定代表人', trigger: 'blur' }
                    ],
                    sContact: [
                        { required: true, message: '请输入联系人', trigger: 'blur' }
                    ],
                    sEmailUrl: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' }
                    ],
                    sEmailCode: [
                        { required: true, message: '请输入邮箱验证码', trigger: 'blur' }
                    ],
                    confirmPassword: [
                        { required: true, message: '请再输一次密码', trigger: 'blur' }
                    ]
                },
                ruleBack:{
                    sMoney: [
                        { required: true, message: '请输入注册资本', trigger: 'blur' }
                    ],
                    sRealMoney: [
                        { required: true, message: '请输入实际注册资本', trigger: 'blur' }
                    ],
                    sFoundDate: [
                        { required: true, message: '请选择公司成立日期', trigger: 'blur' }
                    ],
                    sBankCredit: [
                        { required: true, message: '请输入银行信用状况', trigger: 'blur' }
                    ],
                    sBankName: [
                        { required: true, message: '请输入开户行', trigger: 'blur' }
                    ],
                    sBankAccount: [
                        { required: true, message: '请输入银行账号', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            goBack(){
                this.$router.back(-1);
            },
            download(){
                location.href='/static/公司简介.zip';
            }
        },
        mounted(){
            console.log(1);
            getTender({id:this.$route.params.id}).then(data=>{
                this.ruleForm.sAddress=data.sAddress;
                this.ruleForm.sContact=data.sContact;
                this.ruleForm.score=data.score||"无";
                this.ruleForm.sDeputy=data.sDeputy;
                this.ruleForm.sEmailUrl=data.sEmailUrl;
                this.ruleForm.sFax=data.sFax;
                this.ruleForm.sFullName=data.sFullName;
                this.ruleForm.sPhone=data.sPhone;
                this.ruleForm.sShortName=data.sShortName;
                this.ruleForm.sSocialCreditCode=data.sSocialCreditCode;
                this.ruleForm.sUrl=data.sUrl;
                this.ruleForm.tenderTime=data.tenderTime;
                this.ruleForm.winTime=data.winTime;
                this.ruleForm.time=util.formatDate.format(new Date(data.time),'yyyy/MM/dd');
                this.ruleForm.price=data.price;
            });
        }
    }
</script>

<style type="text/scss" scoped lang="scss">
    .formFooter{
        top: 420px;
        right: 670px;
        position: relative;
    }
</style>