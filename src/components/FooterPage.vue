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
      <div class="icons">
        <img src="../assets/fi_facebook.png" alt="" />
        <img src="../assets/fi_instagram.png" alt="" />
        <img src="../assets/fi_twitter.png" alt="" />
        <img src="../assets/fi_linkedin.png" alt="" />
        <img src="../assets/fi_youtube.png" alt="" />
      </div>
    </div>
    <div class="second-div">
      <div class="legal-link">Legal Links</div>
      <div class="links">
        <ul>
          <li>Delivery Policy</li>
          <li>privacy Policy</li>
          <li>About</li>
          <li>Term of services</li>
        </ul>
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
  justify-content: space-evenly;

  .first-div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 17rem;
    height: 13.375rem;
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
    .icons {
      width: 4rem;
      height: 1.5rem;
      gap: 11px;
      display: flex;
    }
  }
 
  .second-div {
    font-family: Inter;
    background-color: #ffffff;
    padding: 1rem;
    width: 17rem;
    height: 13.375rem;
    .legal-link {
      //styleName: Body Big/M;
      font-family: Inter;
      font-size: 18px;
      font-weight: 500;
      line-height: 23.4px;
      text-align: left;
      color: #484646;

    }

    .links {
      margin-top: 2.5rem;
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          font-size: 14px;
          font-weight: 400;
          line-height: 18.2px;
          color: #939090;
          margin: 0.5rem 0;

          &:hover {
            color: #7343ea;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
