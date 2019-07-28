<template>
    <div>
        <div v-if="loading">
            <loader-block></loader-block>
        </div>

        <div v-if="!loading">
            <nav-bar></nav-bar>
            <br>
            <slot></slot>
            <br>
            <portal-target name="modals"></portal-target>
        </div>
    </div>
</template>

<script type="text/babel">
    import {mapGetters } from 'vuex';

    export default {
        name: 'DefaultLayout',
        data() {
            return {};
        },
        components: {},
        created() {},
        props: [],
        computed: {
            ...mapGetters([
                'loading',
                'currentUser'
            ])
        },
        methods: {},
        mounted() {}
    };
</script>

<style scoped></style>
