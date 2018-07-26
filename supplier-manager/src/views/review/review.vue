<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" ref="form" :model="form" label-width="80px">
                <el-form-item label="供应商名" style="width: 300px">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="注册时间">
                    <el-date-picker
                            v-model="form.timeLimit"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="是否评价">
                    <el-select v-model="form.alreadyAssess" placeholder="评价状态" style="width: 125px">
                        <el-option label="已评价" value="1"></el-option>
                        <el-option label="未评价" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否审核">
                    <el-select v-model="form.alreadyReview" placeholder="审核状态" style="width: 125px">
                        <el-option label="已审核" value="1"></el-option>
                        <el-option label="未审核" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table :data="suppliers" highlight-current-row v-loading="listLoading" style="width: 100%;">
            <el-table-column prop="sName" label="供应商名称" width="120">
            </el-table-column>
            <el-table-column prop="creditCode" label="统一社会信用代码" min-width="150" >
            </el-table-column>
            <el-table-column prop="network" label="公司网址" width="100">
            </el-table-column>
            <el-table-column prop="product" label="经营范围" width="120">
            </el-table-column>
            <el-table-column prop="registerTime" label="注册时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column prop="alreadyAssess" label="是否确认" width="120">
            </el-table-column>
            <el-table-column prop="alreadyReview" label="是否审核" width="120">
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" :page-size="20" style="float:right;">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
    import ElFormItem from "element-ui/packages/form/src/form-item";
    import { getSuppliersList } from '../../api/api';

    export default {
        components: {ElFormItem},
        name: "review",
        data() {
            return {
                form: {
                    name: '',
                    timeLimit: '',
                    alreadyAssess: '',
                    alreadyReview: ''
                },
                suppliers: [],
                listLoading: false
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            getSuppliers() {
                getSuppliersList({}).then((rsp) => {
                    this.suppliers = rsp.data.suppliers;
                    for (var i=0; i<= this.suppliers.length; i++){
                        if (this.suppliers[i].alreadyAssess == '0'){
                            this.suppliers[i].alreadyAssess = '否';
                        }else if(this.suppliers[i].alreadyAssess == '1'){
                            this.suppliers[i].alreadyAssess = '是';
                        }
                        if (this.suppliers[i].alreadyReview == '0'){
                            this.suppliers[i].alreadyReview = '否';
                        }else if(this.suppliers[i].alreadyReview == '1'){
                            this.suppliers[i].alreadyReview = '是';
                        }
                    }
                });
            },
        },
        mounted() {
            this.getSuppliers();
        }
    }
</script>

<style scoped lang="scss">
    .area{
        margin: 20px;
    }
</style>