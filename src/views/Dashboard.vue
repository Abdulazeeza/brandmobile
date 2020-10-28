<template>
  <!-- dashboard -->
  <div class="dashboard">

    <!-- sidebar section -->
    <Sidebar />

    <!-- main section of dashboard -->
    <div class="main_section">

      <!-- header in main section -->
      <Header />

      <!-- content (pages) section of the main section -->
      <div class="content">
        <router-view />
      </div>

    </div>

    <!-- Modal display body -->
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import Modal from "@/components/dashboard/Modal"

export default {
  name: "Dashboard",
  components: {Sidebar, Header, Modal},
  
};
</script>

<style lang="scss" scoped>
  .dashboard{
    width:100%;
    height:100%;
    max-width:1500px;
    margin:auto;
    left: 0;
    right:0;
    padding:0;
    display: flex;
    position: absolute;
    overflow: hidden;
  }
  .main_section{
    width: -webkit-fill-available;
    height: 100%;
    background: #EDF0F0;
  }
  .content{
    padding: 20px 50px;
    overflow-y: auto;
    height: 90%;
  }
  @media (max-width: 1000px) {
    .main_section{
      min-width: 100%;
    }
  }
  @media (max-width: 750px) {
    .content{
      padding: 20px;
    }
  }
  @media (max-width: 550px) {
    .content{
      padding: 20px 5%;
      height:85%;
    }
  }
</style>