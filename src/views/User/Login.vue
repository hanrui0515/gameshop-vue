<template>
    <div id="user-login">
        <table align="center" valign="center" style="min-height: 100%">
            <tbody>
            <tr>
                <td>
                    <h2 class="text-primary text-center">用户登录</h2>
                    <div class="row mt-5">
                        <div class="form-group">
                            <label for="form-username">用户名</label>
                            <input id="form-username" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label for="form-password">密码</label>
                            <input id="form-password" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="btn btn-primary">登录</div>
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
