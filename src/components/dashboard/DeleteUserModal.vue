<template>
  <div class="delete_user_modal">

    <div class="close_icon" @click="close_display_delete_modal"><i class="fa fa-times"></i></div>

    <div class="purpose">
      <img :src="require('@/assets/img/signs.svg')" alt="" />
    </div>

    <p class="description">You’re about to delete this User.</p>
    <p class="description">Are you sure ?</p>

    <div class="decision">
      <button @click="delete_sub_user">Yes</button>
      <button @click="close_display_delete_modal">No</button>
    </div>

  </div>
</template>

<script>
export default {
    name:"DeleteUserModal",
    methods: {
        //close the modal for delelte prompt
        close_display_delete_modal () { 
            this.$store.commit("ux_management/display_delete_modal", false);
            this.$store.commit("ux_management/show_modal", false);
        },

        // delete user
        delete_sub_user () {
            this.$store.commit("admin/delete_sub_user");
            this.close_display_delete_modal();
        }
    }
}
</script>

<style lang="scss" scoped>

.delete_user_modal{
    width: 350px;
    padding: 15px;
    border: 1px solid #44099F;
    border-radius: 7px;
    text-align: center;
    .close_icon{
        display:flow-root;
        i{
            float: right;
            cursor: pointer;
            color: red;
            font-size: 25px;
        }
    }

    .purpose{
        text-align:center;
        img{
            width: 30px;
        }
    }
    .description{
        font-size: 15px;
        color:#080808;
    }

    .decision{
        width: 80%;
        margin: 30px auto 0px auto;
        display: flex;
        justify-content: space-around;

        button{
            outline:none;
            box-shadow: 0px 3px 6px #00000029;
            border: 0.5px solid #5064CC;
            border-radius: 4px;
            width: 100px;
            height: 32px;
            background: transparent;
            cursor: pointer;
        }
    }
}

@media (max-width: 400px){
    .delete_user_modal{
        width: 300px;
    }
}
</style>
