import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Server } from "miragejs";

new Server({
  routes() {
    this.get("/api/user", () => {
      return {
        "data": {
          "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
          "first_time_login": false,
          "first_name": "Moshood",
          "last_name": "Aremu",
          "email": "Moshood@brandmobileafrica.com",
          "phone":  "+234 818 655 1442",
          "address":  "#25B, Adewole Kolawole Crescent, off Admiralty way, Lekki, Phase 1, Lagos, Nigeria.",
          "image_url": "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
          "sub_users": [
            {
              "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
              "first_name": "Munachim Anyamene",
              "image_url": "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
              "email":  "Munachim@brandmobileafrica.com",
              "is_active": true,
              "has_activated": true,
              "role": {
                "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "name": "admin"
              }
            },
            {
              "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
              "first_name": "Munachim Anyamene",
              "is_active": true,
              "email":  "Munachim@brandmobileafrica.com",
              "has_activated": true,
              "role": {
                "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "name": "admin"
              }
            },
            {
              "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
              "first_name": "Munachim Anyamene",
              "image_url": "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
              "email":  "Munachim@brandmobileafrica.com",
              "is_active": true,
              "has_activated": false,
              "role": {
                "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "name": "admin"
              }
            },
            {
              "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
              "first_name": "Munachim Anyamene",
              "image_url": "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
              "email":  "Munachim@brandmobileafrica.com",
              "is_active": false,
              "has_activated": true,
              "role": {
                "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "name": "admin"
              }
            },
            {
              "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
              "first_name": "Munachim Anyamene",
              "is_active": false,
              "email":  "Munachim@brandmobileafrica.com",
              "has_activated": false,
              "role": {
                "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "name": "admin"
              }
            }
          ]
        },
        "token":  "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo"
      }

    })
  }
})

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
