<template>
    <div class="goods">
        <div class="card d-flex flex-column" style="border-radius: 0">
            <div class="preview" style="background-color: lightgray"></div>
            <div class="flex-fill d-flex flex-column justify-content-between m-2">
                <div>
                    <div
                        style="overflow: hidden; height: 48px; line-height: 16px; text-overflow: clip">
                        {{chance.sentence({words: 5})}}
                    </div>
                </div>
                <div>
                    <div class="d-flex flex-row mt-1">
                        <div class="flex-fill">
                            <Fa :icon="['fas', 'store']" style="color: burlywood"/>
                            <a class="mc-info ml-1" href="#">{{chance.name()}}</a>
                        </div>
                    </div>
                    <div class="d-flex flex-row mt-2">
                        <div class="flex-fill">
                        </div>
                        <div>
                            <Fa :icon="['fas', 'headset']" style="color: orangered"/>
                            <a class="ml-1" href="#" @click="onClick1 && onClick1()">Customer Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faStore, faHeadset} from '@fortawesome/free-solid-svg-icons';
    import Chance from 'chance';

    library.add(faStore);
    library.add(faHeadset);

    @Component({
        props: {
            onClick1: {
                type: Function,
            }
        }
    })
    export default class extends Vue {
        public chance = new Chance;
    }
</script>

<style lang="sass" scoped>
    @import "~bootstrap/scss/bootstrap.scss"

    $width: 180px

    .goods
        width: $width

    @media (min-width: 420px)
        .card
            width: $width
            height: $width * 1.667
            box-sizing: content-box
            font-size: 12px

            &:hover
                border-color: orange

            .preview
                width: $width
                height: $width

            .mc-info
                color: #333333
                text-decoration: none

                &:hover
                    color: orange
                    text-decoration: underline orange

</style>
