<template>
  <div class="footer">
    <div class="first-div">
      <div class="img-section">
        <img src="../assets/image 14.png" alt="" />
        <div class="line"></div>
        <div class="text">3D Models</div>
      </div>
      <div class="about">
        Foyr is an online interior design software that allows users to create
        3D floor plans and interior designs for homes and offices.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 25rem;
  padding: 100px 0px 0px 0px;
  gap: 101px;
  opacity: 0px;
  background: #f4f0ef;
  display: flex;
  .first-div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 17rem;
    height: 14.375rem;
    gap: 24px;
    opacity: 0px;
    .img-section {
      display: flex;
      gap: 0.5rem;
      img {
        width: 126px;
        height: 54px;
        gap: 0px;
        opacity: 0px;
      }
      .line {
        width: 2px;
        height: 50px;
        border: 1px solid #e5e1e1;
        opacity: 1;
        margin-top: 0.5rem;
      }
      .text {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        //styleName: H4/M;
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 31.2px;
        text-align: left;
        color: #313030;
      }
    }
    .about {
      //styleName: Body Medium/R;
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 18.2px;
      text-align: left;
      color: #939090;

    }
  }
}
</style>
