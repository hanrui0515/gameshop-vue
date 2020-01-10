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
                                    <input id="form-username" class="form-control" type="text">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="form-password">Password</label>
                                    <input id="form-password" class="form-control" type="text">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <label for="form-password-confirm">Password confirmation</label>
                                    <input id="form-password-confirm" class="form-control" type="text">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="btn btn-primary">Register</div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

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
