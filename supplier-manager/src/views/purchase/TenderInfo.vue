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
                             <span type="text" autocomplete="off" class="el-input__inner">{{ruleForm.sFax}}</span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">统一信用代码</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">公司网址</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">电话</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="21">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">地址</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">法定代表人</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">联系人</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">邮箱</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">投标次数</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">中标次数</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
            <el-col :span="7">
                 <div class="el-form-item">
                     <label class="el-form-item__label" style="width: 120px;">评分</label>
                     <div class="el-form-item__content" style="margin-left: 120px;">
                         <div class="el-input">
                             <span type="text" autocomplete="off" class="el-input__inner"></span>
                         </div>
                     </div>
                 </div>
             </el-col>
        </el-form>
    </section>
</template>
<script>
    import {register, supplierRegister} from '../../api/api';
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
                    sPassword: "",
                    sPhone: "",
                    sAddress: "",
                    sDeputy: "",
                    confirmPassword: "",
                    sEmailUrl: "",
                    sContact: "",
                    sEmailCode: "",
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
                    alreadyReview: '0'

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
                showForm1:true,
                showForm2:false,
                showForm3:false,
                showForm4:false,
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
            }
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