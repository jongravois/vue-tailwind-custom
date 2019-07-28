<template>
    <div class="bg-blue-500 h-screen perfect-center">
        <div class="p-16 bg-white w-1/3 m-auto rounded">
            <div class="mb-6">
                <img alt="logo" src="@/assets/images/logo.png">
            </div>
            <form @submit.prevent="register">
                <div class="message tw-error-block"
                     v-if="feedback">
                    <br>
                    <div class="text-bold text-red-500">{{ feedback }}</div>
                    <br>
                </div>
                <label class="tw-label">Name</label>
                <input class="tw-input mb-4"
                       type="text"
                       v-model="name"
                       placeholder="Name">

                <label class="tw-label">Email</label>
                <input class="tw-input mb-4"
                       type="text"
                       v-model="email"
                       placeholder="Email">

                <label class="tw-label">Password</label>
                <input class="tw-input mb-8"
                       type="password"
                       v-model="password"
                       placeholder="Password">
                <br>
                <button class="tw-button bg-blue-500 text-white hover:bg-blue-800">
                    Register
                </button>
            </form>
        </div>
    </div>
</template>

<script type="text/babel">
    import { mapGetters } from 'vuex';
    import * as firebase from 'firebase/app';
    import 'firebase/auth';

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                name: '',
                feedback: null
            }
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
            register() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        data.user.updateProfile({
                            displayName: this.name
                        }).then(() => {
                            alert('Registered');
                        })
                    }).catch((e) => {
                        this.feedback = e.message;
                    });
            }
        },
        mounted() {}
    };
</script>

<style scoped></style>
