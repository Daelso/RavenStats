<template>
  <div class="q-pa-md" style="max-width: 1400px">
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
          color="white"
          no-data-label="No data found!"
          table-class="stat-table"
          :filter="filter"
          :loading="loading"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td
                key="character_name"
                :props="props"
                @click="find_static_count()"
              >
                {{ props.row.character_name }}
              </q-td>
              <q-td key="role" :props="props" @click="find_role_count()">
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
}
</style>

<script>
import { date } from "quasar";
import randy from "../../../public/images/randy.png";
export default {
  name: "ckey_charts",
  props: ["ckey"],
  emits: ["update:ckey"],

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
        console.log(this.ckey_data);
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
  },
};
</script>
