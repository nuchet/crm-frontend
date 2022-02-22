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
            <v-btn color="indigo darken-4 white--text" elevation="3" large small x-large x-small>
                Sign In
            </v-btn>
        </div>
    </div>
</v-layout>
</template>

<script>
import Header from '@/components/HeaderNodrawer'
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
    // signIn() {
    //   if (this.$refs.form.validate()) {
    //     axios.post('api/login', {
    //             username: this.form.name,
    //             password: this.form.password
    //       })
    //       .then((res) => {
    //         this.dataUser = res.data
    //         console.log(this.dataUser)
    //         this.$router.push({
    //           name: 'profile',
    //           params: {
    //             data: this.dataUser
    //           }
    //         })
    //         localStorage.setItem('token', this.dataUser.token)
    //       })
    //       .catch(function (error) {
    //         console.error(error)
    //       })
    //   }
    // },
    beforeRouteEnter (to, from, next) {
      if (this.dataUser.length !== 0) {
        return next('/profile')
      }
    }
  }
}
</script>

<style></style>
