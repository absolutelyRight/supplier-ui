<template>
    <section>
        <!--工具条-->
        <!--<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item style="float: right">
                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-input v-model="filters.name" placeholder="输入关键字查询"></el-input>
                </el-form-item>
            </el-form>
        </el-col>-->

        <!--列表-->
        <el-table :data="tenders" highlight-current-row v-loading="listLoading" style="width: 100%">
            <el-table-column prop="name" label="供应商名称" width="200">
            </el-table-column>
            <el-table-column prop="price" label="报价" width="100">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    min-width="100"
                    :filters="[{ text: '未选中', value: 0 }, { text: '已选中', value: 1 }, { text: '已确认', value: 2 }]"
                    :filter-method="filterStatus"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status === '已提交' ? 'success' : 'primary'" disable-transitions>{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="time" label="投标时间" min-width="200">
            </el-table-column>
            <el-table-column label="详情" min-width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="openInfo(scope.row.id)">查看详情</el-button>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="200">
                <template slot-scope="scope">
                    <el-button v-if="!defined||scope.row.status==2" :type="scope.row.status=='未选中'?'success':scope.row.status=='已选中'?'primary':'text'" size="small" @click="select(scope.row.id)">{{scope.row.status=='未选中'?'选择':scope.row.status=='已选中'?'确认':'已中标'}}</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->

        <el-pagination
                small
                layout="prev, pager, next"
                :total="total"
				:size="10"
                style="float: right"
        >
        </el-pagination>

    </section>
</template>

<script>
    import { getTenderList,selectTender,defineTender } from '../../api/api';
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                tenders: [],
                defined:false,
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
            select() {
                defineTender();
            },
            //获取用户列表
            getUsers() {
                getTenderList({purchaseId:this.$route.params.purchaseId}).then(data=>{
                    if(data){
                        this.tenders=[];
                        data.list.forEach(e=>{
                            this.tenders.push(e);
                            if(e.status=='已确认'){
                                this.defined=true;
                            }
                        })
                        this.total=data.total;
                    }
                },res=>{
                    console.log(res)
                })
            },
            openInfo(id){
                this.$router.push({path:'/tenderInfo/'+id})
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.type === value;
            },
            filterTenderType(value, row) {
                return row.tenderType === value;
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
            select:function(id){
                var t=this.tenders.filter(e=>e.id==id);
                t.forEach(e=>{
                    if(e.status=='未选中'){
                        selectTender({purchaseId:this.$route.params.purchaseId,tenderId:id}).then((success)=>{
                            if(success){
                                t.forEach(e=>e.status='已选中');
                            }
                        });
                    }
                    else if(e.status=='已选中'){
                         defineTender({purchaseId:this.$route.params.purchaseId,tenderId:id}).then((success)=>{
                             if(success){
                                 this.tenders.filter(e=>e.id==id).forEach(e=>e.status='已确认');
                                 this.defined=true;
                             }
                         });
                    }
                })
            },

        },
        mounted() {
            this.getUsers();
        }
    }

</script>

<style scoped>

</style>