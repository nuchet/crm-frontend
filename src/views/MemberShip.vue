<template>
  <v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>
    <div class="title">
      <div class="text-wrapper1">1 กรุณาถ่ายรูปบัตรสมาชิก/บุ๊คเซอร์วิส</div>
      <v-row>
        <v-col md="12" sm="12" cols="12">
          <segmented-control
            :options="options"
            label="label"
            value="value"
            color="#fff"
            active-color="#333"
            :multiple="false"
            @select="onSelect"
          />
        </v-col>
      </v-row>
    </div>
    <div class="content">
      <v-form style="margin-top: 10vh">
        <v-row>
          <v-col md="12" sm="12" cols="12">
            <v-card class="mx-auto" max-width="60vw" style="padding-top: 40px">
              <v-img
                src="/images/icon-01.jpg"
                width="55%"
                height="40%"
                alt=""
                class="center-image"
              />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon to="/camera">
                  <v-icon>mdi-camera</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-image</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="12" sm="12" cols="12" v-show="isClickMemberShip == true">
            <p class="indigo darken-4 white--text">เลขบัตรสมาชิก</p>
          </v-col>
          <v-col md="12" sm="12" cols="12" v-show="isClickMemberShip == true">
            <v-text-field type="text"></v-text-field>
          </v-col>
          <v-col md="12" sm="12" cols="12" v-show="isClickBookService == true">
            บุ๊คเซอร์วิช
          </v-col>
          <v-col md="12" sm="12" cols="12" v-show="isClickBookService == true">
            <v-text-field type="text"></v-text-field>
          </v-col>
          <v-col md="6" sm="6" cols="6" class="text-center">
            <v-btn class="next-button" elevation="2" @click="onBack()"
              >ย้อนกลับ</v-btn
            >
          </v-col>
          <v-col md="6" sm="6" cols="6" class="text-center">
            <v-btn class="next-button" elevation="2" to="/identification"
              >ถัดไป</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-layout>
</template>

<script>
import NavBar from '@/components/NavBar'
import HeaderNavigation from '@/components/HeaderNavigation'
import SegmentedControl from 'vue-segmented-control'

export default {
  components: {
    navbar: NavBar,
    'app-header': HeaderNavigation,
    SegmentedControl
  },
  data () {
    return {
      options: [
        {
          label: 'บัตรสมาชิก',
          value: 'aa'
        },
        {
          label: 'บุ๊คเซอร์วิส',
          value: 'bb'
        }
      ],
      url: null,
      image: null,
      isClickBookService: false,
      isClickMemberShip: true
    }
  },
  methods: {
    onSelect (optionsSelected) {
      console.log(optionsSelected)
      optionsSelected.forEach((value, index) => {
        if (value.value === 'aa') {
          this.isClickMemberShip = true
          this.isClickBookService = false
        } else {
          this.isClickBookService = true
          this.isClickMemberShip = false
        }
      })
    },
    preview_image () {
      this.url = URL.createObjectURL(this.image)
    },

    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="">
</style>
