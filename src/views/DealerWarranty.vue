<template>
  <v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>
    <div class="title">
      <div class="text-wrapper">เงื่อนไขการรับประกันจากดีลเลอร์</div>
    </div>
    <div class="content">
      <v-form>
        <v-row>
          <v-col md="8" sm="6" cols="6">การรับประกันจากทางดีลเลอร์</v-col>
          <v-col md="2" sm="3" cols="3">
            <v-checkbox v-model="checkbox" label="มี"></v-checkbox>
          </v-col>
          <v-col md="2" sm="3" cols="3">
            <v-checkbox v-model="checkbox" label="ไม่มี"></v-checkbox>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="เครื่องเกียร์"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ระบบไฟ"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="แอร์"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ถ่ายน้ำมันเครื่อง"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ช่วงล่าง"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ยาง"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="แบตเตอรี่"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ประกันภัย"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="ประกันเครื่อง เกียร์"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="2" sm="2" cols="2">
            <v-checkbox v-model="checkbox" label="อื่นๆ"></v-checkbox>
          </v-col>
          <v-col md="4" sm="4" cols="4">
            <v-select :items="items" dense solo label="เดือน"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
            <v-select :items="items" dense solo label="กิโลเมตร"> </v-select>
          </v-col>
          <v-col md="6" sm="6" cols="6">
          <div class="text-center">
            <v-btn @click="onBack()">ย้อนกลับ</v-btn>
          </div>
          </v-col>
          <v-col md="6" sm="6" cols="6">
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on"> เปิดความคุ้มครอง </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  ยืนยันการเปิดความคุ้มครอง
                </v-card-title>

                <v-card-text> หมายเหตุ: </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false" to="/policyDetails">
                      ตกลง
                    </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-layout>
</template>
<script>
import Navbar from '@/components/NavBar'
import Header from '@/components/HeaderNavigation'

export default {
  components: {
    navbar: Navbar,
    'app-header': Header
  },
  data: () => ({
    items: []

  }),
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="">
</style>
