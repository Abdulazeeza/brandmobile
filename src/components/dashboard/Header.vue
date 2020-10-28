<template>
    <!-- header -->
    <header class="header">
        <div class="notification_bell">
            <a class="menu_icon" @click="toggleSidebar"><i class="fa fa-bars"></i></a>
            <p>
                <i class="fa fa-bell"><span class="notifications">10+</span></i>
                Updated 29 mins ago
            </p>
        </div>
        <div class="profile_name">
            <a class="username"><img :src="require('@/assets/img/primary_user.svg')" alt="" />Hi, {{user_info.first_name}}</a>
            <a><img :src="require('@/assets/img/question_2.svg')" alt="" />Help</a>
        </div>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    computed: {
        ...mapGetters({
            user_info: "admin/user_info",
        })
    },
    methods: {
        
        toggleSidebar () { //toggles sidebar on menu click

            if( this.$store.getters["ux_management/sidebar_mobile"] == false){
                this.$store.commit("ux_management/sidebar_mobile", true);
            }else{
                this.$store.commit("ux_management/sidebar_mobile", false);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 50px;
    border-bottom: 1px solid #848589;

    .notification_bell{
        color: #848589;
        display:flex;
        align-items: center;
        .menu_icon{
            font-size: 20px;
            margin-right: 30px;
            cursor: pointer;
            display: none;
        }
        p{
            font-size: 13px;
            i{
                margin-right: 6px;
                font-size: 20px;
                position:relative;
                .notifications{
                    position: absolute;
                    background:#E24040;
                    padding: 5px 2px;
                    color: #ffffff;
                    border-radius: 50%;
                    font-size:8px;
                    top:-8px;
                    right:-5px;
                }
            }
        }
    }

    .profile_name{
        width: 220px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a{
            display: flex;
            align-items: center;
            font-size: 15px;
            color:#2F323A;
            img{
                margin-right: 6px;
                width: 22px;
            }
        }
        .username{
            font-weight: bold;
        }
    }
}
@media (max-width:1000px) {
    .header{
        .notification_bell{
            .menu_icon{
                display: block;
            }
        }
    }
}
@media (max-width: 750px) {
    .header{
      padding: 0px 20px;
    }
}
@media (max-width: 550px) {
    .header{
      padding: 0px 5%;
      display:grid;
      height: 100px;
    }
}
</style>