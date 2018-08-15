<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <router-link :to="{path:'/addDemand'}">
                        <el-button type="primary">发起需求</el-button>
                    </router-link>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-input v-model="filters.name" placeholder="输入关键字查询"></el-input>
                </el-form-item>
            </el-form>
        </el-col>

        <!--列表-->
        <el-table :data="notices" highlight-current-row v-loading="listLoading" style="width: 100%">
            <el-table-column prop="name" label="需求名称" width="300">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="采购类型"
                    width="180"
                    :filters="[{ text: '软件服务', value: '软件服务' }, { text: '硬件服务', value: '硬件服务' }, { text: '外包服务', value: '外包服务' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="'primary'" disable-transitions>{{scope.row.type}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    min-width="100"
                    :filters="[{ text: '审核中', value: '审核中' }, { text: '已通过', value: '已通过' }, { text: '未通过', value: '未通过' }]"
                    :filter-method="filterStatus"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status === '已通过' ? 'success' : 'danger'" disable-transitions>{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="time" label="发起时间" min-width="200">
            </el-table-column>
            <el-table-column label="详情" min-width="200">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="openInfo()">查看详情</el-button>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="150">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                    <el-button type="primary" size="small" v-if="scope.row.status !== '审核中' && scope.row.status !== '已通过'">修改</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->

        <el-pagination
                small
                layout="prev, pager, next"
                :total="50"
                style="float: right"
        >
        </el-pagination>

    </section>
</template>

<script>
    import { removeUser } from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                notices: [
                    {
                        name:"品高Xx采购公告",
                        type:"软件服务",
                        status:"审核中",
                        time:"2018-7-26 23:21"
                    },
                    {
                        name:"品高XX采购公告",
                        type:"硬件服务",
                        status:"已截止",
                        time:"2018-7-26 23:21"
                    },
                    {
                        name:"品高XX采购公告",
                        type:"软件服务",
                        status:"已通过",
                        time:"2018-7-26 23:21"
                    },
                    {
                        name:"品高XX采购公告",
                        type:"外包服务",
                        status:"未通过",
                        time:"2018-7-26 23:21"
                    },
                    {
                        name:"品高XX采购公告",
                        type:"软件服务",
                        status:"审核中",
                        time:"2018-7-26 23:21"
                    },


                ],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
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
                        { required: true, message: '请输入姓名', trigger: 'blur' }
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
            //获取用户列表
            getUsers() {

            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.type === value;
            },
            openInfo() {
                this.$router.push({path: '/noticeInfo'});
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            filterStatus(value, row) {
                return row.status === value;
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = { id: row.id };
                    removeUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
        },
        mounted() {
            this.getUsers();
        }
    }

</script>

<style scoped>

</style>