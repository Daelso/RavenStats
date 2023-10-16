<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <role_type_pie_character :character_name="this.character_name" />
    <char_name_fun_facts :character_name="this.character_name" />
    <div>
      <div class="q-pa-md">
        <q-table
          flat
          bordered
          :title="'All of ' + this.character_name + `'s Stats`"
          :rows="character_name_data"
          :columns="columns"
          v-model:pagination="pagination"
          dark
          class="table-guy"
          color="white"
          no-data-label="No data found!"
          table-class="stat-table"
          :filter="filter"
          no-results-label="Your search yielded no results!"
          :loading="loading"
        >
          <template v-slot:top-right>
            <q-input
              borderless
              debounce="300"
              v-model="filter"
              dark
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                key="ckey"
                :props="props"
                @click="find_static_count(props.row.ckey)"
              >
                {{ props.row.ckey }}
              </q-td>
              <q-td
                key="role"
                :props="props"
                @click="find_role_count(props.row.role)"
              >
                {{ props.row.role }}
              </q-td>
              <q-td key="date" :props="props">
                {{ date.formatDate(props.row.date, "M-D-YYYY h:m A") }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-table {
  width: 150px;
}

@media (max-width: 800px) {
  .stat-table {
    width: 5rem;
  }
  .table-guy {
    width: 25em;
  }
}
</style>

<script>
import { date } from "quasar";
import randy from "../../../public/images/randy.png";
import role_type_pie_character from "../charts/role_type_breakdown_character.vue";
import char_name_fun_facts from "../fun_facts/char_name_fun_facts";

export default {
  name: "character_name_charts",
  props: ["character_name"],
  emits: ["update:character_name"],
  components: { role_type_pie_character, char_name_fun_facts },

  data() {
    return {
      date,
      notif_shown: false,
      loading: true,
      filter: "",
      character_name_data: [],
      pagination: {
        rowsPerPage: 15,
        sortBy: "date",
        descending: true,
      },
      columns: [
        {
          name: "ckey",
          required: true,
          label: "Ckey",
          align: "center",
          field: (row) => row.ckey,
          sortable: true,
        },
        {
          name: "role",
          align: "center",
          label: "Role",
          field: "role",
          sortable: true,
        },
        { name: "date", label: "Date Played", field: "date", sortable: true },
      ],
    };
  },
  watch: {
    character_name: {
      handler(newcharacter_name, oldcharacter_name) {
        if (newcharacter_name !== oldcharacter_name) {
          this.fetchcharacter_nameData(newcharacter_name);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchcharacter_nameData(character_name) {
      try {
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/char_name?character_name=${this.character_name}`
        );

        this.character_name_data = response.data;

        this.loading = false;
        if (!this.notif_shown) {
          this.$q.notify({
            message:
              "Click on a column to see how many times you've played a name or role",
            color: "primary",
            avatar: randy,
            position: "top",
            timeout: 6500,
          });
        }
        this.notif_shown = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async find_static_count(ckey) {
      try {
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/find_static/${ckey}/${this.character_name}`
        );

        this.$q.notify({
          message: `${ckey} has played ${this.character_name} ${response.data[0].played_count} times!`,
          color: "primary",
          avatar: randy,
          position: "bottom",
          timeout: 6500,
        });
      } catch (err) {
        console.log(err);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: err.message,
        });
      }
    },
    async find_role_count(role) {
      try {
        // Encode the role parameter before appending it to the URL
        const encodedRole = encodeURIComponent(role);

        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/find_role_played_by_char/${this.character_name}/${encodedRole}`
        );

        this.$q.notify({
          message: `${this.character_name} has registered as ${role} ${response.data.played_count} times!`,
          color: "primary",
          avatar: randy,
          position: "bottom",
          timeout: 6500,
        });
      } catch (err) {
        console.log(err);
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: err.message,
        });
      }
    },
  },
};
</script>
