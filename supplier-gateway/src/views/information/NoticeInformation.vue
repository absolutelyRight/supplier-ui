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
			<el-table-column prop="name" label="公告名" width="200">
			</el-table-column>
			<el-table-column
					prop="type"
					label="公告类型"
					min-width="200"
					:filters="[{ text: '招标公告', value: '招标公告' }, { text: '普通公告', value: '普通公告' }, { text: '中标公告', value: '中标公告' }]"
					:filter-method="filterTag"
					filter-placement="bottom-end">
				<template slot-scope="scope">
					<el-tag :type="scope.row.type === '中标公告' ? 'success' : 'primary'" disable-transitions>{{scope.row.type}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="详情" min-width="200">
				<template slot-scope="scope">
					<el-button type="text" @click="openInfo(scope.row.info)" size="small">查看详情</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="creater" label="发布人" min-width="200">
			</el-table-column>
			<el-table-column prop="time" label="发布时间" min-width="200">
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
    import {  removeUser} from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                notices: [
                    {
                        name:"品高XX公告",
						type:"招标公告",
                        creater:"完全正确",
                        time:"2018-7-26 22:55",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        name:"品高XX公告",
                        type:"招标公告",
                        creater:"完全正确",
                        time:"2018-7-26 22:55",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        name:"品高XX公告",
                        type:"普通公告",
                        creater:"完全正确",
                        time:"2018-7-26 22:55",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        name:"品高XX公告",
                        type:"中标公告",
                        creater:"完全正确",
                        time:"2018-7-26 22:55",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    },
                    {
                        name:"品高XX公告",
                        type:"招标公告",
                        creater:"完全正确",
                        time:"2018-7-26 22:55",
                        info: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
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
            openInfo(info) {
                this.$alert('<strong>这是 <i>'+ info +'</i> 片段</strong>', '详情', {
                    dangerouslyUseHTMLString: true
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