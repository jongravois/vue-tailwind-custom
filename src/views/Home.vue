<template>
  <div class="px-4">

    <div class="flex justify-center" v-if="currentUser">
      {{currentUser}}
    </div>

    <div class="flex justify-center">
      <router-link to="signup"
                   class="tw-button is-primary">
        Register
      </router-link>
      <router-link to="signin"
                   class="tw-button is-success">
        Log In
      </router-link>
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

export default {
  name: 'Home',
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
      auth.signOut()
        .then(() => {
          this.$router.replace('/');
        });
    }
  },
  mounted() {}
};
</script>
