<template>
  <div class="main">
    <div v-if="isOffer" class="avil-offer">
      <p>Avail 70% off offer</p>
      <div class="cros">
        <button @click="closeOffer">
          <img src="../assets/close.png" alt="Close Offer" />
        </button>
      </div>
    </div>
    <NavBar></NavBar>
    <div class="frame24">
      <div class="inner-div">
        <div class="first-div">5467 perfect 3D models for interior Design</div>
        <div class="second-div">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ut
          ad! Corporis sed in debitis beatae autem id quis praesentium?
        </div>
        <div class="search-box">
          <div class="input-with-dropdown">
            <select class="dropdown">
              <option value="all" class="all">ALL</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <input type="text" placeholder="Search 5764 3D Models.." />
          </div>
        </div>
      </div>
    </div>
    <div class="tabular-quick-filter">
      <div
        class="tabular"
        :class="{ selected: selectedTab === 'Furniture' }"
        @click="selectTab('Furniture')"
      >
        <img src="../assets/king_bed.png" alt="" />
        <div class="tabular-data">Furniture</div>
      </div>
      <div
        class="tabular"
        :class="{ selected: selectedTab === 'Lighting' }"
        @click="selectTab('Lighting')"
      >
        <img src="../assets/light.png" alt="" />
        <div class="tabular-data">Lighting</div>
      </div>
      <div
        class="tabular"
        :class="{ selected: selectedTab === 'Textures' }"
        @click="selectTab('Textures')"
      >
        <img src="../assets/texture.png" alt="" />
        <div class="tabular-data">Textures</div>
      </div>
      <div
        class="tabular"
        :class="{ selected: selectedTab === 'Materials' }"
        @click="selectTab('Materials')"
      >
        <img src="../assets/devices.png" alt="" />
        <div class="tabular-data">Materials</div>
      </div>
      <div
        class="tabular"
        :class="{ selected: selectedTab === 'Technology' }"
        @click="selectTab('Technology')"
      >
        <img src="../assets/tonality.png" alt="" />
        <div class="tabular-data">Technology</div>
      </div>
    </div>

    <div class="result-slidbar-section">
      <div v-if="sidebarVisible" class="slidbar">
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

        <div class="price-section">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/attach_money.png" alt="Price" />
              <span
                >Price
                <div v-if="selectedPrices.length > 0" class="priceselcted">
                  ({{ priceCount }})
                </div></span
              >
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

        <div v-if="selectedPrices.length > 0"><hr /></div>

        <!-- File Type Section -->
        <div class="file-type-section">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/insert_drive_file.png" alt="" />
              <span
                >File Type
                <div class="file-selected" v-if="selectedFileTypes.length > 0">
                  ({{ fileTypeCount }})
                </div></span
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

        <div v-if="selectedFileTypes.length > 0"><hr /></div>

        <!-- Color Section -->
        <div class="color-section">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/color_lens.png" alt="" />
              <span
                >Color
                <div v-if="selectedColors.length > 0" class="colorcount">
                  ({{ colorCount }})
                </div></span
              >
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
        <div v-if="selectedColors.length > 0"><hr /></div>

        <!-- Materials Section -->

        <div class="materials">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/tonality.png" alt="" />
              <span
                >Materials
                <div v-if="selectedMaterials.length > 0" class="materailcount">
                  ({{ materialCount }})
                </div></span
              >
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

        <div v-if="selectedMaterials.length > 0"><hr /></div>

        <div class="textures">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/texture.png" alt="" />
              <span
                >Textures
                <div v-if="selectedTextures.length > 0" class="textcturecount">
                  ({{ textureCount }})
                </div></span
              >
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

        <div v-if="selectedTextures.length > 0"><hr /></div>

        <div class="styles">
          <div class="filter-header">
            <div class="left">
              <img src="../assets/interests.png" alt="" />
              <span
                >Styles
                <div v-if="selectedStyles.length > 0" class="stylecount">
                  ({{ styleCount }})
                </div></span
              >
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

      <div :class="['result', { 'full-width': !sidebarVisible }]">
        <div class="allModel">
          <div class="all_model">All Models (1245)</div>
          <div class="filter">
            <button @click="toggleDropdown">
              <img src="../assets/filter_list.png" alt="" />
            </button>
            <div class="mst_popular">Most Popular</div>
          </div>
          <!-- -->
          <div v-if="dropdownVisible" class="dropdown">
            <div class="dropdown-item" @click="selectOption('mostPopular')">
              Most Popular
            </div>
            <div class="dropdown-item" @click="selectOption('discount')">
              Discount
            </div>
            <div class="dropdown-item" @click="selectOption('priceLowToHigh')">
              Price Low to High
            </div>
            <div class="dropdown-item" @click="selectOption('priceHighToLow')">
              Price High to Low
            </div>
          </div>
        </div>
        <!-- v-if="isfilter" -->
        <button @click="clickfilter">
          <div v-if="isfilter" class="filter_data">
            <img src="../assets/filter_alt.png" alt="" />
            <div class="filter-text">Filters</div>
          </div>
        </button>

        <div class="cards">
          <div
            v-for="product in products"
            :key="product.id"
            class="card"
            :class="{ active: selectedProduct === product.id }"
            @mouseover="
              onMouseOver(product.id);
              openOverlay(product);
            "
            @mouseleave="
              onMouseLeave;
              closeOverlay();
            "
          >
            <div class="image-wrapper">
              <img
                :src="product.images[currentImageIndex(product.id)]"
                :alt="product.title"
                @click="debouncedNavigateToProduct(product.id)"
              />
              <div
                v-if="overlayVisible && selectedProduct === product.id"
                class="image-overlay"
              >
                <div class="fav-price">
                  <div class="price-tag">
                    <h6 id="rate">$ 12</h6>
                  </div>
                  <div class="fav">
                    <button @click="addwhilist">
                      <img src="../assets/Fav.png" alt="" />
                    </button>
                  </div>
                </div>
                <div class="arrows">
                  <!-- Arrow buttons go here -->
                  <div @click="prevImage(product.id)" class="left-arrow">
                    <img src="../assets/Arrow.png" alt="" />
                  </div>
                  <div @click="nextImage(product.id)" class="right-arrow">
                    <img src="../assets/Arrow (1).png" alt="" />
                  </div>
                </div>
                <!-- <div class="image-scroll"></div> -->
                <div class="circle-indicators">
                  <div
                    v-for="index in product.images.length"
                    :key="index"
                    class="circle"
                    :class="{
                      active: currentImageIndex(product.id) === index - 1,
                    }"
                    @click="currentImageIndexMap[product.id] = index - 1"
                  ></div>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div class="title">{{ product.title }}</div>
              <div class="formatss">{{ product.formats }}</div>
            </div>
            <div
              v-if="product.off && !(hoveredProduct === product.id)"
              class="off"
            >
              <img src="../assets/local_offer.png" alt="Discount" />
              {{ product.off }}
            </div>
            <div
              v-if="product.rate && hoveredProduct !== product.id"
              class="off-rate"
            >
              <h6 id="rate">{{ product.rate }}</h6>
            </div>
            <div class="cart">
              <button @click="showcartpopup">
                <img src="../assets/Frame 54.png" alt="" />
              </button>
            </div>
          </div>

          <div v-if="overlayVisible" class="overlay" @click="closeOverlay">
            <div class="overlay-content">
              <img :src="selectedProductData.images[0]" alt="" />
              <div class="overlay-title">{{ selectedProductData.title }}</div>
              <div class="other">
                <div v-if="selectedProductData.off" class="offer">
                  <img src="../assets/local_offer.png" alt="" />{{
                    selectedProductData.off
                  }}
                </div>
                <div v-if="selectedProductData.rate" class="selected-rate">
                  {{ selectedProductData.rate }}
                </div>
                <div class="line"></div>
                <div class="img1">
                  <img src="../assets/3ds logo.png" alt="" />
                </div>
                <div class="img2">
                  <img src="../assets/file_type_fbx logo.png" alt="" />
                </div>
                <div class="line"></div>
                <div v-if="selectedProductData.material" class="materail">
                  {{ selectedProductData.material }}
                </div>
                <div class="line"></div>
                <div class="size">89 MB</div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <button @click="currentPage--" :disabled="currentPage === 1">
              Previous
            </button>
            <span
              >Page {{ currentPage }} of
              {{ Math.ceil(products.length / itemsPerPage) }}</span
            >
            <button
              @click="currentPage++"
              :disabled="
                currentPage >= Math.ceil(products.length / itemsPerPage)
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showcartnotification" class="add-cart-notification">
      <div class="icon"><img src="../assets/Icon.png" alt="" /></div>
      <div class="content">
        <div class="main-content">Item added to your cart!</div>
        <div class="lower-content">Proceed to checkout</div>
      </div>
      <div class="cros">
        <button @click="hidecartnotification">
          <img src="../assets/close.png" alt="" />
        </button>
      </div>
    </div>
    <div v-if="showwhilist" class="add-favriout">
      <div class="icon"><img src="../assets/Fav.png" alt="" /></div>
      <div class="content">
        <div class="main-content">Item added to your wishlist!</div>
        <div class="lower-content">
          Check out your wishlist from the Top Bar
        </div>
      </div>
      <div class="cros">
        <button @click="hidewhilist">
          <img src="../assets/close.png" alt="" />
        </button>
      </div>
    </div>

    <FooterPage></FooterPage>
  </div>
</template>
<script></script>
<script setup>
import { useProductsStore } from "../store/image";
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const debounceTimeout = ref(null);
const isslidbar = ref(true);
const isfilter = ref(false);
const dropdownVisible = ref(false);
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
const selectedProduct = ref(null);
const overlayVisible = ref(false);
const selectedProductData = ref({});
const selectedTab = ref(null);
const showcartnotification = ref(false);
const showwhilist = ref(false);
const hoveredProduct = ref(null);
const currentImageIndexMap = ref({});
const currentPage = ref(1);
const itemsPerPage = 12;
const products = ref([]);

// Compute paginated products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

function selectTab(tab) {
  selectedTab.value = tab;
}

const fileTypeCount = computed(() => selectedFileTypes.value.length);
const materialCount = computed(() => selectedMaterials.value.length);
const priceCount = computed(() => selectedPrices.value.length);
const colorCount = computed(() => selectedColors.value.length);
const textureCount = computed(() => selectedTextures.value.length);
const styleCount = computed(() => selectedStyles.value.length);

const applyFilters = async () => {
  try {
    const filters = {
      prices: selectedPrices.value,
      colors: selectedColors.value,
      textures: selectedTextures.value,
      fileTypes: selectedFileTypes.value,
      styles: selectedStyles.value,
      Material: selectedMaterials.value,
    };

    const response = await axios.post(
      "http://localhost:3000/products/filter",
      filters
    );
    console.log("hello filters is called");
    products.value = response.data.products;
  } catch (error) {
    console.error("Error applying filters:", error);
  }
};

onMounted(async () => {
  await fetchProducts();
});
const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/products/allproducts"
    );
    products.value = response.data.products;
    console.log("response is ok ....");
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const activePrice = ref("free");
const isOffer = ref(true);
function closeOffer() {
  isOffer.value = false;
}
function setActivePrice(type) {
  activePrice.value = type;
}
function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}
function clickfilter() {
  sidebarVisible.value = true;
  isfilter.value = false;
}

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
  isfilter.value = true;
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

function toggleMaterialsExtended() {
  materialsExtended.value = !materialsExtended.value;
}

function toggleTexturesExtended() {
  texturesExtended.value = !texturesExtended.value;
}

function selectTexture(texture) {
  const index = selectedTextures.value.indexOf(texture);
  if (index > -1) {
    selectedTextures.value.splice(index, 1);
  } else {
    selectedTextures.value.push(texture);
  }
}

function toggleStylesExtended() {
  stylesExtended.value = !stylesExtended.value;
}

function selectStyle(style) {
  const index = selectedStyles.value.indexOf(style);
  if (index > -1) {
    selectedStyles.value.splice(index, 1);
  } else {
    selectedStyles.value.push(style);
  }
}

function togglePriceSelection(type) {
  const index = selectedPrices.value.indexOf(type);
  if (index > -1) {
    selectedPrices.value.splice(index, 1);
  } else {
    selectedPrices.value.push(type);
  }
  applyFilters();
}

function toggleFileTypeSelection(type) {
  const index = selectedFileTypes.value.indexOf(type);
  if (index > -1) {
    selectedFileTypes.value.splice(index, 1);
  } else {
    selectedFileTypes.value.push(type);
  }
  applyFilters();
}

const colorOptions = ["Black", "Gray", "slati", "shad"];
const materialOptions = ["Wood", "Fabric", "Metal" ,"Plastic"];

function toggleColorSelection(color) {
  const index = selectedColors.value.indexOf(color);
  if (index > -1) {
    selectedColors.value.splice(index, 1);
  } else {
    selectedColors.value.push(color);
  }
  applyFilters();
}

function toggleMaterialSelection(material) {
  const index = selectedMaterials.value.indexOf(material);
  if (index > -1) {
    selectedMaterials.value.splice(index, 1);
  } else {
    selectedMaterials.value.push(material);
  }
  applyFilters();
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
  if(selectedMaterials.value.length){
    filters.push(...selectedMaterials.value)
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
 else if (selectedMaterials.value.includes(filter)) {
    selectedMaterials.value.splice(selectedMaterials.value.indexOf(filter), 1);
  }
  debouncedApplyFilters();
};

const openOverlay = (product) => {
  selectedProduct.value = product.id;
  selectedProductData.value = product;
  overlayVisible.value = true;
};

const closeOverlay = () => {
  overlayVisible.value = false;
  selectedProduct.value = null;
};
function hidecartnotification() {
  showcartnotification.value = false;
}
function showcartpopup() {
  showcartnotification.value = true;
}
function hidewhilist() {
  showwhilist.value = false;
}
function addwhilist() {
  showwhilist.value = true;
}
function onMouseOver(productId) {
  hoveredProduct.value = productId;
}

function onMouseLeave() {
  hoveredProduct.value = null;
}
const currentImageIndex = (productId) => {
  return currentImageIndexMap.value[productId] || 0; // default to the first image
};

const nextImage = (productId) => {
  const product = products.value.find((p) => p.id === productId);
  const currentIndex = currentImageIndexMap.value[productId] || 0;
  currentImageIndexMap.value[productId] =
    (currentIndex + 1) % product.images.length; // loop back to start
};

const prevImage = (productId) => {
  const product = products.value.find((p) => p.id === productId);
  const currentIndex = currentImageIndexMap.value[productId] || 0;
  currentImageIndexMap.value[productId] =
    (currentIndex - 1 + product.images.length) % product.images.length;
};

// Debounce function
const debounce = (func, delay) => {
  return (...args) => {
    if (debounceTimeout.value) clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const navigateToProduct = (productId) => {
  console.log("Navigating to product with ID:", productId);
  router.push({ name: "imageDetail", params: { id: productId } }); // Ensure name is 'imageDetail'
};
// Debounced version of the navigation function
const debouncedNavigateToProduct = debounce(navigateToProduct, 300);
const debouncedApplyFilters = debounce(applyFilters, 300);
</script>

<script>
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    FooterPage,
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  position: relative;
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .tabular-quick-filter {
    height: 5.625rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    box-shadow: 0px 4px 20px 0px #0000001f;
    border-bottom: 1px solid #e0e0e0;
  }

  .tabular {
    height: 100%;
    width: 7.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 8px;
    border: 0;
    position: relative; /* Position relative for the line */
  }

  .tabular-data {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    text-align: left;
    color: #939090;
  }

  /* Style for selected tab */
  .tabular.selected::after {
    content: "";
    position: absolute;
    bottom: -2px; /* Position the line below */
    left: 0;
    right: 0;
    height: 2px; /* Line height */
    background-color: blue; /* Line color */
  }

  .result-slidbar-section {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;

    .result {
      position: relative;
      width: 80%;
      background-color: rgb(255, 255, 255);
      height: 100vh;
      overflow-y: auto;
      padding: 0 2rem; /* Add padding for left and right gaps */

      .allModel {
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        height: 2.35rem;
        align-items: center;
        margin-left: 1rem;
        margin-right: 2rem;
        margin-top: 1rem;

        .all_model {
          //styleName: Body Big/M;
          font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          line-height: 23.4px;
          text-align: left;
          color: #484646;
          .result.full-width {
            // margin-left: 10rem;
            background-color: #313030; /* Updated margin */
          }
        }
        .filter {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-right: 5rem;
          .result.full-width {
            // margin-right: 10rem;
          }

          button {
            all: unset;
            img {
              margin-top: 0.3rem;
              height: 1.3rem;
              width: 1.3rem;
            }
          }

          .mst_popular {
            //styleName: Body Medium/M;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 18.2px;
            text-align: left;
            color: #484646;
            &:hover {
              color: #7343ea;
              text-decoration: underline;
            }
          }
        }
      }
      button {
        all: unset;

        .filter_data {
          margin-left: 1rem;
          width: 6.34rem;
          height: 2.5rem;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 40px;
          border: 1px solid #7343ea;
          background: #f1ecfd;
          color: #7343ea;
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            all: unset;
            cursor: pointer;
            padding: 8px;
            .filter-text {
              display: flex;
            }
          }
        }
      }

      .dropdown {
        position: absolute;
        top: 8%;
        right: 1.9%;
        width: 9.5rem;
        height: auto;
        max-height: 270px;
        overflow-y: auto;
        background-color: white;
        border-radius: 12px;
        opacity: 1;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12);
        z-index: 1000;
        gap: 0;

        .dropdown-item {
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 18.2px;
          text-align: left;
          color: #484646;
          padding: 0.75rem 1rem;

          &:hover {
            background-color: #f1f1f1;
            color: #7343ea;
          }
        }
      }

      .cards {
        background-color: #ffffff;

        margin-top: 1rem;
        height: 83vh;
        display: flex;
        flex-wrap: wrap;
        gap: 1.1rem;
        row-gap: 0.5rem;
        padding: 2rem;

        .card {
          background-color: rgb(255, 255, 255);
          height: 13.245rem;
          width: 18rem;
          height: 13.653rem;
          width: 18.3125rem;
          box-shadow: 0px 4px 20px 0px #0000001f;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          border-radius: 0.6rem;
          &.active {
            border: 2px solid blue;
            position: relative;
            overflow: hidden;
          }
          .image-wrapper {
            width: 100%;
            height: 70%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 0.6rem 0.6rem 0rem 0rem;
            }
            .image-overlay {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.75) 100%
              );
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
              opacity: 1;
              transition: opacity 0.3s ease;
              .fav-price {
                margin-top: 0.5rem;
                display: flex;
                justify-content: flex-end;
                gap: 0.5rem;
                .price-tag {
                  height: 2.5rem;
                  width: 4rem;
                  border-radius: 2rem;
                  color: #ffab40;
                  background-color: white;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: center;
                  font-size: 16px;
                  #rate {
                    font-size: 13px;
                  }
                }
                button {
                  all:unset .fav {
                    margin-right: 0.5rem img {
                      height: 2.5rem;
                      width: 2.5rem;
                    }
                  }
                }
              }
              .arrows {
                margin-top: 9%;
                display: flex;
                justify-content: space-between;

                .left-arrow,
                .right-arrow {
                  height: 2rem;
                  width: 2rem;
                }
              }
              .circle-indicators {
                margin-bottom: 0.5rem;
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 0.5rem;
              }

              .circle {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: lightgray; /* Default color */
                cursor: pointer;
                transition: background-color 0.3s ease;
              }

              .circle.active {
                background-color: white; /* Active color */
              }
            }
          }

          .cart {
            height: 2.5rem;
            width: 2.5rem;
            position: absolute;
            margin-left: 80%;
            margin-top: 64%;
            button {
              all: unset;
            }
          }

          .card-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.5rem;
            height: 20%;
            overflow: hidden;

            .title {
              height: 1rem;
              width: 14.35rem;
              font-family: Inter;
              font-size: 12px;
              font-weight: 500;
              line-height: 15.6px;
              text-align: left;

              overflow: hidden;
              color: #313030;
            }

            .formatss {
              justify-content: flex-start;
              font-family: Inter;
              font-size: 12px;
              font-weight: 400;
              line-height: 15.6px;
              text-align: left;
              color: #adaaaa;
            }
          }
          .off {
            position: absolute;
            margin-top: 3%;
            margin-left: 3%;
            height: 2.5rem;
            width: 6rem;
            border-radius: 2rem;
            color: #06c270;
            background-color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            //styleName: Body Medium/SB;
            font-family: Inter;
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            text-align: left;

            img {
              height: 1rem;
              width: 1rem;
            }
          }
          .off-rate {
            position: absolute;
            margin-top: 3%;
            margin-left: 70%;
            height: 2.5rem;
            width: 4rem;
            border-radius: 2rem;
            color: #ffab40;
            background-color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 16px;
            #rate {
              font-size: 13px;
            }
          }
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;

          .overlay-content {
            height: 400px;
            width: 500px;
            background: rgb(255, 255, 255);

            border-radius: 0.6rem;
            text-align: center;

            img {
              width: 100%;
              height: 70%;
              object-fit: cover;
              border-radius: 0.6rem 0.6rem 0rem 0rem;
            }

            .overlay-title {
              //styleName: Body Medium/M;
              font-family: Inter;
              font-size: 14px;
              font-weight: 500;
              line-height: 18.2px;
              text-align: left;
              margin-left: 1rem;
              margin-top: 1rem;
            }

            .other {
              margin-left: 1rem;
              margin-top: 1rem;
              display: flex;
              background-color: #ffffff;

              .offer {
                width: 6rem;
                height: 3rem;
                opacity: 0px;
                background: #f0fbf6;
                border-radius: 40px;
                display: flex;
                justify-content: space-between;
                align-content: center;
                height: 2.6rem;
                width: 6rem;
                border-radius: 2rem;
                color: #06c270;
                background-color: #f0fbf6;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                //styleName: Body Medium/SB;
                font-family: Inter;
                font-size: 14px;
                font-weight: 600;
                line-height: 14px;
                text-align: left;

                img {
                  height: 20px;
                  width: 20px;
                }
              }
              .selected-rate {
                margin-left: 0.5rem;
                height: 2.6rem;
                width: 5rem;
                border-radius: 2rem;
                color: #06c270;
                color: #ffab40;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                background-color: #fffaf4;
                //styleName: Body Medium/SB;
                font-family: Inter;
                font-size: 14px;
                font-weight: 600;
                line-height: 14px;
                text-align: left;
              }
              .img1,
              .img2 {
                margin-top: 0.5rem;
                margin-left: 0.5rem;
                height: 30px;
                width: 30px;
              }
              .line {
              }
              .materail {
                margin-left: 0.5rem;
                margin-top: 0.7rem;
                //styleName: Body Small/R;
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                line-height: 15.6px;
                text-align: left;
              }
              .size {
                //styleName: Body Small/R;
                margin-top: 0.7rem;
                margin-left: 0.5rem;
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                line-height: 15.6px;
                text-align: left;
                margin-left: 0.5rem;
                color: #484646;
              }
              // .line {
              //   width: 40px;
              //   height: 1px;
              //   background-color: black;

              //   opacity: 1;
              //   transform: rotate(90deg);
              // }

              .overlay-details {
                font-size: 16px;
                margin-bottom: 1rem;
              }

              .overlay-rate {
                font-size: 18px;
                color: #ffab40;
              }
            }
          }
        }
      }

      &.full-width {
        width: 100%;
      }
    }
  }

  .slidbar {
    display: flex;
    flex-direction: column;
    width: 25%;
    background-color: #ffffff;

    padding: 1rem;
    padding-left: 3rem;
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
    // font-size: 1.2rem;
    //styleName: Body Big/M;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 23.4px;
    // text-align: left;
  }

  .section {
    margin: 1rem 0; // Use a common class for margins
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
    @extend .section; // Equal gap between sections
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
        align-items: center;
      }

      .price-selected {
        color: blueviolet;
        margin-left: 0.5rem;
      }
    }

    .price-button {
      display: flex;
      gap: 1rem;
      align-items: center;

      .price-option {
        margin: 0.5rem 0;
        height: 2.65rem;
        width: 4.345rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: black;
        border: 1px solid #e5e1e1;
        border-radius: 1.5rem;

        &.selected {
          background-color: blueviolet;
          color: white;
        }
      }
    }
  }

  .priceselcted,
  .colorcount,
  .materailcount,
  .textcturecount,
  .stylecount {
    margin-left: 0.3rem;
    color: blueviolet;
  }

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
        margin-left: 0.5rem;
      }
    }

    .file-options {
      display: flex;
      gap: 1rem;
      align-items: center;

      .file-option {
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
    margin-top: 1rem;
    margin-bottom: 1rem;
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
          color: white;
        }
      }
    }
  }

  .textures {
    margin-top: 1rem;
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
        background-color: #fff;
      }

      .selected {
        background-color: blueviolet;
        color: white;
      }
    }
  }

  .styles {
    margin-top: 1rem;
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
        background-color: #fff;
      }

      .selected {
        background-color: blueviolet;
        color: white;
      }
    }
  }

  .filter-section {
    .filter-header {
      display: flex;
      align-items: center;
    }

    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    height: auto;

    .filter-item {
      height: 2.62rem;
      width: 5.5rem;
      border-radius: 2.5rem;
      background: #7343ea;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      gap: 0.3rem;

      img {
        margin-top: 0.2rem;
      }
    }
  }
  .add-cart-notification {
    position: absolute;
    width: 23rem;
    height: 4rem;
    padding: 16px 12px 16px 16px;
    gap: 12px;
    border-radius: 16px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: #ffffff;
    border: 1px solid #e6f9f1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 8%;
    left: 49%;
    transform: translateX(-50%);

    .icon {
      img {
        height: 2.625rem;
        width: 2.625rem;
      }
    }
    .content {
      padding: 0.5rem;
      width: 17.85rem;
      height: 2.375rem;
      gap: 8px;
      opacity: 0px;
      display: flex;
      flex-direction: column;

      .main-content {
        //styleName: Body Medium/SB;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        text-align: left;
        color: #484646;
      }
      .lower-content {
        //styleName: Body Small/R;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 15.6px;
        text-align: left;
        color: #484646;
      }
    }
    .cros {
      // margin-top:1rem;
      margin-right: 1rem;
      button {
        all: unset;
        img {
          height: 1.3rem;
          width: 1.3rem;
        }
      }
    }
  }

  .add-favriout {
    position: absolute;
    width: 23rem;
    height: 4rem;
    padding: 16px 12px 16px 16px;
    gap: 12px;
    border-radius: 16px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: #ffffff;
    border: 1px solid #e6f9f1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 8%;
    left: 49%;
    transform: translateX(-50%);

    .icon {
      img {
        height: 2.625rem;
        width: 2.625rem;
      }
    }
    .content {
      padding: 0.5rem;
      width: 17.85rem;
      height: 2.375rem;
      gap: 8px;
      opacity: 0px;
      display: flex;
      flex-direction: column;

      .main-content {
        //styleName: Body Medium/SB;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        text-align: left;
        color: #484646;
      }
      .lower-content {
        //styleName: Body Small/R;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 15.6px;
        text-align: left;
        color: #484646;
      }
    }
    .cros {
      // margin-top:1rem;
      margin-right: 1rem;
      button {
        all: unset;
        img {
          height: 1.3rem;
          width: 1.3rem;
        }
      }
    }
  }
  .arrow {
    height: 25px;
    width: 25px;
    background-color: #06c270;
  }
}

.frame24 {
  margin: 0%;
  height: 18.235rem;
  background: #7343ea;
  background-image: url("../assets/Pattern.png");
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .inner-div {
    height: 90%;
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .first-div {
      //styleName: H4/SB;
      margin-top: 0.5rem;
      font-family: Inter;
      font-size: 20px;
      font-weight: 600;
      line-height: 31.2px;
      text-align: left;
      color: #ffffff;
    }
    .second-div {
      //styleName: Body Big/R;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 23.4px;
      text-align: center;
      color: #ffffff;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
    }

    .search-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 100%;

      .input-with-dropdown {
        position: relative;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        .all {
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 19.32px;
          text-align: center;
          color: #605e5e;
        }
      }

      select {
        width: 5rem;
        height: 100%;
        border: 1px solid #ccc;
        background-color: white;
        border-radius: 32px 0 0 32px;
        font-size: 16px;
        padding: 10px;
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
      }

      input {
        width: calc(100% - 120px);
        height: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 0 32px 32px 0;
        outline: none;
        box-sizing: border-box;
      }
    }

    .searchs {
      margin-top: 0.7rem;
      width: 70%;
      height: 2.8rem;
      display: flex;
      // justify-content: space-evenly;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      margin-right: 1rem;
    }

    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      color: black;
      background-color: white;
      border: 1px solid #ccc;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: pointer;
      height: 1.3rem;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #f0f0f0;
        border-color: #1b2128;
        color: #007bff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
.avil-offer {
  width: 100%;
  height: 2.65rem;
  background: #dcf763;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  //styleName: Body Medium/M;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  text-align: left;

  .cros {
    position: absolute;
    margin-left: 97%;
    margin-top: 1%;
    button {
      all: unset;
      display: inline-block;
    }
  }
}
</style>
