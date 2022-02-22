<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item link exact :to="{ path: '/change' }">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Change Password</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link exact>
        <v-list-item-action>
          <v-icon>mdi-information</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    // signOut() {
    //   axios
    //     .get('api/logout', {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //       if (res.data.status == true) {
    //         this.$router.push('/');
    //       }
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
  }
}
</script>
<style lang=""></style>
