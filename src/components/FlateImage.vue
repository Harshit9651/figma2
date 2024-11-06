<template>
    <div class="flat-container">
      <!-- Left section: Image of the flat -->
      <div class="flat-image">
        <img src="path-to-your-flat-image.jpg" alt="Flat Image" />
      </div>
  
      <!-- Right section: Sidebar with icons for each room -->
      <div class="sidebar">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          :class="['icon', { 'highlighted': selectedRoom === index }]"
          @click="selectRoom(index)"
        >
          <img :src="room.icon" :alt="room.name" />
          <span>{{ room.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define the rooms and their icons
  const rooms = [
    { name: 'Kitchen', icon: 'path-to-kitchen-icon.png' },
    { name: 'Living Room', icon: 'path-to-living-room-icon.png' },
    { name: 'Bedroom', icon: 'path-to-bedroom-icon.png' },
    // Add more rooms as needed
  ];
  
  // Track the selected room
  const selectedRoom = ref(null);
  
  // Function to select a room and highlight it
  const selectRoom = (index) => {
    selectedRoom.value = index;
  };
  </script>
  
  <style lang="scss" scoped>
  .flat-container {
    display: flex;
    align-items: flex-start;
  
    .flat-image {
      flex: 1;
      img {
        width: 100%;
        height: auto;
      }
    }
  
    .sidebar {
      width: 200px;
      display: flex;
      flex-direction: column;
      gap: 10px;
  
      .icon {
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        transition: background 0.3s ease;
  
        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }
  
        &.highlighted {
          background-color: #007bff;
          color: #fff;
        }
  
        span {
          font-size: 14px;
        }
      }
    }
  }
  </style>
  