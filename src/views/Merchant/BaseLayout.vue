<template>
    <div id="merchant-base-layout" class="d-flex flex-column">
        <div class="header-wrapper bg-dark">
            <nav class="header justify-content-between navbar navbar-dark navbar-expand-sm">
                <a class="navbar-brand" href="#">Merchant administration</a>
                <button class="d-sm-none navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"/>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{path: '/merchant/home'}" class="nav-link">
                                Management
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{path: '/merchant/order'}" class="nav-link">
                                Order
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{path: '/merchant/mailbox'}" class="nav-link">
                                Mailbox
                            </router-link>
                        </li>
                        <li class="nav-item ml-sm-4 ml-lg-4 ml-xl-4 d-inline-flex flex-row justify-content-center">
                            <router-link :to="{path: '/user/home'}" class="btn btn-outline-light">
                                Back to index
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="main-wrapper flex-fill" style="height: 0">
            <div class="main">
                <slot name="main"/>
            </div>
        </div>
        <slot name="free"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class extends Vue {

    }
</script>

<style lang="stylus" scoped>
    #merchant-base-layout
        width 100%
        height 100%

    .header,
    .main
        max-width 992px
        margin 0 auto

    .main
        height 100%

</style>
