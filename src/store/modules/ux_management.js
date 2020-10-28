//holds all the state properties
const state = {
    sidebar_mobile: true,
    edit_password: false,
    show_modal: false,
    display_delete_modal: false,
    edit_profile: false
};

//returns the state properties
const getters = {
    sidebar_mobile: state => state.sidebar_mobile
};

//
const actions = {};

//updates the different state properties
const mutations = {
    sidebar_mobile: (state, status) => (state.sidebar_mobile = status),
    edit_password: (state, status) => (state.edit_password = status),
    show_modal: (state, status) => (state.show_modal = status),
    display_delete_modal: (state, status) => (state.display_delete_modal = status),
    edit_profile: (state, status) => (state.edit_profile = status),
};


export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};  