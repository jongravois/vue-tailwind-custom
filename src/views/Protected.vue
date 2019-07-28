<template>
    <div class="px-4">

        <div class="flex justify-center" v-if="currentUser">
            <h1 class="text-blue text-4xl">PROTECTED</h1>
            {{currentUser}}
            <br>
            <font-awesome-icon
                    icon="satellite-dish"
                    class="fa-8x cursor-pointer text-red-500"
                    v-tooltip.top-center="'Test'" />
        </div>

        <div class="flex justify-center">
            <button class="tw-button is-danger"
                    @click="logout">
                Log Out
            </button>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import { mapGetters } from 'vuex';
    import * as firebase from 'firebase/app';
    import 'firebase/auth';

    export default {
        name: 'Protected',
        data() {
            return {}
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
        methods: {
            logout() {
                firebase.auth().signOut()
                    .then(() => {
                        this.$router.replace('/');
                    });
            }
        },
        mounted() {}
    };
</script>
