<template>
    <div>
        <v-row>
            <title-component :title="title" :description="description"></title-component>
            <v-col cols="12" align="right" class="mt-n15">
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="orange"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="text-capitalize elevation-0"
                    >
                    Create new data
                    <v-icon right>mdi-asterisk</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5 font-weight-black">Add new transaction</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-select
                                        :items="itemcategory"
                                        v-model="value"
                                        label="Transaction Category"
                                        filled
                                        small
                                    ></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-menu
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date"
                                            label="Transaction Date"
                                            filled
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker
                                        v-model="date"
                                        @input="menu2 = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    class="mt-n8"
                                >
                                    <v-textarea
                                        label="Description Transaction"
                                        filled
                                        auto-grow
                                        rows="1"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="6" class="mt-n8">
                                    <v-select
                                        :items="items"
                                        v-model="value"
                                        label="Currency"
                                        filled
                                        small
                                    ></v-select>
                                </v-col>
                                <v-col cols="6" class="mt-n8">
                                    <v-text-field
                                        label="Amount"
                                        filled
                                        small
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        
                        <v-btn
                            
                            text
                            @click="dialog = false"
                            class="text-capitalize elevation-0"
                        >
                            Close
                        </v-btn>

                        <v-btn
                            color="blue darken-1"
                            dark
                            @click="dialog = false"
                            class="text-capitalize elevation-0"
                        >
                            Save
                        </v-btn>

                    </v-card-actions>
                </v-card>
                </v-dialog>

            </v-col>
            <v-col cols="12" md="12">
                <v-data-table
                    dense
                    :headers="headers"
                    :items="desserts"
                    item-key="name"
                    class="elevation-1"
                >
                    
                    <template v-slot:[`item.actions`]="{  }">
                        <v-btn color="primary" text small class="elevation-0">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn color="error" text small class="elevation-0">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    
                </v-data-table>  
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
    data: () => ({
      title: 'Transaction',
      description: 'You can manage all transaction on this feature',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
      dialog: false,
      items: [
        { value: 'IDR', text: 'IDR' },
        { value: 'USD', text: 'USD' },
        { value: 'JPY', text: 'JPY' },
        { value: 'EUR', text: 'EUR' },
        { value: 'GBP', text: 'GBP' },
        { value: 'AUD', text: 'AUD' },
        { value: 'CAD', text: 'CAD' },
        { value: 'CHF', text: 'CHF' },
        { value: 'CNY', text: 'CNY' },
        { value: 'HKD', text: 'HKD' },
        { value: 'IDR', text: 'IDR' },
        { value: 'INR', text: 'INR' },
        { value: 'KRW', text: 'KRW' },
        { value: 'MXN', text: 'MXN' },
        { value: 'MYR', text: 'MYR' },
        { value: 'NZD', text: 'NZD' },
        { value: 'PHP', text: 'PHP' },
        { value: 'RUB', text: 'RUB' },
        { value: 'SGD', text: 'SGD' },
        { value: 'THB', text: 'THB' },
        { value: 'TRY', text: 'TRY' },
        { value: 'TWD', text: 'TWD' },
        { value: 'USD', text: 'USD' },
        { value: 'VND', text: 'VND' },
        { value: 'ZAR', text: 'ZAR' },
      ],
      itemcategory: [
        { value: 'Food', text: 'Food' },
        { value: 'Transportation', text: 'Transportation' },
        { value: 'Entertainment', text: 'Entertainment' },
        { value: 'Clothes', text: 'Clothes' },
        { value: 'Health', text: 'Health' },
        { value: 'Other', text: 'Other' },
      ],
      desserts: [
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
      headers: [
        {
          text: 'Description',
          align: 'start',
          sortable: false,
          value: 'description',
          class: 'onesgreen white--text pt-5 pb-5 font-weight-black'
        },
        { text: 'Transaction Category', class: 'onesgreen white--text', value: 'category' },
        { text: 'Date of Transaction', class: 'onesgreen white--text', value: 'date' },
        { text: 'Currency', class: 'onesgreen white--text', align:'left', value: 'currency' },
        { text: 'Amount', class: 'onesgreen white--text', align:'right', value: 'amount' },
        { text: 'Actions', class: 'onesgreen white--text', align:'right', value: 'actions' },
      ],
    }),
  }
</script>

<style>
    .onesgreen {
        background-color: #03A4A6 !important;
    }
</style>