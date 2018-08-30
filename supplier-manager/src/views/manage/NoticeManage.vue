<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <router-link :to="{path:'/addNotice'}">
                    <el-button type="primary">添加公告</el-button>
                </router-link>
                <el-form-item style="float: right">
                    <el-button type="primary" v-on:click="getnotices">查询</el-button>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-input v-model="filters.name" placeholder="输入关键字查询"></el-input>
                </el-form-item>
            </el-form>
        </el-col>

        <!--列表-->
        <el-table :data="notices" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <el-table-column prop="name" label="公告名" width="200">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="公告类型"
                    min-width="150"
                    :filters="[{ text: '招标公告', value: '招标公告' }, {text: '采购公告', value: '采购公告'},{ text: '普通公告', value: '普通公告' }, { text: '中标公告', value: '中标公告' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.type === '中标公告' ? 'success' : 'primary'" disable-transitions>
                        {{scope.row.type}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="reviewStatus"
                    label="审核状态"
                    width="120"
                    :filters="[{ text: '审核中', value: '审核中' }, { text: '通过', value: '通过' },{ text: '未通过', value: '未通过' }]"
                    :filter-method="filterAlreadyReview"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.reviewStatus === '审核通过' ?
                    'success' :
                    scope.row.reviewStatus === '审核未通过' ? 'danger':
                    'primary'" disable-transitions>{{scope.row.reviewStatus}}</el-tag>
                </template>
            </el-table-column>
            <!--<el-table-column prop="reviewStatus" label="状态" min-width="100">-->
            <!--</el-table-column>-->
            <el-table-column prop="creater" label="发布人" min-width="100">
            </el-table-column>
            <el-table-column prop="time" label="发布时间" min-width="200">
            </el-table-column>
            <el-table-column prop="endtime" label="截止时间" min-width="200">
            </el-table-column>
            <el-table-column label="详情" min-width="100">
                <template slot-scope="scope">
                    <el-button type="text" @click="openInfo(scope.row.id)" size="small">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->

        <el-pagination
                small
                layout="prev, pager, next"
                :total="total"
                style="float: right"
        >
        </el-pagination>

    </section>
</template>

<script>
    import {removeUser} from '../../api/api';
    import {getNotices} from '../../api/api';
    import {updataNotice} from '../../api/api';
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                notices: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                }

            }
        },
        methods: {
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            getnotices() {
                this.notices=[];
                getNotices().then(data => {
                    data.data.filter(e=>(!this.filters.name|| e.name.indexOf(this.filters.name)>-1)).forEach(e=>{
                        this.notices.push(e)
                    });
                this.total=this.notices.length;
                }).catch(function (response) {
                        console.log(response);
                    });
            },
            //获取用户列表
            getUsers() {

            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.type === value;
            },
            filterReviewStatus(value, row) {
                return row.reviewStatus === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            //通过
            handleOn: function (index, row) {
                row.reviewStatus = "审核通过";
                updataNotice(row);
                this.notices = [];
                this.getnotices();
            },
            handleOff: function (index, row) {
                row.reviewStatus = "审核未通过";
                updataNotice(row);
                this.getnotices();
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                //NProgress.start();
                let para = {id: row.id};
                removeUser(para).then((res) => {
                    this.listLoading = false;
                //NProgress.done();
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getUsers();
            })
                ;
            }).
                catch(() => {}
                )
                ;
            },
            openInfo(info) {
                let path='/noticeInfo/'+info.id;
                this.$router.push({path:path});
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
        },
        mounted() {
            this.getnotices();
        }
    }
</script>

<style scoped>

</style>