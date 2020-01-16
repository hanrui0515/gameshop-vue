<template>
    <div id="user-login">
        <table align="center" valign="center" style="min-height: 100%">
            <tbody>
            <tr>
                <td>
                    <h2 class="text-primary text-center">User login</h2>
                    <div class="row mt-5">
                        <div class="form-group">
                            <label for="form-username">Username</label>
                            <input id="form-username" class="form-control" type="text" ref="refNameInput">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label for="form-password">Password</label>
                            <input id="form-password" class="form-control" type="text" ref="refPasswordInput">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="btn btn-primary" @click="doLogin">Log In</div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="sass" scoped>
    #user-login
        width: 100%
        height: 100%
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapActions} from 'vuex';
    import Action from '@/store/Action';
    import PasswordUtil from '@/utils/PasswordUtil';

    @Component({
        methods: {
            ...mapActions({
                login: Action.LOGIN_USER_REQUEST,
            })
        }
    })
    export default class extends Vue {
        public doLogin() {
            const rawNameField = (this.$refs["refNameInput"] as any).value;
            const rawPasswordField = (this.$refs["refPasswordInput"] as any).value;

            this.login({
                name: rawNameField,
                password: PasswordUtil.makeHashedPassword(rawPasswordField),
            });
        }
    }
</script>
