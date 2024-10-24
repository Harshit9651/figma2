<template>
<!-- <HomePage></HomePage> -->
 <!-- <NavBar></NavBar> -->
  <!-- <SlidBar></SlidBar> -->
   <FooterPage></FooterPage>
</template>
  
 <script>
import FooterPage from './components/FooterPage.vue';

// import HomePage from './components/HomePage.vue';
// import SlidBar from './components/SlidBar.vue';

// import NavBar from './components/NavBar.vue';

 
//  import SlidBar from './components/SlidBar.vue'

export default {
  name: 'App',
  components: {
    // HomePage
    // SlidBar
    // NavBar
    // SlidBar
    FooterPage
  }
}
</script>

<style>
body{
  margin: 0;
 padding: 0;
}
#app {
  margin: 0;
 padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width:100%;
}
</style>
