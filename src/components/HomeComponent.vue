<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://img.icons8.com/clouds/452/bbb.png"
          class="my-3"
          contain
          height="350"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Self Finance Management System
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with developers,
          <br>please join our link's below
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Developer's Profile
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'Linkedin',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'Github',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
    }),
  }
</script>
