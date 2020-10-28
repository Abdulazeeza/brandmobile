<template>
    <div class="modal-mask" v-show="show_modal">
        <div class="modal-wrapper">
            <div class="modal-container">
                <!-- delete Modal body -->
                <DeleteUserModal v-show="display_delete_modal"/>

                <!-- Edit Profile Modal -->
                <EditInfoModal v-show="edit_profile"/>
            </div>
        </div>
    </div>
</template>

<script>
import DeleteUserModal from "@/components/dashboard/DeleteUserModal";
import EditInfoModal from "@/components/dashboard/EditInfoModal";
import { mapState } from "vuex";

export default {
    name:"Modal",
    components:{DeleteUserModal, EditInfoModal},
    computed: {
         ...mapState({
            show_modal: state => state.ux_management.show_modal,
            edit_profile: state => state.ux_management.edit_profile,
            display_delete_modal: state => state.ux_management.display_delete_modal
        }),
    },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: max-content;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 7px;
}

</style>