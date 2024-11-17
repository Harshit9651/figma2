<template>
  <div class="main-wrapper">
    <div class="neo-green"></div>

    <div class="content-wrapper">
      <div class="logo">
        <img src="../assets/3d_text_logo.svg" alt="Logo" />
      </div>
      <div class="containers">
        <!-- Login Form Container -->
        <div class="content-container"></div>
        <!-- Image Container -->
        <div class="image-container">
          <img src="../assets/Group 4.png" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-wrapper {
  // height: 98vh;
  overflow: auto;
  .neo-green {
    width: 100%;
    height: 1rem;
    background: #dcf763;
  }

  .content-wrapper {
    border: 4px solid black;
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    overflow: hidden; // Prevents content overflow from the main wrapper

    .logo {
      width: 10rem;
      height: 3rem;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .containers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .content-container {
        /* Optional styling for additional content */
      }

      .image-container {
        flex: 1; // Automatically take available space
        max-width: 40%; // Limit the width of the image container
        max-height: 100%; // Prevent vertical overflow
        overflow: hidden; // Ensure the container does not overflow
        display: flex;
        justify-content: center; // Center the image if needed
        align-items: center;

        img {
          max-width: 100%; // Ensure the image scales down to fit the container
          max-height: 100%; // Prevent the image from overflowing vertically
          object-fit: contain; // Ensures the image maintains its aspect ratio
        }
      }
    }
  }
}
</style>
