<template>
  <v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>
    <div class="title">
      <div class="text-wrapper">กรุณากรอกหมายเลข การ์ด/บุ๊คเซอร์วิส</div>
    </div>
    <div class="content">
      <v-form>
        <v-row>
          <v-col md="12" sm="12" cols="12">ยี่ห้อ</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">รุ่น</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">ปี</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">ทะเบียน</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">จังหวัดที่ลงทะเบียน</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">เลขตัวถัง</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">สีรถ</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">วันที่ออกรถ</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">เลขไมล์</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">เบอร์</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12">ชื่อเชลล์</v-col>
          <v-col md="12" sm="12" cols="12">
            <v-text-field
              type="text"
              name="membership"
              id="membership"
            ></v-text-field>
          </v-col>
          <v-col md="6" sm="6" cols="6" class="text-center">
            <v-btn @click="onBack">ย้อนกลับ</v-btn>
          </v-col>
          <v-col md="6" sm="6" cols="6" class="text-center">
            <v-btn class="next-button" to="/dealerWarranty">ถัดไป</v-btn>
          </v-col>
        </v-row>
      </v-form>
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
    // 'app-footer': Footer
  },

  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="">
</style>
