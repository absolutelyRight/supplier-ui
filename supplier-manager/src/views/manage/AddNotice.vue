<template>
    <section>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="公告类型" prop="noticeType">
                <el-select v-model="ruleForm.noticeType" placeholder="请选择公告类型">
                    <el-option label="普通公告" value="普通公告"></el-option>
                    <el-option label="招标公告" value="招标公告"></el-option>
                    <el-option label="中标公告" value="中标公告"></el-option>
                    <el-option label="采购公告" value="采购公告"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="公告名称" prop="name" style="width: 300px;">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="截止日期"  style="width: 300px;">
                <el-date-picker
                        v-model="ruleForm.endtime"
                        type="date"
                        end-placeholder="结束日期">
                </el-date-picker>
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
                <el-button type="primary" @click=submitForm(ruleForm)>提交</el-button>
                <el-button @click=resetForm(ruleForm)>重置</el-button>
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
    import util from "../../common/js/util";
    import {  addNotice} from '../../api/api';

    export default {
        name: "AddNotice",
        data() {
            return {
                fileList: [],
                ruleForm: {
                    name: '',
                    noticeType: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    endtime:""
                },
                rules: {
                    name: [
                        {required: true, message: '请输入公告名称', trigger: 'blur'},
                    ],
                    noticeType: [
                        {required: true, message: '请选择公告类型', trigger: 'change'}
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
        methods: {
            submitForm(formName) {
                let resnoticedata = {
                    "name": formName.name,
                    "type": formName.noticeType,
                    creater: '老王',
                    tenderType: '邀请招标',
                    createDepartment: '品高广州/云产品中心/大数据部',
                    status:"已截止",
                    "time": util.formatDate.format(new Date(), "yyyy-MM-dd"),
                    reviewStatus: '审核中',
                    noticeInfo:this.tinymceHtml,
                    endtime:util.formatDate.format(this.ruleForm.endtime, "yyyy/MM/dd")
                };
                console.log(resnoticedata);
                addNotice(resnoticedata);
                this.$router.back(-1);
                // this.$refs[formName].validate((valid) => {
                //
                //     if (valid) {
                //
                //         console.log(this.tinymceHtml);
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
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
        },
        mounted() {
            tinymce.init({})
        },
        components: {Editor}
    }
</script>

<style scoped>

</style>