<template>
    <nav class="flex justify-between p-0 bg-blue-500 font-sans antialiased m-h-8">
        <div>
            <a href="/">
                <img src="@/assets/images/inner_uam_logo.png" alt="Logo"
                     style="max-height: 60px !important; padding: 3px 0 !important;">
            </a>
        </div>
        <div class="flex-1 pl-12">
            <div class="flex h-full items-center justify-start">
                <div class="text-white text-3xl" v-if="currentUser">
                    {{currentUser.displayName}}
                </div>
            </div>
        </div>
    </nav>
</template>

<script type="text/babel">
    import {mapGetters} from 'vuex';

    export default {
        name: 'Navbar',
        data() {
            return {};
        },
        components: {},
        created() {},
        props: [],
        computed: {
            ...mapGetters([
                'currentUser',
                'loading'
            ])
        },
        methods: {},
        mounted() {
            //this.$toastr('success', 'i am a toastr success', 'hello');
        }
    };
</script>

<style scoped>
    .top-full {
        top: 100%
    }
    i.fa, i.fas, .svg-inline--fa {
        margin-right: 0 !important;
    }
</style>
