<template>
    <div id="merchant-order">
        <BaseLayout>
            <template v-slot:main>
                <div class="d-flex flex-row justify-content-between align-items-end" style="padding: 16px 0">
                    <div>
                        <span class="font-weight-bold" style="font-size: 20px;">Order management</span>
                    </div>
                </div>
                <table class="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Goods information</th>
                        <th>Origin price</th>
                        <th>Purchase price</th>
                        <th>Create Time</th>
                        <th>Status</th>
                        <th>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in orders">
                        <td>{{item.sn}}</td>
                        <td><a href="#">{{item.goods.title}}</a></td>
                        <td>{{item.originPrice}}</td>
                        <td>{{item.purchasePrice}}</td>
                        <td>{{formatDate(item.createdAt)}}</td>
                        <td>
                            <template v-if="item.status === 'ordered'">
                                <span class="text-primary">Unpaid</span>
                            </template>
                            <template v-if="item.status === 'paid'">
                                <span class="text-warning">Needs delivery</span>
                            </template>
                            <template v-if="item.status === 'delivered'">
                                <span class="text-info">Needs receive</span>
                            </template>
                            <template v-if="item.status === 'completed'">
                                <span class="text-success">Completed</span>
                            </template>
                            <template v-if="item.status === 'cancelled'">
                                <span class="text-danger">Cancelled</span>
                            </template>
                        </td>
                        <td>
                            <button class="btn btn-primary">Contact customer</button>
                            <template v-if="item.status === 'paid'">
                                <button class="btn btn-warning ml-2">Mark delivered</button>
                            </template>
                            <template v-if="item.status === 'delivered'">
                                <button class="btn btn-info ml-2">Notice receive</button>
                            </template>
                            <template v-if="item.status === 'cancelled'">
                                <button class="btn btn-outline-danger ml-2">Delete</button>
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
    import {mapState} from 'vuex';

    @Component({
        components: {BaseLayout},
        computed: {
            ...mapState({
                goods: (state: any) => state.shop.goods,
                orders: (state: any) => state.shop.orders.map((order: any) => ({
                    ...order,
                    goods: (state.shop.goods.filter((goods: any) => goods.id === order.goodsId)[0]) || null,
                })),
            })
        }
    })
    export default class extends Vue {

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
