<template>
    <div class="image-container">
      <input type="file" @change="handleImageUpload" accept="image/*" />
      
   
      <div v-if="imageUrl && !isMerged" class="image-parts">
        <div class="part" :style="getPartStyle(0, 0)"></div>
        <div class="part" :style="getPartStyle(50, 0)"></div>
        <div class="part" :style="getPartStyle(0, 50)"></div>
        <div class="part" :style="getPartStyle(50, 50)"></div>
      </div>
  

      <div v-else-if="imageUrl" class="full-image">
        <img :src="imageUrl" alt="Merged Image" />
      </div>
  
      <button @click="isMerged = !isMerged">
        {{ isMerged ? 'Split Image' : 'Merge Image' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
 
  const imageUrl = ref(null);
  const isMerged = ref(false);
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      imageUrl.value = URL.createObjectURL(file);
      isMerged.value = false; 
    }
  };
  
 
  const getPartStyle = (x, y) => ({
    backgroundImage: `url(${imageUrl.value})`,
    backgroundPosition: `${x}% ${y}%`,
    backgroundSize: '200% 200%',
  });
  </script>
  
  <style scoped>
  .image-container {
    text-align: center;
  }
  
  .image-parts {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
  }
  
  .part {
    width: 50%; 
    height: 50%;
    background-repeat: no-repeat;
    border: 1px solid #ddd;
  }
  
  .full-image img {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
  