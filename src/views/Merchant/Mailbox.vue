<template>
    <div id="merchant-mailbox">
        <BaseLayout>
            <template v-slot:main>
                <div class="w-100 h-100 d-flex flex-column justify-content-center">
                    <div class="chat-view-wrapper border">
                        <ChatView/>
                    </div>
                </div>
            </template>
        </BaseLayout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseLayout from './BaseLayout.vue';
    import ChatView from '@/components/Chat/ChatView.vue';

    @Component({
        components: {BaseLayout, ChatView}
    })
    export default class extends Vue {

    }
</script>

<style lang="stylus" scoped>
    #merchant-mailbox
        width 100%
        height 100%
</style>
