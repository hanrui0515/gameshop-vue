<template>
    <div id="merchant-order">
        <BaseLayout>
            <template v-slot:main>
                <div class="d-flex flex-row justify-content-between align-items-end" style="padding: 16px 0">
                    <div>
                        <span class="font-weight-bold" style="font-size: 20px;">订单管理</span>
                    </div>
                </div>
                <table class="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th>订单编号</th>
                        <th>商品信息</th>
                        <th>实付款</th>
                        <th>付款时间</th>
                        <th>订单状态</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in orders">
                        <td>{{item.sn}}</td>
                        <td><a href="#">{{item.goods.title}}</a></td>
                        <td>{{item.price}}</td>
                        <td>{{formatDate(item.orderedAt)}}</td>
                        <td>
                            <template v-if="item.status === 'ordered'">
                                <span class="text-primary">待付款</span>
                            </template>
                            <template v-if="item.status === 'paid'">
                                <span class="text-warning">待发货</span>
                            </template>
                            <template v-if="item.status === 'delivered'">
                                <span class="text-info">待签收</span>
                            </template>
                            <template v-if="item.status === 'completed'">
                                <span class="text-success">交易成功</span>
                            </template>
                            <template v-if="item.status === 'cancelled'">
                                <span class="text-danger">已取消</span>
                            </template>
                        </td>
                        <td>
                            <button class="btn btn-primary">联系客户</button>
                            <template v-if="item.status === 'paid'">
                                <button class="btn btn-warning ml-2">标记发货</button>
                            </template>
                            <template v-if="item.status === 'delivered'">
                                <button class="btn btn-info ml-2">提醒签收</button>
                            </template>
                            <template v-if="item.status === 'cancelled'">
                                <button class="btn btn-outline-danger ml-2">删除订单</button>
                            </template>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </template>
        </BaseLayout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseLayout from './BaseLayout.vue';
    import moment from 'moment';

    @Component({
        components: {BaseLayout}
    })
    export default class extends Vue {
        public orders = [{
            _id: 3,
            sn: 'abcdefg',
            goods: {
                image: '',
                title: '哈哈哈',
            },
            price: 12.23,
            orderedAt: new Date(),
            status: 'completed',
        }, {
            _id: 3,
            sn: 'abcdefg',
            goods: {
                image: '',
                title: '哈哈哈',
            },
            price: 12.23,
            orderedAt: new Date(),
            status: 'ordered',
        }, {
            _id: 3,
            sn: 'abcdefg',
            goods: {
                image: '',
                title: '哈哈哈',
            },
            price: 12.23,
            orderedAt: new Date(),
            status: 'cancelled',
        }, {
            _id: 3,
            sn: 'abcdefg',
            goods: {
                image: '',
                title: '哈哈哈',
            },
            price: 12.23,
            orderedAt: new Date(),
            status: 'paid',
        }, {
            _id: 3,
            sn: 'abcdefg',
            goods: {
                image: '',
                title: '哈哈哈',
            },
            price: 12.23,
            orderedAt: new Date(),
            status: 'delivered',
        }];

        public formatDate(date: Date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss');
        }
    }
</script>

<style lang="stylus" scoped>
    #merchant-mailbox
        width 100%
        height 100%
</style>
