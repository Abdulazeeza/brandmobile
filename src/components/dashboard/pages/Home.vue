<template>
    <div class="home">
        <div class="content">

            <div class="profile_section">

                <!-- profile -->
                <div class="profile">
                    <div class="image">
                        <div>
                            <img :src="require('@/assets/img/user.svg')" alt="" />
                            <p>Upload Picture</p>
                        </div>
                        <h3 class="name">{{user_info.first_name}} {{user_info.last_name}}</h3>                        
                    </div>
                    <a class="edit" @click="edit_profile"><img :src="require('@/assets/img/edit.svg')" alt="" /></a>
                </div>

                <!-- info -->
                <p class="info">
                    <img :src="require('@/assets/img/mail.svg')" alt=""/>
                    <a>{{user_info.email}}</a>
                </p>
                <!-- info  -->
                <p class="info">
                    <img :src="require('@/assets/img/phone.svg')" alt=""/>
                    <a>{{user_info.phone}}</a>
                </p>
                <!-- info -->
                <p class="info">
                    <img :src="require('@/assets/img/pin.svg')" alt=""/>
                    <a>{{user_info.address}}</a>
                </p>
                <!-- info -->
                <p class="info" v-show="!edit_password" @click="openPasswordFields"> 
                    <img :src="require('@/assets/img/lock.svg')" alt=""/>
                    <a class="change_password"><em>Change Password</em></a>
                </p>

                <!-- update passowrd form -->
                <form class="form" v-show="edit_password">
                    <div class="password"><img :src="require('@/assets/img/lock.svg')" alt=""/><input type="password" name="old_password" placeholder="Old Password" required/></div>
                    <div class="password"><img :src="require('@/assets/img/lock.svg')" alt=""/><input type="password" name="new_password" placeholder="New Password" required/></div>
                    <div class="password"><img :src="require('@/assets/img/lock.svg')" alt=""/><input type="password" name="confirm_password" placeholder="Confirm Password" required/></div>

                    <button class="default_btn">Update</button>
                </form>
            </div>

            <!-- admins section -->
            <div class="admin_section">

                <div class="btn_container">
                    <button class="default_btn admin_btn">Resend Invitation<img :src="require('@/assets/img/sent.svg')" alt=""/></button>
                    <button class="default_btn admin_btn">Invite User<img :src="require('@/assets/img/more.svg')" alt=""/></button>
                </div>

                <!-- admins content-->
                <div class="admin_content">

                    <!-- title -->
                    <p class="admin_content__title">Users</p>

                    <div class="details">
                        <div class="admin" v-for="(sub_user, index) in sub_users" :key="sub_user">
                            <img class="item" :src="require('@/assets/img/user.svg')" alt=""/>
                            <p class="name item">{{sub_user.first_name}}</p>
                            <p class="email item">{{sub_user.email}}</p>
                            <div class="rank item">{{sub_user.role.name}}<i class="fa fa-caret-down"></i></div>
                            <p class="extra item">
                                <img :src="require('@/assets/img/block.svg')" alt=""/>
                                <img @click="open_display_delete_modal(index)" :src="require('@/assets/img/trash.svg')" alt=""/>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div> 
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    name: "Home",
    created () {
        this.$store.dispatch('admin/fetch_user');
    },
    computed: {
         ...mapState({
            edit_password: state => state.ux_management.edit_password,
        }),
        ...mapGetters({
            user_info: "admin/user_info",
            sub_users: "admin/sub_users"
        }),
    },
    methods: {
        openPasswordFields () {
            this.$store.commit("ux_management/edit_password", true);
            console.log(this.user_info.first_name)
        },
        edit_profile () {
            this.$store.commit("ux_management/edit_profile", true);
            this.$store.commit("ux_management/show_modal", true);
        },
        open_display_delete_modal (index) {
            this.$store.commit("ux_management/display_delete_modal", true);
            this.$store.commit("admin/present_sub_user", index);
            this.$store.commit("ux_management/show_modal", true);
        }
    }
}
</script>

<style lang="scss" scoped>
.default_btn{
    background: #5064CC;
    color:#ffffff;
    outline: none;
    border:none;
    cursor: pointer;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    font-size:12px;
}
.content{
    display:flex;
    margin-top:70px;
    flex-wrap: wrap;
    .profile_section{
        width:37%;
        padding-right:20px;
        margin-top:44px;
        .profile{
            display:flex;
            justify-content: space-between;
            margin-bottom: 40px;
            .image{
                display: flex;
                img{
                    width:70px;
                }
                p{
                    color: #2F323A;
                    font-size:12px;
                    margin: 2px 0px;
                }
                .name{
                    margin:30px 0px 35px 20px;
                    padding-bottom:0px;
                    border-bottom: 2px solid #44099F;
                    color: #44099F;
                }
            }
            .edit{
                float:right;
                width: 30px;
                height: 30px;
                background: #848589;
                border-radius: 50%;
                display:flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }
        .info{
            display:flex;
            align-items: center;
            color:#2F323A;
            font-size: 15px;
            margin: 40px 0px;
            img{
                margin-right: 10px;
            }
            .change_password{
                color:#5064CC;
                cursor: pointer;
                text-decoration: underline;
            }
        }
        .form{
            width: 75%;
            .password{
                display: flex;
                align-items: center;
                img{
                    margin-right: 10px;
                }
                input{
                    outline:none;
                    border:none;
                    border-bottom: 1px solid #5064CC;
                    width: -webkit-fill-available;
                    height:35px;
                    background:transparent;

                    &::placeholder{
                        font-style: italic;
                    }
                }
                 margin: 40px 0px;
            }
            button{
                float:right;
                width:100px;
                height:32px;
                margin-bottom: 50px;
            }
        }
    }
    .admin_section{
        width:63%;
        .btn_container{
            display: flow-root;
            .admin_btn{
                float:right;
                width:150px;
                height:32px;
                margin-left:25px;
                margin-bottom:12px;
                display:flex;
                justify-content: center;
                align-items: center;
                img{
                    margin-left: 10px;
                }
            }
        }
        .admin_content{
            padding: 20px;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 7px;
            background: #ffffff;
            width: 100%;
            &__title{
                color:#5064CC;
                font-size:19px;
                margin:0px;
            }
            .details{
                padding-top:50px;
                overflow-y: auto;
                .admin{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #707070;
                    margin-bottom: 15px;
                    color:#2F323A;
                    min-width: 600px;
                    .item{
                        margin-right:10px;
                        font-size:15px;
                    }
                    .extra{
                        img{
                            margin-right: 15px;
                            cursor: pointer;
                        }
                    }
                    .rank{
                        cursor:pointer;
                        display: flex;
                        align-items: center;
                        i{
                            font-size: 18px;
                            color:#5064CC;
                            margin-left: 7px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:1200px){
    .content{
        .profile_section{
            width: 100%;  
            .profile{
                width: 50%
            }
        }
        .admin_section{
            width:100%;
        }
    }
}

@media (max-width:750px){
    .content{
        .profile_section{
            .profile{
                width: 80%
            }
        }
    }
}
@media (max-width:550px){
    .content{
        margin-top:30px;
        .profile_section{
            .profile{
                width: 100%
            }
        }
        .admin_section{
            .admin_content{
                padding: 10px;
                .details{
                    padding-top:20px;
                }
            }
        }
    }
}
</style>