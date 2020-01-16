<template>
    <div id="user-register">
        <div class="main-wrapper mx-auto">
            <div class="main">
                <table align="center" valign="center" style="min-height: 100%">
                    <tbody>
                    <tr>
                        <td>
                            <h2 class="text-primary text-center">User Registration</h2>
                            <div class="row mt-5">
                                <div class="form-group">
                                    <label for="form-username">Username</label>
                                    <input id="form-username" class="form-control" type="text" ref="refUn">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="form-password">Password</label>
                                    <input id="form-password" class="form-control" type="text" ref="refPw">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="form-password-confirm">Password confirmation</label>
                                    <input id="form-password-confirm" class="form-control" type="text" ref="refPwc">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="form-nickname">Nickname</label>
                                    <input id="form-nickname" class="form-control" type="text" ref="refNn">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="btn btn-primary" @click="doRegister">Register</div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapActions} from 'vuex';
    import Action from '@/store/Action';
    import PasswordUtil from '@/utils/PasswordUtil';

    @Component({
        methods: {
            ...mapActions({
                register: Action.REGISTER_USER_REQUEST,
            })
        }
    })
    export default class extends Vue {

        public doRegister() {
            const un = this.$refs["refUn"].value;
            const pw = this.$refs["refPw"].value;
            const pwc = this.$refs["refPwc"].value;
            const nn = this.$refs["refNn"].value;

            this.register({
                name: un,
                password: PasswordUtil.makeHashedPassword(pw),
                passwordConfirmation: PasswordUtil.makeHashedPassword(pwc),
                nickname: nn,
            });
        }

    }
</script>

<style lang="sass" scoped>
    #user-register
        width: 100%
        height: 100%

        .main-wrapper
            height: 100%

        .main
            height: 100%
            min-width: 992px
</style>
