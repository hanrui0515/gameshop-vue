<template>
    <div id="base-alert-layout">
        <table style="width: 100%; height: 100%">
            <tbody>
            <tr>
                <td align="center">
                    <div class="main card d-flex flex-column" style="text-align: left">
                        <div style="margin-bottom: 24px">
                            <div class="btn btn-outline-primary">
                                <Fa :icon="['fas', 'arrow-circle-left']" style="width: 18px; height: 18px"/>
                                Back
                            </div>
                        </div>
                        <div class="flex-fill" style="height: 0">
                            <slot/>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseLayout from './BaseLayout.vue';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

    library.add(faArrowCircleLeft);

    @Component({
        props: {
            backPath: {
                type: String,
                required: true,
            }
        }
    })
    export default class extends Vue {
    }
</script>

<style lang="stylus" scoped>
    #base-alert-layout
        width 100%
        height 100%

    .main
        padding 24px 12px
        padding-bottom 12px + 38px + 24px
        box-sizing content-box
        width 480px
        min-height 320px
</style>
