//import { createStore } from "vuex";
import Vuex from "vuex";
import admin from "./modules/admin";
import ux_management from "./modules/ux_management";


export default new Vuex.Store({
  modules: {
    admin: admin,
    ux_management: ux_management
  }
});

