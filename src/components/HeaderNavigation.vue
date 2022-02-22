<template>
  <v-app-bar app dark class="header" style="height: 20vh; position: relative">
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>
