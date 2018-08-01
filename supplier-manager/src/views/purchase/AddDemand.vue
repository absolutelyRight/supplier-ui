<template>
    <section>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="采购类型" prop="noticeType">
                <el-select v-model="ruleForm.noticeType" placeholder="请选择采购类型">
                    <el-option label="软件" value="软件"></el-option>
                    <el-option label="硬件" value="硬件"></el-option>
                    <el-option label="外包" value="外包"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="需求标题" prop="name">
                <el-input v-model="ruleForm.name" style="width: 300px"></el-input>
            </el-form-item>
            <div>
                <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
            </div>
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
    import tinymce from 'tinymce/tinymce'
    import 'tinymce/themes/modern/theme'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/plugins/image'
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'
    export default {
        name: "AddNotice",
        data() {
            return {
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
                        { required: true, message: '请选择采购类型', trigger: 'change' }
                    ]
                },
                tinymceHtml: '请输入内容',
                init: {
                    language_url: '/static/langs/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '/static/skins/lightgray',
                    height: 300,
                    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                    toolbar:
                        'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                    branding: false
                }
            };
        },
        mounted () {
            tinymce.init({})
        },
        components: {Editor},
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