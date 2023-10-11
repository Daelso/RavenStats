<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <role_type_pie :ckey="this.ckey" />
    <player_fun_facts :ckey="this.ckey" />
    <div>
      <div class="q-pa-md">
        <q-table
          flat
          bordered
          :title="'All of ' + this.ckey + `'s Stats`"
          :rows="ckey_data"
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
                key="character_name"
                :props="props"
                @click="find_static_count(props.row.character_name)"
              >
                {{ props.row.character_name }}
              </q-td>
              <q-td
                key="role"
                :props="props"
                @click="find_role_count(props.row.role)"
              >
                {{ props.row.role }}
              </q-td>
              <q-td key="date" :props="props">
                {{ date.formatDate(props.row.date, "M-D-YYYY h:m:ss A") }}
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
import role_type_pie from "../charts/role_type_breakdown.vue";
import player_fun_facts from "../fun_facts/player_fun_facts.vue";

export default {
  name: "ckey_charts",
  props: ["ckey"],
  emits: ["update:ckey"],
  components: { role_type_pie, player_fun_facts },

  data() {
    return {
      date,
      notif_shown: false,
      loading: true,
      filter: "",
      ckey_data: [],
      pagination: {
        rowsPerPage: 15,
        sortBy: "date",
        descending: true,
      },
      columns: [
        {
          name: "character_name",
          required: true,
          label: "Character Name",
          align: "left",
          field: (row) => row.character_name,
          sortable: true,
        },
        {
          name: "role",
          align: "left",
          label: "Role",
          field: "role",
          sortable: true,
        },
        { name: "date", label: "Date Played", field: "date", sortable: true },
      ],
    };
  },
  watch: {
    ckey: {
      handler(newCkey, oldCkey) {
        if (newCkey !== oldCkey) {
          this.fetchCkeyData(newCkey);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchCkeyData(ckey) {
      try {
        const response = await this.$axios.get(
          `http://localhost:5000/showlads/ckey/${this.ckey}`
        );
        this.ckey_data = response.data;

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
    async find_static_count(character_name) {
      try {
        const response = await this.$axios.get(
          `http://localhost:5000/showlads/find_static/${this.ckey}/${character_name}`
        );

        this.$q.notify({
          message: `${this.ckey} has played ${character_name} ${response.data[0].played_count} times!`,
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
        const response = await this.$axios.get(
          `http://localhost:5000/showlads/find_role_played/${this.ckey}/${role}`
        );

        this.$q.notify({
          message: `${this.ckey} has played ${role} ${response.data[0].played_count} times!`,
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
