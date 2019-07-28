<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    import {mapGetters} from 'vuex';

    export default {
        name: 'BareLayout',
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
