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
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table :data="suppliers" highlight-current-row v-loading="listLoading" style="width: 100%;">
            <el-table-column prop="sShortName" label="供应商名称" width="120">
            </el-table-column>
            <el-table-column prop="sSocialCreditCode" label="统一社会信用代码" min-width="150" >
            </el-table-column>
            <el-table-column prop="sUrl" label="公司网址" width="100">
            </el-table-column>
            <el-table-column prop="sProduct" label="经营范围" width="120">
            </el-table-column>
            <el-table-column prop="sFoundDate" label="注册时间" min-width="180" sortable>
            </el-table-column>
            <el-table-column
                    prop="alreadyReview"
                    label="是否审核"
                    width="120"
                    :filters="[{ text: '已审核', value: '已审核' }, { text: '未审核', value: '未审核' }]"
                    :filter-method="filterAlreadyReview"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.alreadyReview === '已审核' ? 'success' : 'primary'" disable-transitions>{{scope.row.alreadyReview}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="small" type="success">详情</el-button>
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
                    alreadyReview: ''
                },
                suppliers:"",
                listLoading: false
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            formatter(row, column) {
                return row.address;
            },
            filterAlreadyAssess(value, row) {
                return row.alreadyAssess === value;
            },
            filterAlreadyReview(value, row) {
                return row.alreadyReview === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            getSuppliers() {
                getSuppliersList().then(data => {
                    this.suppliers = data;
                    for (var i=0; i< this.suppliers.length; i++){
                        if (this.suppliers[i].alreadyReview == '0'){
                            this.suppliers[i].alreadyReview = '未审核';
                        }else if(this.suppliers[i].alreadyReview == '1'){
                            this.suppliers[i].alreadyReview = '已审核';
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

<style type="text/scss" scoped lang="scss">
</style>