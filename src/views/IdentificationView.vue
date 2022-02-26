<template>
<v-layout row wrap>
    <navbar ref="navbar"></navbar>
    <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header>
    <div class="title">
        <div class="text-wrapper">2 กรุณาถ่ายรูปบัตรประชาชน</div>
    </div>
    <div class="content">
        <v-form>
            <v-row>
                <v-col md="12" sm="12" cols="12">
                    <v-card class="mx-auto" max-width="60vw" style="padding-top: 40px">
                        <v-img src="@/assets/identification.png" width="55%" height="40%" alt="" class="center-image" />
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
                <v-col md="12" sm="12" cols="12"> เลขบัตรประชาชน </v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_card" id="id_card" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">ชื่อลูกค้า</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">นามสกุลลูกค้า</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">เพศสภาพ</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-radio-group v-model="row" row>
                        <v-radio label="ชาย" value="male"></v-radio>
                        <v-radio label="หญิง" value="female"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col md="12" sm="12" cols="12">วัน/เดือน/ปี</v-col>
                <v-col md="4" sm="4" cols="4">
                    <v-select label="Solo field" solo></v-select>
                </v-col>
                <v-col md="4" sm="4" cols="4">
                    <v-select label="Solo field" solo></v-select>
                </v-col>
                <v-col md="4" sm="4" cols="4">
                    <v-select label="Solo field" solo></v-select>
                </v-col>
                <v-col md="12" sm="12" cols="12">เบอร์โทรติดต่อ</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">Email</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">Line ID</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">ที่อยู่</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">จังหวัด</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">อำเภอ</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">ตำบล</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="12" sm="12" cols="12">รหัสไปรษณีย์</v-col>
                <v-col md="12" sm="12" cols="12">
                    <v-text-field type="text" name="id_name" id="id_name" solo></v-text-field>
                </v-col>
                <v-col md="6" sm="6" cols="6" class="text-center">
                    <v-btn @click="onBack()">ย้อนกลับ</v-btn>
                </v-col>
                <v-col md="6" sm="6" cols="6" class="text-center">
                    <v-btn class="next-button" to="/vehicleRegis">ถัดไป</v-btn>
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
  data () {
    return {
      row: null
    }
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
