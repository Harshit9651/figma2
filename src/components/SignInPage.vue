<template>
  <div class="main-wrapper">
    <div class="neo-green"></div>
  
    <div class="content-wrapper">
      <div class="logo">
      <img src="../assets/Frame 22.png" alt="" />
    </div>
    </div>
  </div>
</template>
<script setup></script>
 <style lang="scss" scoped>
.main-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
 align-items: center;



  .neo-green {
    width: 100%;
    height: 1rem;
    background: #dcf763;
    
  }
 
  .content-wrapper{
    margin-top: 2rem;
    width: 80%;
    border: 2px solid black;
    height:95%;
    .logo {
    width: 12rem;
    height: 3.5rem;
    margin: 2rem;
    
    img{
      height: 100%;
      width: 100%;
    }
  }
  }
} 

</style>
