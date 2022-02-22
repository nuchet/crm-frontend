<template>
<v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
    <div class="title">
        <div class="text-wrapper">
            <div>สวัสดีคุณ {{ this.dataUser.username }}</div>
            <div>PNXXXX แผนก XXXX โชว์รูม xxxx</div>
        </div>
    </div>
    <div class="content">
        <div class="input-wrapper">
            <v-btn color="black white--text" elevation="3" large small x-large x-small to="/membership" type="submit">
                เปิดความคุ้มครอง white card
            </v-btn>
            <br />
            <v-btn color="black white--text" elevation="3" large small x-large x-small type="submit">
                ประวัติการเปิดความคุ้มครอง
            </v-btn>
        </div>
    </div>
</v-layout>
</template>
<script>
import NavBar from '@/components/NavBar'
import HeaderNavigation from '@/components/HeaderNavigation'
export default {
  components: {
    navbar: NavBar,
    'app-header': HeaderNavigation
  },
  data () {
    return {
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
      }
    }
  },

  created () {
    console.log(this.$route.params.data)
    this.dataUser = this.$route.params.data
    console.log(this.dataUser.token)
  }
}
</script>
