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
                    <el-form-item label="订单名称">
                        <el-input v-model="form.item_name"></el-input>
                    </el-form-item>
                    <el-form-item label="订单数量">
                        <el-input v-model="form.item_num"></el-input>
                    </el-form-item>
                    <el-form-item label="订单进价">
                        <el-input v-model="form.item_jinjia"></el-input>
                    </el-form-item>
                    <el-form-item label="订单单位">
                        <el-input v-model="form.item_danwei"></el-input>
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
import { addInputItemData } from '../../api/index';
export default {
    name: 'baseform',
    data() {
        return {
            form: {
                item_name:'',
                item_num:'',
                item_jinjia:'',
                item_danwei:''
            }
        };
    },
    methods: {
        onSubmit() {
            addInputItemData(this.form).then(res => {
            });
            this.$message.success('提交成功！');
        }
    }
};
</script>