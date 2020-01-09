<template>
    <div id="alert-no-permission-to-access">
        <BaseAlertLayout back-path="/user/home">
            <div class="d-flex flex-column justify-content-center"
                 style="width: 100%; height: 100%; text-align: center">
                <div>
                    <div>
                        <Fa :icon="['fas', 'exclamation-triangle']" class="text-warning"
                            style="width: 48px; height: 48px;"/>
                    </div>
                    <div class="mt-2">
                        <span class="text-warning" style="font-size: 24px">No permission to access the resource</span>
                    </div>
                </div>
            </div>
        </BaseAlertLayout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseAlertLayout from '@/views/Common/BaseAlertLayout.vue';

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

    library.add(faExclamationTriangle);

    @Component({
        components: {BaseAlertLayout}
    })
    export default class extends Vue {
    }
</script>

<style lang="stylus" scoped>
    #alert-no-permission-to-access
        width 100%
        height 100%
</style>
