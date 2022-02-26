<template>
<v-layout row wrap>
    <app-header></app-header>
    <div class="title" style="margin-top: 20vh">
        <div class="text-wrapper">Welcome to SMARTSURE</div>
    </div>
    <div class="content">
        <div class="input-wrapper">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="form.name" placeholder="Username" type="text" prepend-inner-icon="mdi-account" solo :rules="nameRules" required></v-text-field>
                <v-text-field v-model="form.password" id="id" placeholder="Password" type="password" prepend-inner-icon="mdi-lock" solo :rules="passwordRules" required></v-text-field>
            </v-form>
            <v-btn color="indigo darken-4 white--text" elevation="3" large small x-large x-small @click="signIn">
                Sign In
            </v-btn>
        </div>
    </div>
</v-layout>
</template>

<script>
import Header from '@/components/HeaderNodrawer'
// import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  components: {
    'app-header': Header
  },
  data () {
    return {
      valid: true,
      title: 'USERNAME',
      icon: '\uf002',
      form: {
        name: '',
        password: ''
      },
      showError: false,
      dataUser: {
        name: '',
        lastname: '',
        username: '',
        email: '',
        role: '',
        image_avatar: '',
        token: '',
        tent: {
          code: false,
          name: false,
          name_en: ''
        }
      },
      nameRules: [(v) => !!v || 'name input is required'],
      passwordRules: [(v) => !!v || 'password input is required']
    }
  },
  methods: {
    ...mapActions(['LogIn']),
    async signIn () {
      if (this.$refs.form.validate()) {
        const User = new FormData()
        User.append('username', this.form.name)
        User.append('password', this.form.password)
        try {
          await this.LogIn(User)
          this.$router.push('/profile')
          this.lo
          this.showError = false
        } catch (error) {
          this.showError = true
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      if (this.dataUser.length !== 0) {
        return next('/profile')
      }
    }
  },
  computed: {

  }
}
</script>

<style></style>
