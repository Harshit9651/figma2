<template>
  <div class="main-cntainer">
    <div class="content">Breadcrumb</div>
    <div class="main-frame">
      <div class="left-item">
        <div class="left-top">
          <div class="images">
            <div class="image image1">
              <img src="../assets/image 5.png" alt="" />
            </div>
            <div class="image"><img src="../assets/image 5.png" alt="" /></div>
            <div class="image"><img src="../assets/image 5.png" alt="" /></div>
            <div class="image"><img src="../assets/image 5.png" alt="" /></div>
          </div>
          <div class="main-image">
            <img src="../assets/image 5.png" alt="" />
            <div class="full-screen">
              <img src="../assets/Fav (3).png" alt="" />
            </div>
          </div>
        </div>
        <div class="left-bottom">
          <div class="logo-share">
            <div class="foyr"><img src="../assets/Frame 130.png" alt="" /></div>
            <div class="share"><img src="../assets/Fav (1).png" alt="" /></div>
          </div>
          <div class="specification">
            White wooden arm chair with golden legs and some fabric
          </div>
          <div class="related-tages">
            <div class="main-name">Related Tags</div>
            <div class="tages">
              <div class="button">white</div>
              <div class="button">Background</div>
              <div class="button">Chair</div>
              <div class="button">Golden</div>
              <div class="button">Fabric</div>
              <div class="button">Moderns</div>
              <div class="button">Background</div>
              <div class="button">Wood</div>
              <div class="button">+6</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-item">
        <div class="contentt">Turnaround Arm Chair</div>
        <div class="rate-preium">
          <div class="rate"><h4>$ 7.00</h4></div>
          <div class="preium">
            <div class="icon"><img src="../assets/diamond.png" alt="" /></div>
            Premium
          </div>
        </div>
        <div class="add-cart">
          <div class="add-to-cart">
            <div class="shoping-cart">
              <img src="../assets/shopping_cart (1).png" alt="" />
            </div>
            Add to Cart
          </div>
          <div class="favriout">
            <img src="../assets/Fav (2).png" alt="" />
          </div>
        </div>
        <div class="product-daimation">
          <div class="product-details">
            <div class="detail-item">
              <span class="detail-label">Version:</span>
              <span class="detail-value">1.0</span>
            </div>
            <div class="detail-item">
              <span class="detail-label cornoa">Render:</span>
              <span class="detail-value button">
                <div class="render-image">
                  <img src="../assets/Frame 36.png" alt="" />
                </div>
                Corona</span
              >
            </div>
            <div class="detail-item">
              <span class="detail-label">Side:</span>
              <span class="detail-value">Left</span>
            </div>
            <div class="detail-item">
              <span class="detail-label color">Color:</span>
              <span class="detail-value colors">
                <div class="gry"></div>
                <div class="black"></div>
                <div class="brown"></div>
                <div class="slaty"></div>
              </span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Length:</span>
              <span class="detail-value">5.5mm</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Width:</span>
              <span class="detail-value">2.0mm</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Style:</span>
              <span class="detail-value">Modern</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Material:</span>
              <span class="detail-value">Plastic</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Form Factor:</span>
              <span class="detail-value">Compact</span>
            </div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="more-details">
          <div class="product-details">
            <div class="detail-item">
              <span class="detail-label">Version:</span>
              <span class="detail-value">1.0</span>
            </div>

            <div class="detail-item">
              <span class="detail-label">Side:</span>
              <span class="detail-value">Left</span>
            </div>

            <div class="detail-item">
              <span class="detail-label">Length:</span>
              <span class="detail-value">5.5mm</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Width:</span>
              <span class="detail-value">2.0mm</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Style:</span>
              <span class="detail-value">Modern</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Material:</span>
              <span class="detail-value">Plastic</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Form Factor:</span>
              <span class="detail-value">Compact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="similar-products"></div>
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

  display: flex;
  .left-item {
    width: 51.118rem;
    height: 54.437rem;
    gap: 36px;
    opacity: 0px;

    .left-top {
      width: 51.118rem;
      height: 37.5rem;
      display: flex;
      .images {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
        .image {
          width: 81px;
          height: 81px;
          gap: 0px;
          border-radius: 12px;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
          }
        }
      }
      .main-image {
        position: relative;
        margin-left: 1.1rem;
        width: 714px;
        height: 600px;
        gap: 0px;
        border-radius: 16px;
        opacity: 0px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
        .full-screen {
          position: absolute;
          width: 36px;
          height: 36px;
          top: 28px;
          left: 650px;
          gap: 0px;
          opacity: 0px;
        }
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
        display: flex;
        flex-direction: column;
        .main-name {
          font-family: Inter;
          font-size: 18px;
          font-weight: 500;
          line-height: 23.4px;
          text-align: left;
        }
        .tages {
          width: 51.118rem;
          height: 2.75rem;
          gap: 12px;
          opacity: 0px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          .button {
            height: Hug (44px) px;
            padding: 13px 12px 13px 12px;
            gap: 10px;
            border-radius: 40px;
            border: 1px 0px 0px 0px;
            opacity: 0px;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 18.2px;
            text-align: left;

            background-color: #ffffff;
            border: 1px solid #e5e1e1;
          }
        }
      }
    }
  }
  .right-item {
    margin-left: 1rem;
    width: 25.9125rem;
    height: 47.75rem;

    .contentt {
      //styleName: H4/R;
      width: 397px;
      height: 31px;
      font-family: Inter;
      font-size: 24px;
      font-weight: 400;
      line-height: 31.2px;
      text-align: left;
    }
    .rate-preium {
      margin-left: 1rem;
      margin-top: 1rem;
      width: 397px;
      height: 40px;
      display: flex;

      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      .rate {
        //styleName: H4/SB;
        font-family: Inter;
        font-size: 24px;
        font-weight: 600;
        line-height: 31.2px;
        text-align: left;
      }
      .preium {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7.5rem;
        height: 2rem;
        padding: 12px 20px 12px 16px;
        gap: 8px;
        border-radius: 40px;
        opacity: 0px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        text-align: left;
        background-color: #f7f4fe;
        color: #7343ea;
      }
    }

    .add-cart {
      margin-top: 2rem;
      width: 397px;
      height: 40px;
      opacity: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .add-to-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 324px;
        height: 57px;
        border-radius: 40px;
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 23.4px;
        text-align: left;
        color: #ffffff;
        background-color: #7343ea;
        gap: 1rem;
        .shoping-cart {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .product-daimation {
      margin-top: 2rem;
      width: 397px;
      height: 308px;
      gap: 12px;
      opacity: 1;
      padding: 1rem; // Optional: Add padding for better spacing
    }

    .product-details {
      display: flex;
      flex-direction: column;
    }

    .detail-item {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 12px;
      background-color: rgb(255, 255, 255);
    }

    .detail-label {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 15.6px;
      color: #605e5e;
      width: 100px; /* Fixed width for consistent alignment */
    }
    .cornoa {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 15.6px;
      color: #605e5e;
      width: 100px;
      margin-top: 1.3rem;
    }

    .detail-value {
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 15.6px;
      color: #1c1b1c;
      margin-left: 20px; /* Space between label and value */
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 44px;
      //   padding: 12px 20px 12px 16px;
      gap: 8px;
      border-radius: 40px;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      text-align: left;
      background-color: #fdedef;
      color: #e8505b;
      .render-image {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      gap: 0.5rem;
    }
    .colors {
      display: flex;
      gap: 0.5rem;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 15.6px;
      color: #1c1b1c;

      .gry,
      .black,
      .brown,
      .slaty {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
      }
      .gry {
        background: #adaaaa;
      }
      .black {
        background: #313030;
      }
      .brown {
        background: #605e5e;
      }
      .slaty {
        background: #797676;
      }
    }
    .hr {
      width: 397px;
      border: 1px solid #e5e1e1;
    }
    .more-details {
      margin-top: 2rem;
      opacity: 1;
      padding: 1rem;
      width: 397px;
      height: 184px;
    }
  }
}
.similar-products {
  margin: 2rem;
  margin-left: 9%;
  height: 16.8125rem;
  width: 77.54rem;
  background-color: #7343ea;
}
</style>
