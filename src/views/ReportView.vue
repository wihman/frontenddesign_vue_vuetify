<template>
  <div>
    <v-row>
      <title-component :title="title" :description="description"></title-component>
      <v-col cols="12">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="3">
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
                dense
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Transaction Date"
                    small
                    outlined
                    v-bind="attrs"
                    dense
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="date"
                @input="menu2 = false"
                ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="3">
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
                dense
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Transaction Date"
                    small
                    outlined
                    v-bind="attrs"
                    dense
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="date"
                @input="menu2 = false"
                ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="2">
            <v-btn color="primary" width="100%" class="text-capitalize"> <v-icon left>mdi-magnify</v-icon> Show</v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-n5">
          <v-col cols="12" class="mb-n5 font-weight-black">
            <p>Top Category Transaction's</p>
          </v-col>
          <v-col cols="3">
            <v-card color="grey lighten-4" class="elevation-0 rounded-lg">
              <v-card-text align="center">
                <p class="text-h5" style="color: #08A4A7">Food</p>
                <p class="text-h5 font-weight-black black--text mt-n3">250.000.000</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card color="grey lighten-4" class="elevation-0 rounded-lg">
              <v-card-text align="center">
                <p class="text-h5" style="color: #08A4A7">Transportation</p>
                <p class="text-h5 font-weight-black black--text mt-n3">150.000.000</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card color="grey lighten-4" class="elevation-0 rounded-lg">
              <v-card-text align="center">
                <p class="text-h5" style="color: #08A4A7">Entertainment</p>
                <p class="text-h5 font-weight-black black--text mt-n3">50.000.000</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card color="grey lighten-4" class="elevation-0 rounded-lg">
              <v-card-text align="center">
                <p class="text-h5" style="color: #08A4A7">Clothest</p>
                <p class="text-h5 font-weight-black black--text mt-n3">25.000.000</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-n2">
          <v-col cols="12">
            <p class="font-weight-black">Detail of report's</p>
            <v-simple-table>
              <thead>
                <tr>
                  <th class="black white--text" align="center">No</th>
                  <th class="black white--text" align="center">Date</th>
                  <th class="black white--text" align="center">Category</th>
                  <th class="black white--text" align="center">Description</th>
                  <th class="black white--text" align="center">Currency</th>
                  <th class="black white--text" align="center">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in itemtransactions" :key="item.id">
                  <td class="grey lighten-4">{{ incrementIndex(index) }}</td>
                  <td class="grey lighten-4">{{ item.date }}</td>
                  <td class="grey lighten-4">{{ item.category }}</td>
                  <td class="grey lighten-4">{{ item.description }}</td>
                  <td class="grey lighten-4" align="center">{{ item.currency }}</td>
                  <td class="grey lighten-4" align="right">{{ item.amount }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import TitleComponent from '../components/TitleComponent.vue'

export default {
  components: {
    TitleComponent
  },
  name: 'ReportView',
  props: {
    title: {
      type: String,
      default: 'Reports'
    },
    description: {
      type: String,
      default: 'You can manage all report from transactions'
    }
  },
  data() {
    return {
      titles: this.title,
      descriptions: this.description,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
      itemtransactions: [
        {
          description: 'Frozen Yogurt',
          category: 'Food',
          date: '2022-01-01',
          currency: 'IDR',
          amount: '129.000',
        },
        {
          description: 'Ice cream sandwich',
          category: 'Transportation',
          date: '2022-01-01',
          currency: 'IDR',
          amount: '148.000.000',
        },
        {
          description: 'Eclair',
          category: 'Entertainment',
          date: '2022-01-01',
          currency: 'USD',
          amount: '87.000.000',
        },
        {
          description: 'Cupcake',
          category: 'Clothes',
          date: '2022-01-01',
          currency: 'IDR',
          amount: '13.000.000',
        },
        {
          description: 'Gingerbread',
          category: 'Health',
          date: '2022-01-01',
          currency: 'JPY',
          amount: '43.000.000',
        },
        {
          description: 'Jelly bean',
          category: 'Other',
          date: '2022-01-01',
          currency: 'IDR',
          amount: '1.119.000',
        },
      ],
    }
  },
  methods: {
    incrementIndex(key) {
        return key + 1;
    },
  },
}
</script>
