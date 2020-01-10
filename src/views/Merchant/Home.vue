<template>
    <div id="merchant-home">
        <BaseLayout>
            <template v-slot:main>
                <div class="d-flex flex-row justify-content-between align-items-end" style="padding: 16px 0">
                    <div>
                        <span class="font-weight-bold" style="font-size: 20px;">Goods management</span>
                    </div>

                    <div>
                        <div class="btn btn-success">Add goods</div>
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
                                <span class="text-danger">Offline</span>
                            </template>
                        </td>
                        <td>
                            <button class="btn btn-primary">Modify</button>
                            <template v-if="item.up">
                                <button class="btn btn-warning ml-2">Up</button>
                            </template>
                            <template v-else>
                                <button class="btn btn-outline-warning ml-2">Down</button>
                            </template>
                            <button class="btn btn-outline-danger ml-2">Delete</button>
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

    @Component({
        components: {BaseLayout}
    })
    export default class extends Vue {
        public goods = [{
            _id: 10086,
            image: '',
            title: 'Hahhhhhhhhhhhhhh',
            price: 13.33,
            up: true,
        }, {
            _id: 10086,
            image: '',
            title: 'Hahhhhhhhhhhhhhh',
            price: 13.33,
            up: true,
        }, {
            _id: 10086,
            image: '',
            title: 'Hahhhhhhhhhhhhhh',
            price: 13.33,
            up: false,
        }, {
            _id: 10086,
            image: '',
            title: 'Hahhhhhhhhhhhhhh',
            price: 13.33,
            up: false,
        }];
    }
</script>

<style scoped>

</style>
