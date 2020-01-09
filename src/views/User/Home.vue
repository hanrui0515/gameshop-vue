<template>
    <div id="user-home">
        <div class="header-wrapper flex-row justify-content-center bg-dark">
            <nav class="header justify-content-between navbar navbar-dark navbar-expand-sm">
                <a class="navbar-brand" href="#">G's Game Shop</a>

                <button class="d-sm-none navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"/>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Merchant
                            </a>
                            <div class="dropdown-menu">
                                <router-link :to="{path: '/merchant/home'}" class="dropdown-item">
                                    Management
                                </router-link>
                                <router-link :to="{path: '/merchant/order'}" class="dropdown-item">
                                    Order
                                </router-link>
                                <router-link :to="{path: '/merchant/mailbox'}" class="dropdown-item">
                                    Mailbox
                                </router-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{path: '/user/login'}" class="nav-link">
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{path: '/user/register'}" class="nav-link">
                                Register
                            </router-link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
        <div class="main-wrapper">
            <div class="main px-sm-3 px-md-3">
                <div class="search-bar-wrapper">
                    <div class="search-bar d-flex flex-row form-inline my-3">
                        <input class="form-control flex-fill mr-2" type="search" placeholder="Searching for..."
                               aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
                <div class="w-100 h-100">
                    <GoodsView/>
                </div>
                <div class="pagination-wrapper d-flex flex-row justify-content-center mt-5">
                    <nav>
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="aside-left">
        </div>

        <div class="aside-corner">
            <div class="item" @click="toggleChatView">
                <div class="icon-wrapper">
                    <Fa class="icon" :icon="['fas', 'comment']"/>
                </div>
            </div>
        </div>

        <template v-if="showChatView">
            <div class="chat-view-mask position-fixed w-100 h-100"
                 style="z-index: 1; top: 0; left: 0; background-color: rgba(0,0,0,0.5)"></div>
            <div class="chat-view-wrapper position-fixed"
                 style="z-index: 2; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0)">
                <ChatView :on-close="toggleChatView"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import GoodsView from '@/components/Shop/GoodsView.vue';
    import ChatView from '@/components/Chat/ChatView.vue';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faComment} from '@fortawesome/free-solid-svg-icons';
    import {Component, Vue} from 'vue-property-decorator';

    library.add(faComment);

    @Component({
        components: {GoodsView, ChatView}
    })
    export default class extends Vue {
        public showChatView: boolean = false;

        public toggleChatView() {
            this.showChatView = !this.showChatView;
        }
    }

</script>

<style lang="stylus" scoped>
    .header,
    .main
        max-width 992px
        margin 0 auto

    .aside-corner
        display flex
        flex-direction column
        position fixed
        bottom 2rem
        right 2rem

        .item
            position relative
            width 2.5rem
            height 2.5rem
            border-radius 2.5rem
            background-color #fff
            box-shadow #999 0 0 10px 0
            transition all .5s ease
            cursor pointer

            .icon-wrapper
                position absolute
                width 100%
                height 100%

                .icon
                    position absolute
                    left 50%
                    top 50%
                    width 1.2rem
                    height 1.2rem
                    color #444
                    transform translate(-50%, -50%)
                    transition all .5s ease

        .item:hover
            background-color #444

            .icon
                color #fff

</style>
