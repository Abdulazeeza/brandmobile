import axios from "axios";

// split full name
const splitName = fullname => {
    let first_name = fullname.split(' ').slice(0, -1).join(' ');
    let last_name = fullname.split(' ').slice(-1).join(' ');

    let new_names = {
        first_name: first_name,
        last_name: last_name
    }
    return new_names;
}

// updates local storage
const update_local_storage = () => {
    localStorage.setItem('user',  JSON.stringify(state.user));
}

//holds the state properties
const state = {
    user: {
        "data":{}
    },
    present_sub_user: null
};

//returns the state properties
const getters = {
    user_info: state => state.user.data,
    sub_users: state => state.user.data.sub_users
};

//fetch data 
const actions = {
    fetch_user: ({commit}) => {
        
        if("user" in localStorage) {
            let user = JSON.parse(localStorage.getItem("user"));
            //console.log(user);
            commit("user", user);
        }else {
            axios.get("/api/user")
            .then(response => {
                commit("user", response.data);
                update_local_storage();
            }) 
        }
    }
};

//updates the different state properties
const mutations = {
    user: (state, data) => {
        state.user = data;
        update_local_storage();
    },

    user_info: (state, [fullname, email, phone, address]) => {
        let edited_info = state.user;
        let new_names = splitName(fullname);
        edited_info.data.phone = phone;
        edited_info.data.email = email;
        edited_info.data.address = address;
        edited_info.data.first_name = new_names.first_name;
        edited_info.data.last_name = new_names.last_name;
        state.user = edited_info

        update_local_storage();
    },

    present_sub_user: (state, index) => (state.present_sub_user = index),

    delete_sub_user: (state) => {
        state.user.data.sub_users.splice(state.present_sub_user , 1);
        update_local_storage();
    }
};


export default {
    //export all the listed properties
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};  