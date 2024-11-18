<template>
  <div class="main-wrapper">
    <div class="neo-green"></div>

    <div class="content-wrapper">
      <div class="logo">
        <img src="../assets/3d_text_logo.svg" alt="Logo" />
      </div>
      <div class="containers">
        <div class="content-container">
          <!-- Login Form Container -->
          <div v-if="Showloginpage" class="login-container">
            <div class="login">Login</div>
            <div class="paragraph">Login to access your Foyr account</div>
            <div class="main-login-content">
              <div class="input-email">
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div class="input-password">
                <input type="password" placeholder="password" />
                <div class="hide-icon">
                  <img src="../assets/password.svg" alt="Toggle visibility" />
                </div>
              </div>

              <div class="check-error">
                <div class="check-box">
                  <div class="check-input">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div class="text">Remember me</div>
                </div>
                <div @click="ForgotPassword" class="forgot-password">Forgot Password</div>
              </div>
              <div class="login-button">
                <button>Login</button>
              </div>
              <div class="have-account">
                Don’t have an account? <a href="">Sign up</a>
              </div>
              <div class="incorrect-password">Incorrect password or Email</div>
              <div class="signin-with">
                <div class="part1"></div>
                <div class="part2">Or login with</div>
                <div class="part3"></div>
              </div>
              <div class="signups-option">
                <div class="with-google">
                  <img src="../assets/flat-color-icons_google.png" alt="" />
                </div>
                <div class="with-apple">
                  <img src="../assets/ant-design_apple-filled.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <!-- Forgot password Container -->
          <div v-if="showforgotPassword" class="forgotPassword-container">
            <div class="backTologin">
              <img src="../assets/v.svg" alt="" />
              <div class="btologin">Back to login</div>
            </div>
            <div class="heading">Forgot your password?</div>
            <div class="content">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </div>
            <div class="form">
              <div class="input-email">
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div class="submit-button">
                <button>Submit</button>
              </div>
            </div>
            <div class="signin-with">
              <div class="part1"></div>
              <div class="part2">Or login with</div>
              <div class="part3"></div>
            </div>
            <div class="signups-option">
              <div class="with-google">
                <img src="../assets/flat-color-icons_google.png" alt="" />
              </div>
              <div class="with-apple">
                <img src="../assets/ant-design_apple-filled.png" alt="" />
              </div>
            </div>
          </div>
          <div v-if="showCreatePassword" class="setPassword">
            <div class="heading">Set a Password</div>
            <div class="content">
              Your previous password has been reseted. Please set a new password for your account.
            </div>
            <div class="form">
              <div class="input-password">
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div class="input-password">
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div class="submit-button">
                <button>Submit</button>
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

<script setup>
import { ref } from "vue";
const Showloginpage = ref(true);
const showforgotPassword = ref(false)
const showCreatePassword = ref(false)
function ForgotPassword(){
showforgotPassword.value = true;
showCreatePassword.value = false;
Showloginpage.value = false;
}

</script>

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
        width: 50%;
        height: auto;
        min-height: 100%;
        // border: 1px solid black;

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
        .forgotPassword-container {
          display: flex;
          gap: 1rem;
          flex-direction: column;

          .backTologin {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 16.94px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313131;
          }

          .heading {
            font-family: Inter;
            font-size: 40px;
            font-weight: 600;
            line-height: 48.41px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313131;
          }

          .content {
            width: 70%;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
          }

          .form {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .input-email {
              width: 80%;
              position: relative;

              input {
                width: 95%;
                padding: 0.8rem;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 2rem;
                outline: none;
                padding-right: 2.5rem;
                transition: border-color 0.3s;

                &:focus {
                  border: 2px solid #683cd3;
                }

                &::placeholder {
                  color: #1c1b1f;
                }
              }
            }

            .submit-button {
              width: 80%; 
              button {
                all: unset;
                width: 100%;
                padding: 0.8rem;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 2rem;
                outline: none;
                transition: border-color 0.3s;
                background-color: #683cd3;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                line-height: 16.94px;
                text-align: left;
                text-decoration-skip-ink: none;
                color: white;
              }
            }
          }
          .signin-with {
            margin-top: 2rem;
            width: 80%;
            display: flex;
            align-items: center;
            .part1 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
            .part2 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20%;
              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              line-height: 16.94px;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: #313131;
            }
            .part3 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
          }
          .signups-option {
            width: 80%;
            margin-top: 2rem;

            display: flex;
            justify-content: space-between;
            .with-google {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
            }
            .with-apple {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
            }
          }
        }
        .setPassword {
          display: flex;
          gap: 1rem;
          flex-direction: column;

      

          .heading {
            font-family: Inter;
            font-size: 40px;
            font-weight: 600;
            line-height: 48.41px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313131;
          }

          .content {
            width: 70%;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
          }

          .form {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .input-password {
              width: 80%;
              position: relative;

              input {
                width: 95%;
                padding: 0.8rem;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 2rem;
                outline: none;
                padding-right: 2.5rem;
                transition: border-color 0.3s;

                &:focus {
                  border: 2px solid #683cd3;
                }

                &::placeholder {
                  color: #1c1b1f;
                }
              }
            }

            .submit-button {
              margin-top: 2.5rem;
              width: 80%; /* Same width as input */
              button {
                all: unset;
                width: 100%; /* Make the button width same as the input field */
                padding: 0.8rem;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 2rem;
                outline: none;
                transition: border-color 0.3s;
                background-color: #683cd3;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                line-height: 16.94px;
                text-align: left;
                text-decoration-skip-ink: none;
                color: white;
              }
            }
          }
          .signin-with {
            margin-top: 2rem;
            width: 80%;
            display: flex;
            align-items: center;
            .part1 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
            .part2 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20%;
              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              line-height: 16.94px;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: #313131;
            }
            .part3 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
          }
          .signups-option {
            width: 80%;
            margin-top: 2rem;

            display: flex;
            justify-content: space-between;
            .with-google {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
            }
            .with-apple {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
            }
          }
        }
        .main-login-content {
          margin-top: 2rem;
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
              padding-right: 2.5rem;
              transition: border-color 0.3s;

              &:focus {
                border: 2px solid #683cd3;
              }
              &::placeholder {
                color: #1c1b1f;
              }

              .hide-icon {
                position: absolute;
                right: 1rem;
                top: 60%;
                transform: translateY(-50%);
                cursor: pointer;
                width: 1.5rem;
                height: 1.5rem;
                z-index: 10;

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
            height: 2rem;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .check-box {
              height: 1.5rem;
              width: 22%;

              display: flex;
              justify-content: space-between;
              align-items: center;
              .text {
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 16.94px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #605e5e;
              }
            }
            .forgot-password {
              width: 30%;
              height: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: flex-end;

              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              line-height: 16.94px;
              text-align: right;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: #e8505b;
            }
          }
          .login-button {
            width: 80%;
            button {
              all: unset;
              width: 100%;
              padding: 0.8rem;
              font-size: 16px;
              border: 1px solid #ccc;
              border-radius: 2rem;
              outline: none;
              transition: border-color 0.3s;
              background-color: #683cd3;
              border-radius: 2.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: Inter;
              font-size: 14px;
              font-weight: 500;
              line-height: 16.94px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: white;
            }
          }
          .have-account {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 16.94px;
            text-align: center;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #313131;
            a {
              color: #683cd3;
            }
          }
          .incorrect-password {
            margin-top: 2rem;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;

            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #e8505b;
          }
          .signin-with {
            margin-top: 1rem;
            width: 80%;
            display: flex;
            align-items: center;
            .part1 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
            .part2 {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 20%;
              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              line-height: 16.94px;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: #313131;
            }
            .part3 {
              width: 40%;
              height: 1px;
              background-color: #313131;
            }
          }
          .signups-option {
            width: 80%;
            margin-top: 1rem;

            display: flex;
            justify-content: space-between;
            .with-google {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
            }
            .with-apple {
              height: 3rem;
              width: 45%;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              border-radius: 5px;
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
