<template>
  <va-dropdown
    class="notification-dropdown"
    offset="0, 16px"
    boundary-body
  >
    <va-icon-notification
      slot="anchor"
      class="notification-dropdown__icon"
      :color="contextConfig.invertedColor ? $themes.gray : 'black'"
    />
<b-list-group>
  <div
        v-for="option in notificationList"
        :key="option.id"
      >
  <b-list-group-item v-if="option.details.name"><b>{{option.details.name}} </b>
    <b-badge variant="primary" pill>6</b-badge>
    <br>{{$t(`${option.name}`)}}
  </b-list-group-item>
  </div>
</b-list-group>


    <!-- <div class="notification-dropdown__content pl-3 pr-3 pt-2 pb-2">
      <div
        v-for="option in notificationList"
        :key="option.id"
        class="notification-dropdown__item row pt-1 pb-1 mt-2 mb-2"
        :class="{'notification-dropdown__item--unread': option.unread}"
        @click="option.unread = false"
      >
        <span class="ellipsis" style="max-width: 85%;">
          <span class="text--bold" v-if="option.details.name">{{option.details.name}}</span><br>{{$t(`${option.name}`)}}
        </span>
      </div>
    </div> -->
  </va-dropdown>
</template>

<script>
import VaIconNotification from './ValconNotification'
import { ColorThemeMixin } from './vuestic-ui'
import * as servicesModule04 from "../../app/module0/services04"

export default {
    mounted() {
    this.getNotification();
  },
  name: 'notification-dropdown',
  inject: ['contextConfig'],
  components: {
    VaIconNotification,
  },
  mixins: [ColorThemeMixin],
  data () {
    return {
      notificationList: [],
      notificationArray : [
        {
          "id":"1",
          "img":"https://i.pravatar.cc/300",
          "type":"text",
          "style":"flex xs12 md4 xl4",
          "name":"Announcement",
          "description":"This is Announcement section",
          "icon":"",
          "bgcolor":""
        },
        {
          "id":"2",
          "img":"https://i.pravatar.cc/300",
          "type":"progress",
          "style":"flex xs12 md4 xl4",
          "name":"Pending Task",
          "icon":"",
          "bgcolor":"",
          "value": "60"
        },
        {
          "id":"3",
          "img":"https://i.pravatar.cc/300",
          "type":"progress",
          "style":"flex xs12 md4 xl4",
          "name":"Progress Task",
          "icon":"",
          "bgcolor":"",
          "value": "40"
        }
      ],
    }
  },

  methods: {
    getNotification: async function() {
      const response = await servicesModule04.getNotification(1);
      this.notificationList = response;
    }
  }
}
</script>

<style lang="scss">

.notification-dropdown {
  cursor: pointer;

  .notification-dropdown__icon {
    position: relative;
    display: flex;
    align-items: center;

    &--unread::before {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      top: -0.5rem;
      background-color: $brand-danger;
      height: 0.375rem;
      width: 0.375rem;
      margin: 0 auto;
      border-radius: 0.187rem;
    }
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    max-width: 19rem;
  }

  &__item {
    cursor: pointer;
    margin-bottom: 0.75rem;
    color: $brand-secondary;
    flex-wrap: nowrap;
    position: relative;

    &--unread {
      color: $vue-darkest-blue;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: 0.375rem;
        width: 0.375rem;
        background-color: $brand-danger;
        margin: auto;
        border-radius: 0.187rem;
      }
    }

    &:hover {
      color: $vue-green;
    }

    &__avatar {
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      min-width: 1.5rem;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
