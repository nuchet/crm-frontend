<template>
  <v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>
    <div class="title"></div>
    <div class="content">
      <v-row>
        <v-col md="12" sm="12" cols="12">
          <v-card class="mx-auto" max-width="60vw" style="padding-top: 40px">
            <v-img
              src="/images/policyDetails.png"
              width="55%"
              height="40%"
              alt=""
              class="center-image"
            />
          </v-card>
        </v-col>
        <v-col md="12" sm="12" cols="12">
          <v-card class="mx-auto" max-width="344" color="blue white--text">
            <v-card-subtitle>
              ทางบริษัทได้รับข้อมูลของท่านเรียบร้อยแล้วค่ะ
              ความคุ้มครองจะเริ่มต้นใหม่ในวันถัดไป ขอบพระคุณที่ไว้วางใจบริการของ
              smartsure ค่ะ
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="6" sm="6" cols="6" class="text-center">
          <v-btn>กลับหน้าหลัก</v-btn>
        </v-col>
        <v-col md="6" sm="6" cols="6" class="text-center">
          <v-btn class="next-button" to="/dealerWarranty"
            >ดูรายละเอียดกรมธรรม์</v-btn
          >
        </v-col>
      </v-row>
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
  }
}
</script>
<style lang="">
</style>
