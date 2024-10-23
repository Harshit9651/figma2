<template>
  <div class="slidbar">
    <!-- Filter Section with Hide/Unhide -->
    <div class="header">
      <div class="left">
        <span class="filter-text">Filters</span>
      </div>
      <div class="right">
        <button @click="toggleSidebar">
          <img src="../assets/start.png" alt="Toggle Sidebar" />
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
            <img
              :src="
                filterExtended
                  ? require('../assets/expand_less.png')
                  : require('../assets/expand_more.png')
              "
              alt="Expand Filters"
            />
          </button>
        </div>

        <div v-if="filterExtended">
          <div class="applied-filters">
            <div
              v-for="(filter, index) in appliedFilters"
              :key="index"
              class="filter-item"
            >
              {{ filter }}
              <button @click="removeFilter(index)">
                <img src="../assets/close.png" alt="Remove Filter" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Price Section -->
      <!-- <div class="price-section">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/attach_money.png" alt="Price" />
            <span
              >Price
              <div class="price-selected">({{ 1 }})</div>
            </span>
          </div>
          <button @click="togglePriceExtended">
            <img
              :src="
                priceExtended
                  ? require('../assets/expand_less.png')
                  : require('../assets/expand_more.png')
              "
              alt="Toggle Price"
            />
          </button>
        </div>

        <div class="price-button" v-if="priceExtended">
          <button class="price-option" @click="setActivePrice('free')">
            Free
          </button>
          <button class="price-option" @click="setActivePrice('paid')">
            Paid
          </button>
        </div>
      </div> -->
      <div class="price-section">
  <div class="filter-header">
    <div class="left">
      <img src="../assets/attach_money.png" alt="Price" />
      <span>Price</span>
    </div>
    <button @click="togglePriceExtended">
      <img
        :src="
          priceExtended
            ? require('../assets/expand_less.png')
            : require('../assets/expand_more.png')
        "
        alt="Toggle Price"
      />
    </button>
  </div>

  <div class="price-button" v-if="priceExtended">
    <button 
      class="price-option" 
      @click="togglePriceSelection('free')"
      :class="{ selected: selectedPrices.includes('free') }"
    >
      Free
    </button>
    <button 
      class="price-option" 
      @click="togglePriceSelection('paid')"
      :class="{ selected: selectedPrices.includes('paid') }"
    >
      Paid
    </button>
  </div>
</div>
      <hr />

      <!-- File Type Section -->
      <div class="file-type-section">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/insert_drive_file.png" alt="" />
            <span
              >File Type
              <div class="file-selected">({{ 1 }})</div></span
            >
          </div>
          <button @click="toggleFileTypeExtended">
            <img
              :src="
                fileTypeExtended
                  ? require('../assets/expand_less.png')
                  : require('../assets/expand_more.png')
              "
              alt="Toggle File Type"
            />
          </button>
        </div>

        <div class="file-options" v-if="fileTypeExtended">
          <button class="file-option" @click="selectFileType('max')">
            max
          </button>
          <button class="file-option" @click="selectFileType('obj')">
            obj
          </button>
          <button class="file-option" @click="selectFileType('fbx')">
            fbx
          </button>
          <button class="file-option" @click="selectFileType('glb')">
            glb
          </button>
        </div>
      </div>

      <hr />

      <!-- Color Section -->
      <div class="color-section">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/color_lens.png" alt="" />
            <span>Color</span>
          </div>
          <button @click="toggleColorExtended">
            <img
              :src="
                colorExtended
                  ? require('../assets/expand_less.png')
                  : require('../assets/expand_more.png')
              "
              alt="Toggle Color"
            />
          </button>
        </div>

        <div v-if="colorExtended">
          <div class="color-options">
            <div
              class="outer"
              :class="{ selected: selectedColor === 'color1' }"
            >
              <div
                class="color-option color1"
                @click="selectColor('color1')"
              ></div>
            </div>
            <div
              class="outer"
              :class="{ selected: selectedColor === 'color2' }"
            >
              <div
                class="color-option color2"
                @click="selectColor('color2')"
              ></div>
            </div>
            <div
              class="outer"
              :class="{ selected: selectedColor === 'color3' }"
            >
              <div
                class="color-option color3"
                @click="selectColor('color3')"
              ></div>
            </div>
            <div
              class="outer"
              :class="{ selected: selectedColor === 'color4' }"
            >
              <div
                class="color-option color4"
                @click="selectColor('color4')"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <!-- Materials Section -->
      <div class="materials">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/tonality.png" alt="" />
            <span>Materials</span>
          </div>
          <button @click="toggleMaterialsExtended">
            <img
              :src="
                materialsExtended
                  ? require('../assets/expand_less.png')
                  : require('../assets/expand_more.png')
              "
              alt=""
            />
          </button>
        </div>

        <div class="material-options" v-if="materialsExtended">
          <button class="material-option" @click="selectMaterial('gold')">
            Gold
          </button>
          <button class="material-option" @click="selectMaterial('iron')">
            Iron
          </button>
          <button class="material-option" @click="selectMaterial('silver')">
            Silver
          </button>
        </div>

      </div>
      <hr/>
      <div class="textures">
      <div class="filter-header">
        <div class="left">
          <img src="../assets/texture.png" alt="" />
          <span>Textures</span>
        </div>
        <button @click="toggleTexturesExtended">
          <img
            :src="
              texturesExtended
                ? require('../assets/expand_less.png')
                : require('../assets/expand_more.png')
            "
            alt=""
          />
        </button>
      </div>

      <div class="texture-options" v-if="texturesExtended">
        <button
          class="texture-option"
          @click="selectTexture('brick')"
          :class="{ selected: selectedTextures.includes('brick') }"
        >
          Brick
        </button>
        <button
          class="texture-option"
          @click="selectTexture('fabric')"
          :class="{ selected: selectedTextures.includes('fabric') }"
        >
          Fabric
        </button>
        <button
          class="texture-option"
          @click="selectTexture('leather')"
          :class="{ selected: selectedTextures.includes('leather') }"
        >
          Leather
        </button>
      </div>
    </div>
    <hr/>
    <div class="styles">
      <div class="filter-header">
        <div class="left">
          <img src="../assets/interests.png" alt="" />
          <span>Styles</span>
        </div>
        <button @click="toggleStylesExtended">
          <img
            :src="
              stylesExtended
                ? require('../assets/expand_less.png')
                : require('../assets/expand_more.png')
            "
            alt=""
          />
        </button>
      </div>

      <div class="style-options" v-if="stylesExtended">
        <button
          class="style-option"
          @click="selectStyle('classic')"
          :class="{ selected: selectedStyles.includes('classic') }"
        >
          Classic
        </button>
        <button
          class="style-option"
          @click="selectStyle('modern')"
          :class="{ selected: selectedStyles.includes('modern') }"
        >
          Modern
        </button>
        <button
          class="style-option"
          @click="selectStyle('aesthetic')"
          :class="{ selected: selectedStyles.includes('aesthetic') }"
        >
          Aesthetic
        </button>
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
const materialsExtended = ref(false);
const selectedColor = ref("");
const selectedMaterial = ref("");
const texturesExtended = ref(false);
const selectedTextures = ref([]);
const stylesExtended = ref(false);
const selectedStyles = ref([]);
const selectedPrices = ref([]);

// Applied filters
const appliedFilters = ref(["Gray", "Price"]);

// Active filter logic
const removeFilter = (index) => {
  appliedFilters.value.splice(index, 1);
};


// File Type Section
const selectedFileType = ref("");
function selectFileType(type) {
  selectedFileType.value = type;
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
function selectColor(color) {
  selectedColor.value = color;
}

function toggleMaterialsExtended() {
  materialsExtended.value = !materialsExtended.value;
}

function selectMaterial(material) {
  selectedMaterial.value = material; // Update the selected material
}
function toggleTexturesExtended() {
  texturesExtended.value = !texturesExtended.value;
}

// Select/Deselect texture
function selectTexture(texture) {
  const index = selectedTextures.value.indexOf(texture);
  if (index > -1) {
    // If already selected, remove it
    selectedTextures.value.splice(index, 1);
  } else {
    // Otherwise, add it
    selectedTextures.value.push(texture);
  }
}
function toggleStylesExtended() {
  stylesExtended.value = !stylesExtended.value;
}

// Select/Deselect style
function selectStyle(style) {
  const index = selectedStyles.value.indexOf(style);
  if (index > -1) {
    // If already selected, remove it
    selectedStyles.value.splice(index, 1);
  } else {
    // Otherwise, add it
    selectedStyles.value.push(style);
  }
}
function togglePriceSelection(type) {
  const index = selectedPrices.value.indexOf(type);
  if (index > -1) {
    // If already selected, remove it
    selectedPrices.value.splice(index, 1);
  } else {
    // Otherwise, add it
    selectedPrices.value.push(type);
  }
}
</script>

<style lang="scss" scoped>
.slidbar {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
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

.filter-section,
.price-section,
.file-type-section,
.color-section,
.Materials,.textures {
  margin-top: 1rem;
}

button {
  all: unset;
  display: inline-block;
}

hr {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #e0e0e0;
}

/* Price Section Styles */
.price-section {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center; // Align items in a row
    }

    .price-selected {
      color: blueviolet;
      margin-left: 0.5rem; // Space between price and count
    }
  }
  .price-button {
    display: flex;
    gap: 1rem;
    align-items: center;
    .price-option {
      // padding: 0.6rem;
      margin: 0.5rem 0;
      height:2.65rem;
      width:4.345rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      // border: 1px solid black;
      border: 1px solid #E5E1E1;
      color: black;
      border-radius: 1.5rem;
      &.selected {
        background-color: blueviolet; 
        color: white; 
      }
    }
  }
}

/* File Type Section Styles */
.file-type-section {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    .file-selected {
      color: blueviolet;
      margin-left: 0.5rem; // Space between price and count
    }
  }
  .file-options {
    display: flex;
    gap: 1rem;
    align-items: center;

    .file-option {
      // padding: 1rem;
      margin: 0.5rem 0;
      cursor: pointer;
      height:2.625rem;
      width:4.25rem;
      color: rgb(3, 3, 3);
      border-radius: 2.5rem;
      border: 1px solid #e5e1e1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

/* Color Section Styles */
.color-section {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    img {
      margin-bottom: 0.2rem;
    }
    span {
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
    }

    .file-selected {
      color: blueviolet;
      margin-left: 0.5rem;
    }
  }
  .color-options {
    display: flex;
    gap: 10px;
  }
  .outer {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    &.selected {
      border: 2px solid #7343ea;
    }

    .color-option {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .color1 {
    background: #adaaaa;
  }
  .color2 {
    background: #313030;
  }
  .color3 {
    background: #605e5e;
  }
  .color4 {
    background: #797676;
  }
}
.materials {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    img {
      margin-bottom: 0.2rem;
    }
    span {
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
    }
  }

  .material-options {
    display: flex;
    gap: 0.5rem;

    .material-option {
      display: flex;
      align-items: center;
      justify-content: center;
    
      margin: 0.5rem 0;
      cursor: pointer;
      height: 2.625rem;
      width: 4.5rem;
      color: rgb(3, 3, 3);
      border-radius: 2.5rem;
      border: 1px solid #e5e1e1;
      
    }
  }
}

.textures {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    img {
      margin-bottom: 0.2rem;
    }
    span {
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
    }
  }

  .texture-options {
    display: flex;
    gap: 0.5rem;

    .texture-option {
      padding: 0.6rem;
      margin: 0.5rem 0;
      cursor: pointer;
      border: 1px solid #e5e1e1;
      border-radius: 1.5rem;
      background-color: #fff; // default background
    }

    .selected {
      background-color: blueviolet; // background for selected option
      color: white; // text color for selected option
    }
  }
}
.styles {
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
    img {
      margin-bottom: 0.2rem;
    }
    span {
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
    }
  }

  .style-options {
    display: flex;
    gap: 0.5rem;

    .style-option {
      padding: 0.6rem;
      margin: 0.5rem 0;
      cursor: pointer;
      border: 1px solid #e5e1e1;
      border-radius: 1.5rem;
      background-color: #fff; // default background
    }

    .selected {
      background-color: blueviolet; // background for selected option
      color: white; // text color for selected option
    }
  }
}
</style>
