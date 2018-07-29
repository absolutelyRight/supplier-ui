<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item style="float: right">
                    <el-button type="primary">查询</el-button>
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
            <el-table-column label="详情" min-width="200">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="openInfo(scope.row.info)">查看详情</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="creater" label="发布人" min-width="200">
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
    import ElFormItem from "element-ui/packages/form/src/form-item";

    export default {
        components: {ElFormItem},
        name: "InfoNotice",
        data() {
            return {
                filters: {
                    name: ''
                },
                notices:[
                    {
                        title: '关于供应商XXX审核通过的通知',
                        time: '2018-06-20 12:03:30',
                        info: 'xxxxxxxxxxxxxxx',
                        creater: '老王'
                    },
                    {
                        title: '关于供应商XXX审核通过的通知',
                        time: '2018-06-20 12:03:30',
                        info: 'xxxxxxxxxxxxxxx',
                        creater: '老王'
                    },
                    {
                        title: '关于供应商XXX审核通过的通知',
                        time: '2018-06-20 12:03:30',
                        info: 'xxxxxxxxxxxxxxx',
                        creater: '老王'
                    },

                ],
                listLoading: false
            }
        },
        methods: {
            openInfo(info) {
                this.$alert('<strong>这是 <i>'+ info +'</i> 片段</strong>', '详情', {
                    dangerouslyUseHTMLString: true
                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
        }
    }
</script>

<style scoped lang="scss">
    .area{
        margin: 20px;
    }
</style>