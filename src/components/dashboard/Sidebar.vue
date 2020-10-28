<template>
    <div class="sidebar" :class="{sidebar__mobile: sidebar_mobile}">

        <!-- company logo -->
        <div class="sidebar__logo">
            <img :src="require('@/assets/img/primary_logo.svg')" alt=""/>
        </div>

        <!-- side nav -->
        <div class="sidebar__nav">

            <!-- sidebar navlink -->
            <router-link to="/dashboard" class="navlink" :class="{navlink__active: currentRoute('Dashboard')}">
                <img :src="require('@/assets/img/window.svg')" alt=""/>
                <p>Dashboard</p>
            </router-link>

            <!-- sidebar navlink -->
            <router-link to="/dashboard/clients" class="navlink" :class="{navlink__active: currentRoute('Clients')}">
                <img :src="require('@/assets/img/company.svg')" alt=""/>
                <p>Clients</p>
            </router-link>

            <!-- sidebar navlink -->
            <router-link to="/dashboard/campaigns" class="navlink" :class="{navlink__active: currentRoute('Campaigns')}">
                <img :src="require('@/assets/img/campaign.svg')" alt=""/>
                <p>Campaigns</p>
            </router-link>

            <!-- sidebar navlink -->
            <router-link to="/dashboard/audience" class="navlink" :class="{navlink__active: currentRoute('Audience')}">
                <img :src="require('@/assets/img/target.svg')" alt=""/>
                <p>Audience</p>
            </router-link>

            <!-- sidebar navlink -->
            <router-link to="/dashboard/games" class="navlink" :class="{navlink__active: currentRoute('Games')}">
                <img :src="require('@/assets/img/dice.svg')" alt=""/>
                <p>Games</p>
            </router-link>

            <!-- sidebar navlink -->
            <router-link to="/dashboard/redemption" class="navlink" :class="{navlink__active: currentRoute('Redemption')}">
                <img :src="require('@/assets/img/coupon.svg')" alt=""/>
                <p>Redemption</p>
            </router-link>

        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Sidebar",
    computed: {
         ...mapState({
            sidebar_mobile: state => state.ux_management.sidebar_mobile
        }),
    },

    methods: {
        currentRoute(linkRoute) {
            if(linkRoute == this.$route.name){
                return true;
            } else {
                return false;
            }
        },

        // getSidebarStatus () {
        //     return this.$store.getters["ux_management/sidebar_mobile"];
        // },
    }
}
</script>

<style lang="scss" scoped>
.sidebar{
    min-width: 200px;
    max-width:200px;
    background: #2F323A;
    transition: 0.5s ease;
    &__logo{
        padding: 20px 0px 50px 30px;
        img{
            width: 70px;
        }
    }
    &__nav{
        border-top: 1px solid #848589;
        .navlink{
            text-decoration: none;
            color: #ffffff;
            display: flex;
            align-items: center;
            padding: 0px 30px;
            height: 65px;
            border-bottom: 1px solid #848589;
            &:hover{
                background: #ffffff;
                color:#44099F;
            }
            &__active{
                background: #ffffff;
                color:#44099F;
            }
            p{
                margin: 0px;
                font-size: 15px;
            }
            img{
                margin-right:20px;
            }
        }
    }
}
@media (max-width:1000px) {
    .sidebar{
        &__mobile{
            margin-left: -200px;
        }
    }
}
</style>