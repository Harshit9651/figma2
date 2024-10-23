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
        <div  class="filter-header">
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


         
          <div
    v-for="(filter, index) in appliedFilters"
    :key="index"
    class="filter-item"
  >
    {{ filter }}
    <button @click="removeFilter(filter)">
      <img src="../assets/close.png" alt="Remove Filter" />
    </button>
  </div>
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

      <div v-if="appliedFilters.length > 0">
      <hr />
    </div>
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
            <span>Price <div v-if="selectedPrices.length>0" class="priceselcted">({{priceCount}})</div></span>
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
              <div class="file-selected " v-if="selectedFileTypes.length > 0">({{ fileTypeCount }})</div></span
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
          <button
            class="file-option"
            @click="toggleFileTypeSelection('max')"
            :class="{ selected: selectedFileTypes.includes('max') }"
          >
            max
          </button>
          <button
            class="file-option"
            @click="toggleFileTypeSelection('obj')"
            :class="{ selected: selectedFileTypes.includes('obj') }"
          >
            obj
          </button>
          <button
            class="file-option"
            @click="toggleFileTypeSelection('fbx')"
            :class="{ selected: selectedFileTypes.includes('fbx') }"
          >
            fbx
          </button>
          <button
            class="file-option"
            @click="toggleFileTypeSelection('glb')"
            :class="{ selected: selectedFileTypes.includes('glb') }"
          >
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
            <span>Color <div v-if="selectedColors.length>0"  class="colorcount">({{ colorCount}})</div></span>
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
              v-for="(color, index) in colorOptions"
              :key="index"
              :class="{ selected: selectedColors.includes(color) }"
            >
              <div
                class="color-option"
                :class="color"
                @click="toggleColorSelection(color)"
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
            <span>Materials <div  v-if="selectedMaterials.length>0" class="materailcount">({{ materialCount}})</div></span>
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
          <button
            class="material-option"
            v-for="(material, index) in materialOptions"
            :key="index"
            @click="toggleMaterialSelection(material)"
            :class="{ selected: selectedMaterials.includes(material) }"
          >
            {{ material }}
          </button>
        </div>
      </div>

      <!-- Color Section -->
      <!-- <div class="color-section">
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
      </div> -->

      <!-- Materials Section -->
      <!-- <div class="materials">
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

      </div> -->
      <hr />
      <div class="textures">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/texture.png" alt="" />
            <span>Textures <div v-if="selectedTextures.length>0" class="textcturecount">({{textureCount }})</div></span>
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
      <hr />
      <div class="styles">
        <div class="filter-header">
          <div class="left">
            <img src="../assets/interests.png" alt="" />
            <span>Styles <div v-if="selectedStyles.length>0" class="stylecount">({{ styleCount }})</div></span>
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
  
</template>

<script setup>
import { ref ,computed} from "vue";

// Sidebar visibility and extended state
const sidebarVisible = ref(true);
const filterExtended = ref(false);
const priceExtended = ref(false);
const fileTypeExtended = ref(false);
const colorExtended = ref(false);
const materialsExtended = ref(false);
const texturesExtended = ref(false);
const selectedTextures = ref([]);
const stylesExtended = ref(false);
const selectedStyles = ref([]);
const selectedPrices = ref([]);
const selectedFileTypes = ref([]);
const selectedColors = ref([]);
const selectedMaterials = ref([]);

const fileTypeCount = computed(() => selectedFileTypes.value.length);
const materialCount = computed(() => selectedMaterials.value.length);
const priceCount = computed(() => selectedPrices.value.length);
const colorCount = computed(() => selectedColors.value.length); // Fixed spelling
const textureCount = computed(() => selectedTextures.value.length); // Fixed spelling
const styleCount = computed(() => selectedStyles.value.length); // Fixed spelling





// Toggle Sidebar visibility
function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

// Toggle extended section states
// function toggleFilterExtended() {
//   filterExtended.value = !filterExtended.value;
// }
function togglePriceExtended() {
  priceExtended.value = !priceExtended.value;
}
function toggleFileTypeExtended() {
  fileTypeExtended.value = !fileTypeExtended.value;
}
function toggleColorExtended() {
  colorExtended.value = !colorExtended.value;
}
// function selectColor(color) {
//   selectedColor.value = color;
// }

function toggleMaterialsExtended() {
  materialsExtended.value = !materialsExtended.value;
}

// function selectMaterial(material) {
//   selectedMaterial.value = material; // Update the selected material
// }
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
function toggleFileTypeSelection(type) {
  const index = selectedFileTypes.value.indexOf(type);
  if (index > -1) {
    // If already selected, remove it
    selectedFileTypes.value.splice(index, 1);
  } else {
    // Otherwise, add it
    selectedFileTypes.value.push(type);
  }
}


const colorOptions = ["color1", "color2", "color3", "color4"]; // Define available colors
const materialOptions = ["Gold", "Iron", "Silver"]; // Define available materials

// Toggle color selection
function toggleColorSelection(color) {
  const index = selectedColors.value.indexOf(color);
  if (index > -1) {
    selectedColors.value.splice(index, 1); // Remove from selection
  } else {
    selectedColors.value.push(color); // Add to selection
  }
}

function toggleMaterialSelection(material) {
  const index = selectedMaterials.value.indexOf(material);
  if (index > -1) {
    // If already selected, remove it
    selectedMaterials.value.splice(index, 1);
  } else {
    // Otherwise, add it
    selectedMaterials.value.push(material);
  }
}
const appliedFilters = computed(() => {
  const filters = [];

  if (selectedPrices.value.length) {
    filters.push(...selectedPrices.value);
  }
  if (selectedColors.value.length) {
    filters.push(...selectedColors.value);
  }
  if (selectedTextures.value.length) {
    filters.push(...selectedTextures.value);
  }
  if (selectedFileTypes.value.length) {
    filters.push(...selectedFileTypes.value);
  }
  if (selectedStyles.value.length) {
    filters.push(...selectedStyles.value);
  }

  return filters;
});

const removeFilter = (filter) => {
  if (selectedPrices.value.includes(filter)) {
    selectedPrices.value.splice(selectedPrices.value.indexOf(filter), 1);
  } else if (selectedColors.value.includes(filter)) {
    selectedColors.value.splice(selectedColors.value.indexOf(filter), 1);
  } else if (selectedTextures.value.includes(filter)) {
    selectedTextures.value.splice(selectedTextures.value.indexOf(filter), 1);
  } else if (selectedFileTypes.value.includes(filter)) {
    selectedFileTypes.value.splice(selectedFileTypes.value.indexOf(filter), 1);
  } else if (selectedStyles.value.includes(filter)) {
    selectedStyles.value.splice(selectedStyles.value.indexOf(filter), 1);
  }
};
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
.Materials,
.textures {
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
      height: 2.65rem;
      width: 4.345rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      // border: 1px solid black;
      border: 1px solid #e5e1e1;
      color: black;
      border-radius: 1.5rem;
      &.selected {
        background-color: blueviolet;
        color: white;
      }
    }
  }
}
.priceselcted,.colorcount,.materailcount,.textcturecount,.stylecount{
  color: blueviolet;
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
      height: 2.625rem;
      width: 4.25rem;
      color: rgb(3, 3, 3);
      border-radius: 2.5rem;
      border: 1px solid #e5e1e1;
      display: flex;
      justify-content: center;
      align-items: center;
      &.selected {
        background-color: blueviolet;
        color: white;
      }
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
      &.selected {
        background-color: blueviolet;
        color: white; // Change text color for selected state
      }
    }
  }
}
// .material-option.selected {
//   background-color: blueviolet;
//   color: rgb(255, 255, 255);
// }

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
.filter-section{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  height: auto;
  .filter-item{
    height:2.62rem;
    width:5.5rem;
    border-radius: 2.5rem;
    background: #7343EA;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    gap:.3rem;
    img{
      margin-top:.2rem;
    }
   

  }
}
</style>
