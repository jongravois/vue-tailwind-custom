<template>
    <div class="bg-blue-500 h-screen perfect-center">
        <div class="p-16 bg-white w-1/3 m-auto rounded">
            <div class="mb-6">
                <img alt="logo" src="@/assets/images/logo.png">
            </div>

            <form @submit.prevent="login">
                <div class="message tw-error-block"
                     v-if="feedback">
                    <br>
                    <div class="text-bold text-red-500">{{ feedback }}</div>
                    <br>
                </div>
                <label class="tw-label">Email</label>
                <input class="tw-input mb-4"
                       type="text"
                       v-model.trim="$v.email.$model"
                       placeholder="Email">

                <template v-if="$v.email.$error">
                    <p class="text-red-500 text-xs font-bold"
                       v-if="!$v.email.required">
                        An email is required.
                    </p>

                    <p class="text-red-500 text-xs font-bold"
                       v-if="!$v.email.email">
                        Email is not valid.
                    </p>
                </template>

                <label class="tw-label">Password</label>
                <input class="tw-input mb-8"
                       type="password"
                       v-model.trim="$v.password.$model"
                       placeholder="Password">

                <template v-if="$v.password.$error">
                    <p class="text-red-500 text-xs font-bold"
                       v-if="!$v.password.required">
                        A password is required.
                    </p>
                </template>
                <br>
                <button class="tw-button bg-blue-500 text-white hover:bg-blue-800">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script type="text/babel">
    import * as firebase from 'firebase/app';
    import 'firebase/auth';
    import { mapGetters } from 'vuex';
    import { required, email } from 'vuelidate/lib/validators';

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                feedback: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
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
            login() {
                this.$v.$touch();

                if(this.$v.$invalid) {
                    return;
                } // end if

                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.replace(this.$route.query.redirect || '/protected');
                    })
                    .catch((e) => {
                        this.feedback = e.message;
                    });
            }
        },
        mounted() {}
    };
</script>

<style scoped></style>
