<template>
    <div id="chat-view" class="d-flex flex-row position-relative">
        <div class="left">
            <div class="session-box">
                <ul>
                    <li class="session-tab active d-flex flex-row">
                        <div class="avatar mr-2"></div>
                        <div class="flex-fill d-flex flex-column" style="width: 0">
                            <div>Dany</div>
                            <div class="overflow-hidden mt-1" style="width: 100%">
                                <div style="white-space: nowrap; text-overflow: ellipsis">Hi,</div>
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
                            <span style="font-size: 15px">Custom service-</span>
                            <span style="font-size: 15px">La</span>
                        </div>
                        <div style="margin-top: 2px">
                            <span style="font-size: 10px">Let's go!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message-box flex-fill m-2 pt-2" style="height: 0; overflow-y: scroll">
                <template v-for="message in messages">
                    <template v-if="message.user.id !== userinfo.id">
                        <div class="message message-reply mb-2" style="text-align: left">
                            <div>
                                <div style="color: blue">
                                    <span style="font-weight: 600;">{{message.user.nickname}}</span>
                                    <span class="ml-2">{{message.createdAt}}</span>
                                </div>
                                <div class="mt-1">
                                    {{message.message}}
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="message.user.id === userinfo.id">
                        <div class="message message-ask mb-2" style="text-align: right">
                            <div>
                                <div style="color: green">
                                    <span style="font-weight: 600;">{{message.user.nickname}}</span>
                                    <span class="ml-2">{{message.createdAt}}</span>
                                </div>
                                <div class="mt-1">
                                    {{message.message}}
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
            <div class="input-box d-flex flex-column mx-2 mb-2">
                <textarea class="form-control flex-fill" style="width: 100%;" ref="refMessage"></textarea>
                <div class="d-flex flex-row justify-content-end">
                    <button class="btn btn-dark mt-2" @click="send">Send</button>
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
    import {mapState} from 'vuex';

    library.add(faTimesCircle);

    @Component({
        props: {
            onClose: {
                type: Function,
            }
        },
        computed: {
            ...mapState({
                userinfo: (state: any) => state.user.info,
                messages: (state: any) => state.mailbox.messages
            })
        }
    })
    export default class extends Vue {

        public send() {
            this.$socket.client.emit('sendMessage', {message: (this.$refs['refMessage'] as any).value});
            (this.$refs['refMessage'] as any).value = '';
        }

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
