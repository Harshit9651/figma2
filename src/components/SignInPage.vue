<template>
  <div class="main-wrapper">
    <div class="neo-green"></div>

    <div class="content-wrapper">
      <div class="logo">
        <img src="../assets/3d_text_logo.svg" alt="Logo" />
      </div>
      <div class="containers">
        <!-- Login Form Container -->
        <div class="content-container">
          <div class="login-container">
            <div class="login">Login</div>
            <div class="paragraph">Login to access your Foyr account</div>
            <div class="main-login-content">
              <div class="input-email">
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div class="input-password">
                <input type="password" placeholder="password" />
                <!-- <div class="hide-icon">
                  <img src="../assets/password.svg" alt="" />
                </div> -->
              </div>

              <div class="check-error">
                <div class="check-box">
                  <div class="check-input"></div>
                  <div class="text"></div>
                </div>
                <div class="forgot-password"></div>
              </div>
            </div>
          </div>
        </div>
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
      // align-items: center;
      width: 100%;
      width: 100%;
      height: 100%;

      .content-container {
        padding-left: 2rem;
        margin-top: 5rem;
        // flex: 1;
        width: 50%;
        height: 100%;
        border: 2px solid green;
        max-height: 100%;

        .login-container {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          .login {
            font-family: Inter;
            font-size: 40px;
            font-weight: 600;
            line-height: 48.41px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313030;
          }
          .paragraph {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313131;
          }
        }

        .main-login-content {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 28.6rem;
          gap: 20px;
          .input-email,
          .input-password {
            width: 80%;
            position: relative;

            input {
              width: 100%;
              padding: 0.8rem;
              font-size: 16px;
              border: 1px solid #ccc;
              border-radius: 2rem;
              outline: none;
              transition: border-color 0.3s;

              &:focus {
                border: 2px solid #683cd3;
              }
              &::placeholder {
                color: #1c1b1f;
              }

              .hide-icon {
                position: absolute;
                right: 1.5rem;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
                width: 1.5rem;
                height: 1.5rem;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }
          }

          .input-password {
            width: 80%;
            position: relative;
          }
          .check-error {
            background-color: #683cd3;
            height: 2rem;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .check-box{
              height: 1.5rem;
              width: 30%;
              background-color: #dcf763;
              display: flex;
              justify-content: space-between;
            }
            .forgot-password{
              width: 30%;
              height: 1.5rem;
              background-color: #dcf763;

            }
          }
        }
      }

      .image-container {
        flex: 1;
        max-width: 40%;
        max-height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
