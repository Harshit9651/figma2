<template>
  <div class="main">
    <NavBar></NavBar>
    <div class="tabular-quick-filter">
      <div class="tabular">
        <img src="../assets/king_bed.png" alt="" />
        <div class="tabular-data">Furniture</div>
      </div>
      <div class="tabular">
        <img src="../assets/light.png" alt="" />
        <div class="tabular-data">Lighting</div>
      </div>
      <div class="tabular">
        <img src="../assets/texture.png" alt="" />
        <div class="tabular-data">Textures</div>
      </div>
      <div class="tabular">
        <img src="../assets/devices.png" alt="" />
        <div class="tabular-data">Metarials</div>
      </div>
      <div class="tabular">
        <img src="../assets/tonality.png" alt="" />
        <div class="tabular-data">Technology</div>
      </div>
    </div>
    <div class="result-slidbar-section">
      <!-- <div class="slidbar">
        <div class="Filter">
          <p id="filters">Filters</p>
          <button><img src="../assets/Vector (1).png" alt="" /></button>
        </div>
        <div class="hr"><hr /></div>
        <div class="all-filters">
          <div class="header">
            <h4>Applied filter</h4>
            <div class="right">
              <p>clear all</p>
              <button><img src="../assets/close.png" alt="" /></button>
            </div>
          </div>
          <div class="filters">
            <div class="filter">
              gray <button><img src="../assets/close.png" alt="" /></button>
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              gray <img src="../assets/close.png" alt="" />
            </div>
            <div class="filter">
              loka pojoa <img src="../assets/close.png" alt="" />
            </div>
          </div>
        </div>

        <div class="price">
          <div class="header">
            <div class="left">
              <img src="../assets/attach_money.png" alt="" />
              <h4>Price</h4>
            </div>
            <div class="right">
              <img src="../assets/expand_less.png" alt="" />
            </div>
          </div>
          <div class="main-content">
            <button
              class="pricebutton"
              :class="{ active: activePrice === 'free' }"
              @click="setActivePrice('free')"
            >
              Free
            </button>
            <button
              class="pricebutton"
              :class="{ active: activePrice === 'paid' }"
              @click="setActivePrice('paid')"
            >
              Paid
            </button>
          </div>
        </div>
      </div> -->
      <SlidBar v-if="isslidbar" />
      <div class="result">
        <div class="allModel">
          <div class="all_model">All Models (1245)</div>
          <div class="filter">
            <img src="../assets/filter_list.png" alt="" />
            <div class="mst_popular">Most Popular</div>
          </div>
        </div>
        <button>
          <div class="filter_data">
          <img src="../assets/filter_alt.png" alt="" />
          <div class="filter-text">Filters</div>
        </div>
        </button>
      

        <div class="cards">
          <div v-for="product in products" :key="product.id" class="card">
            <img :src="product.image" :alt="product.title" />
            <div class="card-content">
              <div class="title">{{ product.title }}</div>
              <div class="formates">{{ product.formats }}</div>
            </div>

            <div v-if="product.off" class="off">
              <img src="../assets/local_offer.png" alt="Discount" />
              {{ product.off }}
            </div>
            <div v-if="product.rate" class="off-rate">
              <h6 id="rate">{{ product.rate }}</h6>
            </div>
            <div class="cart"><img src="../assets/Frame 54.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<script setup>
import { useProductsStore } from "../store/image";
import { computed, ref } from "vue";
const isslidbar = ref(true);

const productsStore = useProductsStore(); // Initialize the store first
const products = computed(() => productsStore.getAllProducts); // Now you can access products

const activePrice = ref("free");
function setActivePrice(type) {
  activePrice.value = type;
}
</script>

<script>
import NavBar from "./NavBar.vue";
import SlidBar from "./SlidBar.vue";

export default {
  name: "HomePage",
  components: NavBar,
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
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
    .tabular {
      height: 100%;
      width: 7.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 0px 20px 0px;
      gap: 8px;
      border: 0px 0px 1px 0px;
      opacity: 0px;

      .tabular-data {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 18.2px;
        text-align: left;
        color: #939090;
      }
    }
  }

  .result-slidbar-section {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;

    .result {
      width: 80%;
      background-color: rgb(255, 255, 255);
      height: 100vh;
      overflow-y: auto;

      .allModel {
        background-color: #fcfcfc;
        display: flex;
        justify-content: space-between;
        height: 2.35rem;
        align-items: center;
        margin-left: 1rem;
        margin-right: 2rem;
        .all_model {
          //styleName: Body Big/M;
          font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          line-height: 23.4px;
          text-align: left;
          color: #484646;
        }
        .filter {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          .mst_popular {
            //styleName: Body Medium/M;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 18.2px;
            text-align: left;
            color: #484646;
          }
        }
      }
      button{
all:unset;

      
      .filter_data {
        margin-left:1rem;
        width: 6.34rem;
        height: 2.5rem; // Adjusted height to ensure sufficient space for content
        padding: 0; // Removed padding for the container to avoid extra space
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
          all: unset; // Resets all properties
          cursor: pointer;
          padding: 8px;
          .filter-text {
            display: flex;
          }
        }
      }
    }

      .cards {
        background-color: #ffffff;
        margin-left: 1rem;
        margin-right: 2rem;
        margin-top: 1rem;
        height: 83vh;
        display: flex;
        flex-wrap: wrap;
        gap: 1.1rem;
        row-gap: 0.5rem;

        .card {
          background-color: rgb(255, 255, 255);
          height: 13.245rem;
          width: 16.34rem;
          box-shadow: 0px 4px 20px 0px #0000001f;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          border-radius: 0.6rem;

          img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            border-radius: 0.6rem 0.6rem 0rem 0rem;
          }
          .cart {
            height: 2.5rem;
            width: 2.5rem;
            position: absolute;
            margin-left: 80%;
            margin-top: 64%;
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
            }

            .formates {
              justify-content: flex-start;
              // width: 25px;
              // height: 16px;
              display: flex;
              flex-flow: row nowrap;
              gap: 0px;
              opacity: 0px;
              font-family: Inter;
              font-size: 12px;
              font-weight: 400;
              line-height: 15.6px;
              // overflow: hidden;
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
      }
    }
  }
}
</style>
