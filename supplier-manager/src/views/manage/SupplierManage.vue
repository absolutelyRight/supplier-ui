<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <router-link :to="{path:'/addSupplier'}">
                    <el-button type="primary">增加供应商</el-button>
                </router-link>
                <el-form-item style="float: right">
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item style="float: right">
                    <el-input v-model="filters.name" placeholder="供应商名称"></el-input>
                </el-form-item>
                <el-cascader
                        style="float: right;margin-right: 10px"
                        placeholder="请选择供应商类型"
                        expand-trigger="hover"
                        :options="options"
                        v-model="selectedOptions2"
                        @change="handleChange">
                </el-cascader>
            </el-form>
        </el-col>

        <!--列表-->
        <el-table :data="suppliers" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column prop="name" label="供应商名称" min-width="200">
            </el-table-column>
            <el-table-column prop="companyType" label="公司类型" min-width="200">
            </el-table-column>
            <el-table-column prop="registerTime" label="注册时间" min-width="200" sortable>
            </el-table-column>
            <el-table-column prop="evaluate" label="评价" min-width="80" sortable>
            </el-table-column>
            <el-table-column label="以往投标情况" min-width="200">
                <template slot-scope="scope">
                    <el-button size="small" type="text">查看以往投标情况</el-button>
                </template>
            </el-table-column>
            <el-table-column label="以往中标情况" min-width="200">
                <template slot-scope="scope">
                    <el-button size="small" type="text">查看以往中标情况</el-button>
                </template>
            </el-table-column>
            <el-table-column label="详情" min-width="100">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="openInfo()">查看详情</el-button>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="200">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                    <el-button type="primary" size="small">修改</el-button>
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
    export default {
        name: "SupplierManage",
        data() {
            return {
                filters: {
                    name: ''
                },
                suppliers: [
                    {
                        name: "广州超越电子有限公司",
                        companyType: "硬件服务/显卡",
                        registerTime: "2018-07-23 15:12:30",
                        evaluate: "76",
                    },
                    {
                        name: "广州超越电子有限公司",
                        companyType: "硬件服务/显卡",
                        registerTime: "2018-07-23 15:12:30",
                        evaluate: "76",
                    },
                    {
                        name: "广州超越电子有限公司",
                        companyType: "硬件服务/显卡",
                        registerTime: "2018-07-23 15:12:30",
                        evaluate: "76",
                    },
                    {
                        name: "广州超越电子有限公司",
                        companyType: "硬件服务/显卡",
                        registerTime: "2018-07-23 15:12:30",
                        evaluate: "76",
                    },
                ],
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                selectedOptions: [],
                selectedOptions2: [],
                listLoading: false,
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            openInfo() {
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
        }
    }
</script>

<style scoped>

</style>