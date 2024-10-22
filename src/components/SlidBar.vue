<template>
  <div class="slidbar">
    <!-- Filter Section with Hide/Unhide -->
    <div class="header">
      <div class="left">
        <span class="filter-text">Filters</span>
      </div>
      <div class="right">
        <button @click="toggleSidebar">
          <img :src="sidebarVisible ? '../assets/expand_less.png' : '../assets/expand_more.png'" alt="Toggle Sidebar" />
        </button>
      </div>
    </div>

    <div v-if="sidebarVisible">
      <hr />

      <!-- All Filters Section -->
      <div class="filter-section">
        <div class="filter-header">
          <span>All Filters</span>
          <button @click="toggleFilterExtended">
            <img :src="filterExtended ? '../assets/expand_less.png' : '../assets/expand_more.png'" alt="Expand Filters" />
          </button>
        </div>

        <div v-if="filterExtended">
          <div class="applied-filters">
            <div v-for="(filter, index) in appliedFilters" :key="index" class="filter-item">
              {{ filter }}
              <button @click="removeFilter(index)"><img src="../assets/close.png" alt="Remove Filter" /></button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Price Section -->
      <div class="price-section">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/attach_money.png" alt="Price" />
            <span>Price</span>
          </div>
          <button @click="togglePriceExtended">
            <img :src="priceExtended ? '../assets/expand_less.png' : '../assets/expand_more.png'" alt="Toggle Price" />
          </button>
        </div>
        
        <div v-if="priceExtended">
          <button class="price-option" @click="setActivePrice('free')">Free</button>
          <button class="price-option" @click="setActivePrice('paid')">Paid</button>
        </div>
      </div>

      <hr />

      <!-- File Type Section -->
      <div class="file-type-section">
        <div class="filter-header">
          <div class="left">
            <!-- <img src="../assets/" alt="File Type" /> -->
            <span>File Type</span>
          </div>
          <button @click="toggleFileTypeExtended">
            <img :src="fileTypeExtended ? '../assets/expand_less.png' : '../assets/expand_more.png'" alt="Toggle File Type" />
          </button>
        </div>

        <div v-if="fileTypeExtended">
          <button class="file-option" @click="selectFileType('pdf')">PDF</button>
          <button class="file-option" @click="selectFileType('png')">PNG</button>
          <button class="file-option" @click="selectFileType('obj')">OBJ</button>
        </div>
      </div>

      <hr />

      <!-- Color Section -->
      <div class="color-section">
        <div class="filter-header">
          <div class="left">
            <!-- <img src="../assets/color.png" alt="Color" /> -->
            <span>Color</span>
          </div>
          <button @click="toggleColorExtended">
            <img :src="colorExtended ? '../assets/expand_less.png' : '../assets/expand_more.png'" alt="Toggle Color" />
          </button>
        </div>

        <div v-if="colorExtended">
          <div class="color-options">
            <div class="color-option" style="background-color: black;" @click="selectColor('black')"></div>
            <div class="color-option" style="background-color: pink;" @click="selectColor('pink')"></div>
            <div class="color-option" style="background-color: red;" @click="selectColor('red')"></div>
            <div class="color-option" style="background-color: blue;" @click="selectColor('blue')"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// Sidebar visibility and extended state
const sidebarVisible = ref(true);
const filterExtended = ref(false);
const priceExtended = ref(false);
const fileTypeExtended = ref(false);
const colorExtended = ref(false);

// Applied filters
const appliedFilters = ref(["Gray", "Price"]);

// Active filter logic
const removeFilter = (index) => {
  appliedFilters.value.splice(index, 1);
};

// Price Section
const activePrice = ref('free');
function setActivePrice(type) {
  activePrice.value = type;
}

// File Type Section
const selectedFileType = ref("");
function selectFileType(type) {
  selectedFileType.value = type;
}

// Color Section
const selectedColor = ref("");
function selectColor(color) {
  selectedColor.value = color;
}

// Toggle Sidebar visibility
function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

// Toggle extended section states
function toggleFilterExtended() {
  filterExtended.value = !filterExtended.value;
}
function togglePriceExtended() {
  priceExtended.value = !priceExtended.value;
}
function toggleFileTypeExtended() {
  fileTypeExtended.value = !fileTypeExtended.value;
}
function toggleColorExtended() {
  colorExtended.value = !colorExtended.value;
}
</script>
<style lang="scss" scoped>
.slidbar {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #f0f0f0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  overflow-y: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  font-weight: bold;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  cursor: pointer;
}

.filter-text {
  font-size: 1.2rem;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.filter-section, .price-section, .file-type-section, .color-section {
  margin-top: 1rem;
}

button {
  padding: 0.5rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin-left: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

hr {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #e0e0e0;
}

.price-option, .file-option {
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
}

.file-option:hover, .price-option:hover {
  background-color: #218838;
}

.color-options {
  display: flex;
  gap: 10px;
}

.color-option {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  cursor: pointer;
}

.color-option:hover {
  opacity: 0.8;
}
</style>
