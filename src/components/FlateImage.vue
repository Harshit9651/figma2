<template>
    <div class="flat-container">
      <div class="flat-image">
        <img
          src="https://img.freepik.com/premium-photo/apartment-flat-top-view-furniture-decors-plan-cross-section-interior-design-architect-design_960782-6446.jpg"
          alt="Flat Image"
          class="full-image"
        />
        <div
          v-for="(room, index) in rooms"
          :key="index"
          :class="['grid-section', { 'highlighted': selectedRoom === index }]"
          :style="room.style"
        ></div>
      </div>
  
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
  
  const rooms = [
    { name: 'Kitchen', icon: 'path-to-kitchen-icon.png', style: { gridArea: '1 / 1 / 2 / 2' } },
    { name: 'Living Room', icon: 'path-to-living-room-icon.png', style: { gridArea: '1 / 2 / 2 / 3' } },
    { name: 'Bedroom', icon: 'path-to-bedroom-icon.png', style: { gridArea: '2 / 1 / 3 / 2' } },
    // Add more rooms as needed, assigning each room a `gridArea` position
  ];
  
  const selectedRoom = ref(null);
  
  const selectRoom = (index) => {
    selectedRoom.value = index;
  };
  </script>
  
  <style lang="scss" scoped>
  .flat-container {
    display: flex;
    align-items: flex-start;
  
    .flat-image {
      position: relative;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      width: 50%;
  
      .full-image {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
  
      .grid-section {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: background 0.3s ease;
        opacity: 0.5;
  
        &.highlighted {
          background-color: rgba(0, 123, 255, 0.5);
        }
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
  