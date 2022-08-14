<template>
  <v-app>
    <v-app-bar
      app
      color="#fafafa"
      class="elevation-0"
    >
      <div class="d-flex align-center font-weight-black">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://img.icons8.com/bubbles/452/bbb.png"
          transition="scale-transition"
          width="40"
        />
        Ones Transaction System
      </div>

      <v-spacer></v-spacer>

      <nav>
        <v-btn class="text-capitalize elevation-0" to="/">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn class="text-capitalize elevation-0" to="/transaction">
          <v-icon>mdi-file-arrow-left-right</v-icon>
          Transaction
        </v-btn>
        <v-btn class="text-capitalize elevation-0" to="/report">
          <v-icon>mdi-file</v-icon>
          Report
        </v-btn>
        <v-btn class="text-capitalize elevation-0" to="/about">
          <v-icon>mdi-file</v-icon>
          About
        </v-btn>
      </nav>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/wihman"
        target="_blank"
        text
        class="text-capitalize"
      >
        <span class="mr-2">Developer Profile</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
