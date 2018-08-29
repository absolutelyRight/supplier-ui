<template>
    <section>
        <el-col :span="24" v-if="showForm1" class="toolbar" style="padding-bottom: 8px;">
            <label style="font-size: 18px;color: #909399">公司基本信息</label>
        </el-col>

        <el-col :span="24" v-if="showForm2" class="toolbar" style="padding-bottom: 8px;">
            <label style="font-size: 18px;color: #909399">公司概况</label>
        </el-col>

        <el-form :model="ruleForm" v-if="showForm1"  :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-col :span="7">
                <el-form-item label="公司名称" prop="sFullName">
                    <el-input v-model="ruleForm.sFullName"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="传真">
                    <el-input v-model="ruleForm.sFax"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="公司简称">
                    <el-input v-model="ruleForm.sShortName"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="统一信用代码" prop="sSocialCreditCode">
                    <el-input v-model="ruleForm.sSocialCreditCode"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="公司网址" prop="sUrl">
                    <el-input v-model="ruleForm.sUrl"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="电话" prop="sPhone">
                    <el-input v-model="ruleForm.sPhone"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="地址" prop="sAddress">
                    <el-input v-model="ruleForm.sAddress"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="法定代表人" prop="sDeputy">
                    <el-input v-model="ruleForm.sDeputy"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="联系人" prop="sContact">
                    <el-input v-model="ruleForm.sContact"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="E-mail(将作为您的账号)" prop="sEmailUrl" >
                    <el-input v-model="ruleForm.sEmailUrl"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="密码" prop="sPassword" style="width: 380px">
                    <el-input type="password" v-model="ruleForm.sPassword"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="确认密码" prop="confirmPassword" style="width: 380px;margin-left: 390px">
                    <el-input type="password" v-model="ruleForm.confirmPassword"></el-input>
                </el-form-item>
            </el-col>
            <div class="formFooter">
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
        </el-form>

        <el-form :model="ruleForm" v-if="showForm2" :rules="ruleBack" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-col :span="7">
                <el-form-item label="注册资本" prop="sMoney">
                    <el-input v-model="ruleForm.sMoney"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="实际注册资本" prop="sRealMoney">
                    <el-input v-model="ruleForm.sRealMoney"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="公司成立日期" prop="sFoundDate">
                    <el-date-picker
                            v-model="ruleForm.sFoundDate"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="开户行" prop="sBankName">
                    <el-input v-model="ruleForm.sBankName"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="银行账号" prop="sBankAccount">
                    <el-input v-model="ruleForm.sBankAccount"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="户号">
                    <el-input v-model="ruleForm.sBankAccountName"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="银行信用状况" prop="sBankCredit">
                    <el-input v-model="ruleForm.sBankCredit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="平均月营业额">
                    <el-input v-model="ruleForm.sAvgIncome"></el-input>
                </el-form-item>
            </el-col>
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
                <el-button size="small" type="primary">公司文件上传</el-button>
                <div slot="tip" class="el-upload__tip">多个文件请上传压缩包</div>
            </el-upload>
            <div class="formFooter">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
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
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.showForm1){
                            this.showForm1 = false;
                            this.showForm2 = true;
                        }else if (this.showForm2){
                            // register(this.ruleForm).then(data => {
                            //     console.log(data);
                            // });
                            supplierRegister(this.ruleForm).then(data => {
                                console.log(data);
                            })
                        }
                    } else {
                        console.log('注册失败!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                alert(formName);
                this.$refs[formName].resetFields();
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