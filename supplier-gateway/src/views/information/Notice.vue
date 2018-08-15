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
		</el-col>

		<!--列表-->
		<el-table :data="notices" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="title" label="标题" min-width="200">
			</el-table-column>
			<el-table-column prop="time" label="时间" min-width="200" sortable>
			</el-table-column>
			<el-table-column prop="creater" label="发布人" min-width="200">
			</el-table-column>
			<el-table-column label="详情" min-width="200">
				<template slot-scope="scope">
					<el-button size="small" type="text" @click="openInfo(scope.row.info)">查看详情</el-button>
				</template>
			</el-table-column>
			<el-table-column label="操作" min-width="150">
				<template slot-scope="scope">
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
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
    import { removeUser} from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                notices: [
                    {
                        title:"品高XX公告",
                        time:"2018-7-26 15:50",
                        creater:"完全正确",
						info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        title:"品高XX公告",
                        time:"2018-7-26 15:50",
                        creater:"完全正确",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        title:"品高XX公告",
                        time:"2018-7-26 15:50",
                        creater:"完全正确",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        title:"品高XX公告",
                        time:"2018-7-26 15:50",
                        creater:"完全正确",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        title:"品高XX公告",
                        time:"2018-7-26 15:50",
                        creater:"完全正确",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    }
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
            openInfo(info) {
                this.$router.push({path: '/noticeInfo'});
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