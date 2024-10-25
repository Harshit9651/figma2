<template>
  <div class="main-cntainer">
    <div class="content">Breadcrumb</div>
    <div class="main-frame">
      <div class="left-item">
        <div class="left-top">
          <div class="images">
            <div class="image image1"></div>
            <div class="image"></div>
            <div class="image"></div>
            <div class="image"></div>
          </div>
          <div class="main-image"></div>
        </div>
        <div class="left-bottom">
          <div class="logo-share">
            <div class="foyr"><img src="../assets/Frame 130.png" alt="" /></div>
            <div class="share"><img src="../assets/Fav (1).png" alt="" /></div>
          </div>
          <div class="specification">
            White wooden arm chair with golden legs and some fabric
          </div>
          <div class="related-tages"></div>
        </div>
      </div>
      <div class="right-item"></div>
    </div>
    <FooterPage></FooterPage>
  </div>
</template>
<script></script>
<script setup></script>
<style lang="scss" scoped>
.main-container {
  margin-left: 2rem;
  margin-right: 2rem;
}
.content {
  margin: 2rem;
  margin-left: 9%;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
}
.main-frame {
  margin: 2rem;
  margin-left: 9%;
  height: 54.437rem;
  width: 77.54rem;
  border: 1px solid black;
  .left-item {
    width: 51.118rem;
    height: 54.437rem;
    gap: 36px;
    opacity: 0px;
    border: 1px solid black;
    .left-top {
      width: 51.118rem;
      height: 37.5rem;
      border: 1px solid black;
      display: flex;
      .images {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: 1px solid black;
        gap: 1rem;
        .image {
          width: 81px;
          height: 81px;
          gap: 0px;
          border-radius: 12px;
          border: 1px solid black;
        }
      }
      .main-image {
        margin-left: 1.1rem;
        width: 714px;
        height: 600px;
        gap: 0px;
        border-radius: 16px;
        opacity: 0px;
        border: 1px solid black;
      }
    }
    .left-bottom {
      display: flex;
      flex-direction: column;

      .logo-share {
        margin-top: 0.5rem;
        width: 51.118rem;
        height: 3.5625rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;

        .share {
          margin-right: 0.5rem;
          height: 2rem;
          width: 2rem;
        }
      }
      .specification {
        margin-top: 3rem;
        margin-bottom: 3rem;
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 23.4px;
        text-align: left;
        color: #484646;
      }
      .related-tages {
        width: 51.118rem;
        height: 5.1875rem;
        gap: 16px;
        opacity: 0px;
        border: 1px solid black;
      }
    }
  }
}
</style>
