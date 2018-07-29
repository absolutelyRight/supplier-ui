<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 8px;">
            <label style="font-size: 18px;color: #909399">公司基本信息</label>
        </el-col>

        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
                <el-form-item label="密码" prop="sPassword">
                    <el-input type="password" v-model="ruleForm.sPassword"></el-input>
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
                <el-form-item label="E-mail" prop="sEmailUrl">
                    <el-input v-model="ruleForm.sEmailUrl"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="7">
                <el-form-item label="联系人" prop="sContact">
                    <el-input v-model="ruleForm.sContact"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="邮箱验证码" prop="sEmailCode">
                    <el-input v-model="ruleForm.sEmailCode"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4">
                <el-button style="margin-left: 15px">获取验证码</el-button>
            </el-col>
            <el-col :span="7" style="margin-left: 120px">
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
            <div class="formFooter">
                <el-button type="primary" @click="submitForm('ruleForm')">提交审核</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
        </el-form>
    </section>
</template>
<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
        components: {ElButton},
        data() {
            return {
                ruleForm: {
                    sFullName: '',
                    sFax: '',
                    sShortName: '',
                    sSocialCreditCode: '',
                    sUrl: '',
                    sPassword: '',
                    sPhone: '',
                    sAddress: '',
                    sDeputy: '',
                    sEmailUrl: '',
                    sContact: '',
                    sEmailCode: ''

                },
                fileList: [],
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
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('注册成功!');
                    } else {
                        console.log('注册失败!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
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
            }
        }
    }
</script>

<style scoped>
    .formFooter{
        position: absolute;
        top: 500px;
        text-align: center;
        width: 80%;
    }
</style>