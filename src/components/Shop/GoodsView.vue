<template>
    <div class="goods-view">
        <template v-if="deferredGoods" v-for="component in deferredGoods">
            <component :is="component"/>
        </template>
    </div>
</template>

<script lang="ts">
    import Goods from './Goods.vue';
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {
            Goods,
        }
    })
    export default class extends Vue {
        public deferredGoods: Goods[] | null = null;

        public mounted(): void {
            const computedStyle = getComputedStyle(this.$el);
            const availableWidth = parseFloat(computedStyle.width!.slice(0, -2));
            const availableHeight = parseFloat(computedStyle.height!.slice(0, -2));

            this.deferredGoods = [
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
                Goods,
            ];

        }
    };
</script>

<style lang="stylus" scoped>
    .goods-view
        display grid
        grid-template-columns repeat(auto-fill, 180px)
        grid-row-gap 0.8rem
        grid-column-gap 0.8rem
        justify-content center
</style>
