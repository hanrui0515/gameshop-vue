<template>
    <div id="merchant-home">
        <BaseLayout>
            <template v-slot:main>
                <div class="d-flex flex-row justify-content-between align-items-end" style="padding: 16px 0">
                    <div>
                        <span class="font-weight-bold" style="font-size: 20px;">Goods management</span>
                    </div>

                    <div>
                        <div class="btn btn-success" @click="doAppendRandomGoods()">Add goods</div>
                    </div>
                </div>
                <table class="table table-striped mt-3">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Operation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in goods">
                        <td>
                            <div class="image-wrapper">
                                <div class="image" style="width: 6rem; height: 6rem; background-color: #e6e6e6"></div>
                            </div>
                        </td>
                        <td>{{item.title}}</td>
                        <td>{{item.price}}</td>
                        <td>
                            <template v-if="item.up">
                                <span class="text-success">Up</span>
                            </template>
                            <template v-else>
                                <span class="text-danger">Down</span>
                            </template>
                        </td>
                        <td>
                            <button class="btn btn-primary">Modify</button>
                            <template v-if="item.up === true">
                                <button class="btn btn-outline-warning ml-2"
                                        @click="doUpdateGoods(item.id, {up: false})">
                                    Down
                                </button>
                            </template>
                            <template v-else>
                                <button class="btn btn-warning ml-2"
                                        @click="doUpdateGoods(item.id, {up: true})">
                                    Up
                                </button>
                            </template>
                            <button class="btn btn-outline-danger ml-2" @click="doRemoveGoods(item.id)">Delete</button>
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
    import {mapState, mapMutations} from 'vuex';
    import Mutation from '@/store/Mutation';
    import Chance from 'chance';

    @Component({
        components: {BaseLayout},
        methods: {
            ...mapMutations({
                updateGoods: Mutation.UPDATE_GOODS,
                removeGoods: Mutation.REMOVE_GOODS,
                appendGoods: Mutation.APPEND_GOODS,
            }),
        },
        computed: {
            ...mapState({
                goods: (state: any) => state.shop.goods,
                goodsCount: (state: any) => state.shop.goods.length,
            })
        }
    })
    export default class extends Vue {
        public doAppendRandomGoods() {
            this.doAppendGoods({
                // @ts-ignore
                id: (new Chance).integer({min: this.goodsCount + 1}),
                image: '',
                title: (new Chance).sentence({words: 5}),
                price: (new Chance).integer({min: 0, max: 9999}) + (new Chance).integer({min: 1, max: 99}) * 0.01,
                up: (new Chance).bool(),
            });
        }

        public doAppendGoods(goods: any) {
            // @ts-ignore
            this.appendGoods({goods});
        }

        public doUpdateGoods(id: number, goods: any) {
            // @ts-ignore
            this.updateGoods({id, goods});
        }

        public doRemoveGoods(id: number) {
            // @ts-ignore
            this.removeGoods({id});
        }
    }
</script>

<style scoped>

</style>
