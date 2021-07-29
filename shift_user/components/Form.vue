<template>
  <v-container>

    <v-row>
      <v-col
        cols="12"
        sm="12"
      >
        <v-date-picker
          v-model="dates"
          multiple
        >
        </v-date-picker>
      </v-col>

      <v-col
        cols="12"
        sm="12"
      >
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              small-chips
              label="Multiple picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-combobox>
          </template>

          <v-date-picker
            v-model="dates"
            multiple
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      {{test}}
    </v-row>
  </v-container>

</template>

<script>
const date1 =new Date().getDate()
export default {
  name: "Form",
  data:()=>({
    dates: [(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)],
    menu:false,
  })
}
</script>

<style scoped>

</style>
