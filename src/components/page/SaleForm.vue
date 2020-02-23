<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="售卖名称">
                        <el-input v-model="form.item_name"></el-input>
                    </el-form-item>
                    <el-form-item label="售卖单位">
                        <el-input v-model="form.item_danwei"></el-input>
                    </el-form-item>
                    <el-form-item label="售卖数量">
                        <el-input v-model="form.item_num"></el-input>
                    </el-form-item>
                    <el-form-item label="订单进价">
                        <el-input v-model="form.input_price"></el-input>
                    </el-form-item>
                    <el-form-item label="订单售价">
                        <el-input v-model="form.sale_price"></el-input>
                    </el-form-item>
                    <el-form-item label="进价总和">
                        <el-input v-model="form.input_total"></el-input>
                    </el-form-item>
                    <el-form-item label="售价总和">
                        <el-input v-model="form.sale_total"></el-input>
                    </el-form-item>
                    <el-form-item label="顾客名字">
                        <el-input v-model="form.customer_name"></el-input>
                    </el-form-item>
                    <el-form-item label="顾客电话">
                        <el-input v-model="form.customer_phone"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { addSaleItemData } from '../../api/index';
export default {
    name: 'baseform',
    data() {
        return {
            form: {
                item_name:'',
                item_danwei:'',
                item_num:'',
                input_price:'',
                sale_price:'',
                input_total:'',
                sale_total:'',
                customer_name:'',
                customer_phone:''
            }
        };
    },
    methods: {
        onSubmit() {
            addSaleItemData(this.form).then(res => {
            });
            this.$message.success('提交成功！');
        }
    }
};
</script>