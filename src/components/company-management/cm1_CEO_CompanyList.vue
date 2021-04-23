<template>
  <va-card :title="$t('tables.searchTrendsBadges')">

    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('Search By Distributor')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
      @row-clicked="showUser"
      clickable
    >
      <template slot="marker" slot-scope="props">
        <va-icon name="fa fa-circle" :color="props.rowData.color" size="8px" />
      </template>

      <template slot="actions" slot-scope="props">
        <va-button flat small color="gray" @click="edit(props.rowData)" class="ma-0">
          {{ $t('view') }}
        </va-button>
      </template>
    </va-data-table>
    <div class="flex xs12 md3 offset--md3">
      <va-select
        v-model="perPage"
        :label="$t('tables.perPage')"
        :options="perPageOptions"
        noClear
      />
    </div>
  </va-card>
</template>

<script>
import { debounce } from 'lodash'
import users from '../../data/company.json'

export default {
  data () {
    return {
      term: null,
      perPage: '6',
      perPageOptions: ['4', '6', '10', '20'],
      users: users,
    }
  },
  computed: {
    fields () {
      return [{
        name: 'no',
        width: '30px',
        height: '45px',
        dataClass: 'text-center',
      }, {
        name: 'date',
        // title: this.$t('tables.headings.date'),
        width: '20%',
      }, {
        name: 'company',
        // title: this.$t('tables.headings.company'),
        width: '30%',
      }, {
        name: 'email',
        // title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: 'status',
        // title: this.$t('tables.headings.status'),
        width: '20%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.company.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getTrendIcon (user) {
      if (user.trend === 'up') {
        return 'fa fa-caret-up'
      }

      if (user.trend === 'down') {
        return 'fa fa-caret-down'
      }

      return 'fa fa-minus'
    },
    getTrendColor (user) {
      if (user.trend === 'up') {
        return 'primary'
      }

      if (user.trend === 'down') {
        return 'danger'
      }

      return 'grey'
    },
    showUser (user) {
      alert(JSON.stringify(user))
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>
