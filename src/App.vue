<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="js">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({

    })
    export default class extends Vue {
    }
</script>

<style lang="sass">
    html, body, #app
        width: 100%
        height: 100%
</style>
