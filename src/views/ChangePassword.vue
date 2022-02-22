<template>
    <v-layout row wrap>
   <navbar ref="navbar"></navbar>
        <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
      <div class="title" style="margin-top: 30vh">
        <div class="text-wrapper">
          <div>เปลี่ยนรหัสผ่าน</div>
        </div>
      </div>
      <div class="content">
      <div class="input-wrapper">
      <v-form>
          <v-text-field
            v-model="form.current_password"
            placeholder="รหัสปัจจุบัน"
            type="password"
            solo
          ></v-text-field>
          <v-text-field
            v-model="form.new_password"
            placeholder="รหัสใหม่"
            type="password"
            solo
          ></v-text-field>
             <v-text-field
            v-model="form.confirm_new_password"
            placeholder="ยืนยันรหัสผ่านใหม่"
            type="password"
            solo
          ></v-text-field>
        </v-form>
        <v-btn color="black white--text"
           elevation="3"
          large
          small
          x-large
          x-small
          type="submit"
         @click="changePassword">
          เปลี่ยน
        </v-btn>
      </div>
    </div>
    </v-layout>
</template>
<script>
import Navbar from '@/components/NavBar'
import Header from '@/components/HeaderNodrawer'

export default {
  components: {
    navbar: Navbar,
    'app-header': Header
    // 'app-footer': Footer
  },
  data () {
    return {
      title: 'USERNAME',
      icon: '\uf002',
      form: {
        current_password: '',
        new_password: '',
        confirm_new_password: ''
      },
      dataUser: [{
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
      }]
    }
  },
  methods: {
    // changePassword () {
    //   const formData = new FormData()
    //   formData.append('current_password', this.form.current_password)
    //   formData.append('new_password', this.form.new_password)
    //   formData.append('confirm_new_password', this.form.confirm_new_password)
    //   axios.post('api/changepassword', formData, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    //   }).then((res) => {
    //     console.log(res.data)
    //     if (res.data.status === true) {
    //       this.$router.go(-1)
    //     }
    //   })
    //     .catch(function (error) {
    //       console.error(error)
    //     })
    // }
  }
}
</script>
<style lang="">
</style>
