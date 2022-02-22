<template>
  <v-app-bar app dark class="header" style="height: 20vh"> </v-app-bar>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
}

.header {
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background-image: url('~@/assets/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.title {
  width: 100%;
  height: 10vh;
  text-align: center;
  background-image: url('~@/assets/title.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}

.content {
  width: 100vw;
  height: 70vh;
  background-image: url('~@/assets/content.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-left: 30px;
  padding-right: 30px;
}

.text-wrapper {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.text-wrapper1 {
  width: 100%;
  height: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.input-wrapper {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.span1 {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.padding0 {
  padding: 0px;
}

.next-button {
  float: center;
}

v-app-bar {
  height: 30vh;
}
</style>
