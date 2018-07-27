<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item style="float: right">
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item style="float: right">
					<el-input v-model="filters.name" placeholder="输入关键字查询"></el-input>
				</el-form-item>
			</el-form>
			<el-form :inline="true" :model="filters">

				<el-dropdown split-button type="primary" @click="handleClick" style="float: right;margin-right: 30px" >
					软件服务
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>软件服务</el-dropdown-item>
						<el-dropdown-item>硬件服务</el-dropdown-item>
						<el-dropdown-item>外包服务</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-form-item style="float: right;margin-right: 7px">
					<span>采购类型:</span>
					<!--<el-button type="primary" v-on:click="getUsers">公告类型</el-button>-->
				</el-form-item>
			</el-form>

		</el-col>

		<!--列表-->
		<el-table :data="notices" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="name" label="项目名称" width="300">
			</el-table-column>
			<el-table-column prop="type" label="类型" min-width="200" sortable>
			</el-table-column>
			<el-table-column label="详情" min-width="200">
				<template slot-scope="scope">
					<el-button size="small">查看详情</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="bidtime" label="中标日期" min-width="200">
			</el-table-column>
			<el-table-column prop="time" label="公布日期" min-width="200">
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
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                notices: [
                    {
                        name:"品高XX项目采购",
						type:"软件服务",
                        bidtime:"2018-7-26 23:21",
                        time:"2018-7-27 11:11"
                    },
                    {
                        name:"品高XX项目采购",
                        type:"软件服务",
                        bidtime:"2018-7-26 23:21",
                        time:"2018-7-27 11:11"
                    },
                    {
                        name:"品高XX项目采购",
                        type:"软件服务",
                        bidtime:"2018-7-26 23:21",
                        time:"2018-7-27 11:11"
                    },
                    {
                        name:"品高XX项目采购",
                        type:"软件服务",
                        bidtime:"2018-7-26 23:21",
                        time:"2018-7-27 11:11"
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