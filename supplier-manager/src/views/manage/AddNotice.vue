<template>
    <section>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="公告类型" prop="noticeType">
                <el-select v-model="ruleForm.noticeType" placeholder="请选择公告类型">
                    <el-option label="普通公告" value="普通公告"></el-option>
                    <el-option label="招标公告" value="招标公告"></el-option>
                    <el-option label="中标公告" value="中标公告"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公告名称" prop="name" style="width: 300px">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor>
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
                <el-button size="small" type="primary" style="margin-top: 30px">上传附件</el-button>
            </el-upload>
            <el-form-item style="margin-left: 400px">
                <el-button type="primary">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script>
    import editor from '../../components/editor'
    export default {
        name: "AddNotice",
        data() {
            return {
                content:'公告内容......',
                editorSetting:{
                    height:400,
                },
                ruleForm: {
                    name: '',
                    noticeType: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入公告名称', trigger: 'blur' },
                    ],
                    noticeType: [
                        { required: true, message: '请选择公告类型', trigger: 'change' }
                    ]
                }
            };
        },
        components:{
            'editor':editor
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>