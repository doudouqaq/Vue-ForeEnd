<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 基础表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.item_name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="item_name" label="售卖名称"></el-table-column>
                <el-table-column prop="item_danwei" label="售卖单位"></el-table-column>
                <el-table-column prop="item_num" label="售卖数量"></el-table-column>
                <el-table-column prop="input_price" label="订单进价"></el-table-column>
                <el-table-column prop="sale_price" label="订单售价"></el-table-column>
                <el-table-column prop="input_total" label="进价总和"></el-table-column>
                <el-table-column prop="sale_total" label="售价总和"></el-table-column>
                <el-table-column prop="customer_name" label="顾客名字"></el-table-column>
                <el-table-column prop="customer_phone" label="顾客电话"></el-table-column>
                <el-table-column prop="time" label="订单时间"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
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
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getSaleItemData } from '../../api/index';
import { delSaleItemData } from '../../api/index';
import { searchSaleItemData } from '../../api/index';
import { updateSaleItemData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                item_name: '',
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
             getSaleItemData().then(res => {
                this.tableData = res.data;
                console.log(res.data);
            });
        },
        // 触发搜索按钮
        handleSearch() {
            console.log(this.query);
            if(this.query.item_name === '')
            {
                this.getData();
            }
            else{
                searchSaleItemData(this.query).then(res => {
                console.log(res.data);
                this.tableData = res.data
                });
            }
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    delSaleItemData(row).then(res => {
                });
                    this.$message.success('删除成功');
                    this.getData();
                })
                .catch(() => {});
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            updateSaleItemData(this.form).then(res => {
                console.log(res.data);
            });
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
