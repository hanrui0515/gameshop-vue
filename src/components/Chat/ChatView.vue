<template>
    <div id="chat-view" class="d-flex flex-row position-relative">
        <div class="left">
            <div class="session-box">
                <ul>
                    <li class="session-tab active d-flex flex-row">
                        <div class="avatar mr-2"></div>
                        <div class="flex-fill d-flex flex-column" style="width: 0">
                            <div>啦啦啦</div>
                            <div class="overflow-hidden mt-1" style="width: 100%">
                                <div style="white-space: nowrap; text-overflow: ellipsis">亲不好意思呢，这款商品目前没货了哦</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right flex-fill d-flex flex-column">
            <div class="status-bar bg-dark text-light">
                <div class="d-flex flex-row">
                    <div class="avatar"></div>
                    <div class="ml-2">
                        <div>
                            <span style="font-size: 15px">G胖旗舰店客服-</span>
                            <span style="font-size: 15px">啦啦啦</span>
                        </div>
                        <div style="margin-top: 2px">
                            <span style="font-size: 10px">如果我们当初早点遇见，那结局将是有多么美好呢。</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message-box flex-fill m-2 pt-2" style="height: 0; overflow-y: scroll">
                <div class="message message-reply mb-2" style="text-align: left" v-for="i in new Array(100)">
                    <div>
                        <div style="color: blue">
                            <span style="font-weight: 600;">啦啦啦</span>
                            <span class="ml-2">2020-01-09 12:46:03</span>
                        </div>
                        <div class="mt-1">
                            您好，我在的。
                        </div>
                    </div>
                </div>
                <div class="message message-ask mb-2" style="text-align: right">
                    <div>
                        <div style="color: green">
                            <span style="font-weight: 600;">啦啦啦</span>
                            <span class="ml-2">2020-01-09 12:46:03</span>
                        </div>
                        <div class="mt-1">
                            您好，我在的。
                        </div>
                    </div>
                </div>
            </div>
            <div class="input-box d-flex flex-column mx-2 mb-2">
                <textarea class="form-control flex-fill" style="width: 100%;"></textarea>
                <div class="d-flex flex-row justify-content-end">
                    <button class="btn btn-dark mt-2">发送</button>
                </div>
            </div>
        </div>
        <template v-if="onClose">
            <div class="position-absolute"
                 style="top: -10px; right: -10px; width: 24px; height: 24px; background-color: rgba(0,0,0,0.3); border-radius: 12px; cursor: pointer;"
                 @click="onClose">
                <Fa :icon="['far', 'times-circle']"
                    style="position: relative; top: 4px; left: 4px; width: 16px; height: 16px; color: #f8f9fa"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
    import {Component, Vue} from 'vue-property-decorator';

    library.add(faTimesCircle);

    @Component({
        props: {
            onClose: {
                type: Function,
            }
        }
    })
    export default class extends Vue {
    }
</script>

<style lang="stylus" scoped>
    #chat-view
        min-width 720px
        min-height 640px
        font-size 12px
        background-color #fff

    .session-box
        width 240px
        height 100%
        overflow hidden

        ul
            margin 0
            padding 0
            height 100%
            overflow-x hidden
            overflow-y scroll

        li
            list-style none

        .session-tab
            padding 0.8rem 0.8rem

            &.active
                color #f8f9fa
                background-color #343a40

            .avatar
                width 2.4rem
                height 2.4rem
                background-color #e3e3e3
                border-radius 3.2rem

    .status-bar
        padding 0.5rem 0

        .avatar
            margin-left 8px
            width 2.85rem
            height 2.85rem
            border-radius 5px
            background-color #e6e6e6

    .input-box
        height 180px
</style>
