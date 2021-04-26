<template>
  <va-dropdown
    class="profile-dropdown"
    v-model="isShown"
    boundary-body
    offset="-10, 16px"
  >
    <span
      class="profile-dropdown__anchor" slot="anchor"
      :style="{color: this.colorText}"
    >
      <slot/>
      <va-icon
        class="pa-1"
        :name="`fa ${isShown ? 'fa-angle-up' :'fa-angle-down'}`"
      />
    </span>
        <b-list-group>
      <b-list-group-item>
        <span v-on:click="profile">
          {{ $t(`user.${"profile"}`) }}
        </span>
      </b-list-group-item>
      <b-list-group-item>
        <span v-on:click="logout">
          {{ $t(`user.${"logout"}`) }}
        </span>
      </b-list-group-item>
    </b-list-group>
  </va-dropdown>
</template>

<script>
import * as servicesModule0 from '../../../../../app/module0/services'

export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
      colorText: this.$store.getters.paletteText
    }
  },
  watch: {
    '$store.getters.paletteText': function() {
      this.colorText = this.$store.getters.paletteText;
    }
  },
  methods: {
    profile() {
      // alert('profile page not found :/');
    },
    logout() {
      servicesModule0.logout(); // logout first to clear cache
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style lang="scss">

.profile-dropdown {
  cursor: pointer;

  &__anchor {
    color: $vue-green;
  }

  .va-dropdown-popper__anchor {
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
    width: 8rem;
  }

  &__item {
    display: block;
    color: $vue-darkest-blue;

    &:hover,
    &:active {
      color: $vue-green;
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
