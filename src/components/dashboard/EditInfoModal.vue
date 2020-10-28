<template>
    <div class="edit_info_modal">
        <!-- close button -->
        <div class="close_icon" @click="close_edit_profile"><i class="fa fa-times"></i></div>

        <!-- Modal content -->
        <div class="content">
            <div class="content__header">
                <p>Edit Personal Information</p>
                <div class="profile">
                    <img :src="require('@/assets/img/user.svg')" alt="" />
                    <p>Upload Picture</p>
                </div>
            </div>

            <!-- Modal form -->
            <form class="form"  @submit.prevent="update_profile">

                <div class="input_container">
                    <label>Full Name</label>
                    <div class="input_field">
                        <img :src="require('@/assets/img/user_2.svg')" alt=""/>
                        <input type="name" v-model="computed_user.fullname" name="fullname" required>
                    </div>
                </div>

                <div class="input_container address">
                    <label>Address</label>
                    <div class="address__body">
                        <div class="input_field">
                            <img :src="require('@/assets/img/pin.svg')" alt=""/>
                            <input type="text" v-model="computed_user.address" name="address" required>
                        </div>

                        <select name="city">
                            <option>City</option>
                            <option>Ikoyi</option>
                            <option>Ikeja</option>
                        </select>

                        <select name="state">
                            <option>State</option>
                            <option>Abuja</option>
                            <option>Lagos</option>
                            <option>kaduna</option>
                        </select>
                        
                    </div>
                </div>

                <div class="input_container">
                    <label>Email</label>
                    <div class="input_field">
                        <img :src="require('@/assets/img/mail.svg')" alt=""/>
                        <input type="email" v-model="computed_user.email" name="email" required>
                    </div>
                </div>

                <div class="input_container">
                    <label>Phone Number</label>
                    <div class="input_field">
                        <img :src="require('@/assets/img/phone.svg')" alt=""/>
                        <input type="tel" v-model="computed_user.phone" name="phone" required>
                    </div>
                </div>

                <button class="update_btn">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:"EditInfoModal",
    computed: {
        ...mapGetters({
            user_info: "admin/user_info",
        }),

        computed_user () { // gets the values of user information
            let user_info = this.$store.getters["admin/user_info"];
            let fullname = `${user_info.first_name} ${user_info.last_name}`
            let email = user_info.email
            let address = user_info.address
            let phone = user_info.phone

            return {
                email: email,
                fullname: fullname,
                address: address,
                phone: phone
            }
        }

    },
    
    methods: {
        // close editing profile prompt
        close_edit_profile () {
            this.$store.commit("ux_management/edit_profile", false);
            this.$store.commit("ux_management/show_modal", false);
        },

        // update profile with info filled
        update_profile () {
            
            this.$store.commit("admin/user_info", [
                this.computed_user.fullname,
                this.computed_user.email,
                this.computed_user.phone,
                this.computed_user.address
            ]);
            this.close_edit_profile();
        }
    }
}
</script>

<style lang="scss" scoped>
.edit_info_modal{
    width: 750px;
    padding: 15px;
    border-radius: 7px;
    max-height: 670px;
    overflow-y: auto;

    .close_icon{
        display:flow-root;
        i{
            float: right;
            cursor: pointer;
            color: red;
            font-size: 25px;
        }
    }

    .content{
        padding: 15px 30px;
        &__header{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            p{
                font-size: 20px;
                color:#2F323A;
                
            }
            .profile{
                cursor: pointer;
                margin-left: 15px;
                img{
                    width:70px;
                }
                p{
                    color: #2F323A;
                    font-size:12px;
                    margin: 2px 0px;
                    text-decoration: underline;
                }
            }
        }

        .form{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0px 100px 0px;
            position: relative;
            .input_container{
                margin: 0px 10px 20px 0px;
                width: 47%;

                label{
                    color:#2F323A;
                    font-size:12px;
                }
                .input_field{
                    display: flex;
                    align-items: center;
                    border: 0.5px solid #44099F;
                    border-radius: 7px;
                    padding: 1px 5px 1px 10px;
                    height:40px; 
                    img{
                        margin-right: 7px
                    }

                    input{
                        width: -webkit-fill-available;
                        height:100%;
                        border: none;
                        outline: none;
                    }
                }
            }
            .address{
                width:100%;
                
                &__body{
                    display:flex;
                    flex-wrap: wrap;
                    
                    .input_field{
                        width:60%;
                        margin-right: 15px;
                        margin-bottom: 10px;
                    }

                    select{
                        border: 0.5px solid #44099F;
                        border-radius: 7px;
                        padding: 2px;
                        height:40px;
                        width: 100px;
                        margin-right: 15px; 
                        margin-bottom: 10px;
                    }
                }
            }
            .update_btn{
                background: #5064CC;
                color:#ffffff;
                outline: none;
                border:none;
                cursor: pointer;
                box-shadow: 0px 3px 6px #00000029;
                border-radius: 4px;
                font-size:12px;
                width:140px;
                height: 35px;
                position: absolute;
                bottom: 0;
                margin: auto;
                left:0;
                right:0;
            }
        }
    }
}

@media (max-width:800px){
    .edit_info_modal{
        width: 530px;
        .content{
            padding: 15px 10px;
            .form{
                padding: 15px 0px 50px 0px;
                .input_container{
                    width: 95%
                }

                .address{
                     &__body{
                        .input_field{
                            width:100%;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width:550px){
    .edit_info_modal{
        width: 310px;
    }
}
@media (max-height:680px){
    .edit_info_modal{
        max-height:480px;
    }
}
</style>