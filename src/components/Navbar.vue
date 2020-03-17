<template>
  <div>
    <b-navbar
      class="shadow-sm p-3 mb-5 bg-white rounded"
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand>
        <span id="navbar-headingleft">Koroona</span>
        <span id="navbar-headingright">kaart</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand>
            <small>Statistika COVID-19 viiruse leviku kohta Eestis</small>
          </b-navbar-brand>
          <b-navbar-brand id="navbar-interpunct">·</b-navbar-brand>
          <b-navbar-brand>
            <small>Uuendatud: {{ lastUpdated }}</small>
          </b-navbar-brand>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown id="navbar-langselect" right>
            <template align="center" v-slot:button-content>
              <Earth id="navbar-langicon" />
              <em>Eesti</em>
            </template>
            <b-dropdown-item v-for="item in languages" :key="item">
              {{ item }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Earth from "vue-material-design-icons/Earth.vue";

export default {
  name: "Navbar",
  components: {
    Earth
  },
  data() {
    return {
      languages: ["Eesti" /* "English" */]
    };
  },
  computed: {
    lastUpdated: function() {
      return "13. märtsil 2020 kell 17:32";
    }
  }
};
</script>

<style lang="scss" scoped>
#navbar-headingleft {
  color: black;
  font-weight: 900;
}

#navbar-headingright {
  color: #4072cd;
  font-weight: 900;
}

#navbar-interpunct {
  font-weight: 900;
}

#navbar-langicon {
  padding: 0em 1.5em;
}

#navbar-langselect {
  font-size: 1.2em;
  text-align: center;
}
</style>
