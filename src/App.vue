<template>
  <div class="landing">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style lang="less">
@import "./assets/css/style.css";
html,
body {
  background-color: @bg-color;
}
.mt-border {
  margin: 30px auto;
  border-top: 1px solid #8c878d;
}
.lang-max {
  width: 76%;
  max-width: 1460px;
  padding: 0;
  margin: auto;
  overflow: hidden;
  @media screen and (min-width: 1920px) {
    width: 100%;
    max-width: 1520px;
  }
  @media screen and (min-width: 2160px) {
    width: 100%;
    max-width: 1680px;
  }
  @media screen and (min-width: 2366px) {
    max-width: 1920px;
  }
  @media screen and (min-width: 2853px) {
    max-width: 2160px;
  }
  @media screen and (min-width: 3804px) {
    max-width: 2366px;
  }
  @media screen and (min-width: 4090px) {
    max-width: 2853px;
  }
  @media screen and (min-width: 5120px) {
    max-width: 3804px;
  }
  @media screen and (max-width: 1200px) {
    width: calc(100% - 64px);
    padding: 0 32px;
  }
}
.font-85 {
  font-size: 85px;
  @media screen and (min-width: 2160px) {
    font-size: 34px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 56px;
  }
  @media screen and (max-width: 768px) {
    font-size: 112px;
  }
  @media screen and (max-width: 600px) {
    font-size: 134px;
  }
  @media screen and (max-width: 540px) {
    font-size: 174px;
  }
}
.font-79 {
  font-size: 79px;
  @media screen and (min-width: 2160px) {
    font-size: 28px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 55px;
  }
  @media screen and (max-width: 768px) {
    font-size: 110px;
  }
  @media screen and (max-width: 600px) {
    font-size: 128px;
  }
  @media screen and (max-width: 540px) {
    font-size: 168px;
  }
}
.font-72 {
  font-size: 72px;
  @media screen and (min-width: 2160px) {
    font-size: 36px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 54px;
  }
  @media screen and (max-width: 768px) {
    font-size: 108px;
  }
  @media screen and (max-width: 600px) {
    font-size: 125px;
  }
  @media screen and (max-width: 540px) {
    font-size: 148px;
  }
}
.font-68 {
  font-size: 68px;
  @media screen and (min-width: 2160px) {
    font-size: 34px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 51px;
  }
  @media screen and (max-width: 768px) {
    font-size: 102px;
  }
  @media screen and (max-width: 600px) {
    font-size: 123px;
  }
  @media screen and (max-width: 540px) {
    font-size: 144px;
  }
}
.font-65 {
  font-size: 65px;
  @media screen and (min-width: 2160px) {
    font-size: 32px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 48.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 97px;
  }
  @media screen and (max-width: 600px) {
    font-size: 120px;
  }
  @media screen and (max-width: 540px) {
    font-size: 140px;
  }
}
.font-55 {
  font-size: 55px;
  @media screen and (min-width: 2160px) {
    font-size: 27px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 41px;
  }
  @media screen and (max-width: 768px) {
    font-size: 82px;
  }
  @media screen and (max-width: 600px) {
    font-size: 110px;
  }
  @media screen and (max-width: 540px) {
    font-size: 127px;
  }
}
.font-50 {
  font-size: 50px;
  @media screen and (min-width: 2160px) {
    font-size: 25px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 37.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 75px;
  }
  @media screen and (max-width: 600px) {
    font-size: 100px;
  }
  @media screen and (max-width: 540px) {
    font-size: 124px;
  }
}
.font-48 {
  font-size: 48px;
  @media screen and (min-width: 2160px) {
    font-size: 24px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 72px;
  }
  @media screen and (max-width: 600px) {
    font-size: 96px;
  }
  @media screen and (max-width: 540px) {
    font-size: 120px;
  }
}
.font-46 {
  font-size: 46px;
  @media screen and (min-width: 2160px) {
    font-size: 23px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 34.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 69px;
  }
  @media screen and (max-width: 600px) {
    font-size: 98px;
  }
  @media screen and (max-width: 540px) {
    font-size: 118px;
  }
}
.font-45 {
  font-size: 45px;
  @media screen and (min-width: 2160px) {
    font-size: 22.5px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 32.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 67.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 101px;
  }
  @media screen and (max-width: 540px) {
    font-size: 112px;
  }
}
.font-42 {
  font-size: 42px;
  @media screen and (min-width: 2160px) {
    font-size: 21px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 31px;
  }
  @media screen and (max-width: 768px) {
    font-size: 63px;
  }
  @media screen and (max-width: 600px) {
    font-size: 94px;
  }
  @media screen and (max-width: 540px) {
    font-size: 108px;
  }
}
.font-40 {
  font-size: 40px;
  @media screen and (min-width: 2160px) {
    font-size: 20px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 600px) {
    font-size: 90px;
  }
  @media screen and (max-width: 540px) {
    font-size: 106px;
  }
}
.font-38 {
  font-size: 38px;
  @media screen and (min-width: 2160px) {
    font-size: 19px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 28.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 57px;
  }
  @media screen and (max-width: 600px) {
    font-size: 102px;
  }
  @media screen and (max-width: 540px) {
    font-size: 104px;
  }
}
.font-35 {
  font-size: 35px;
  @media screen and (min-width: 2160px) {
    font-size: 17.5px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 52.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 80px;
  }
  @media screen and (max-width: 540px) {
    font-size: 102px;
  }
}
.font-33 {
  font-size: 33px;
  @media screen and (min-width: 2160px) {
    font-size: 16.5px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 49.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 77px;
  }
  @media screen and (max-width: 540px) {
    font-size: 99px;
  }
}
.font-32 {
  font-size: 32px;
  @media screen and (min-width: 2160px) {
    font-size: 16px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
  @media screen and (max-width: 600px) {
    font-size: 74px;
  }
  @media screen and (max-width: 540px) {
    font-size: 96px;
  }
}
.font-30 {
  font-size: 30px;
  @media screen and (min-width: 2160px) {
    font-size: 15px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 600px) {
    font-size: 70px;
  }
  @media screen and (max-width: 540px) {
    font-size: 90px;
  }
}
.font-27 {
  font-size: 27px;
  @media screen and (min-width: 2160px) {
    font-size: 13.5px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 56px;
  }
  @media screen and (max-width: 540px) {
    font-size: 71px;
  }
}
.font-26 {
  font-size: 26px;
  @media screen and (min-width: 2160px) {
    font-size: 13px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 19.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 39px;
  }
  @media screen and (max-width: 600px) {
    font-size: 58.5px;
  }
  @media screen and (max-width: 540px) {
    font-size: 78px;
  }
}
.font-24 {
  font-size: 24px;
  @media screen and (min-width: 2160px) {
    font-size: 12px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 54px;
  }
  @media screen and (max-width: 540px) {
    font-size: 72px;
  }
}
.font-23 {
  font-size: 23px;
  @media screen and (min-width: 2160px) {
    font-size: 11.5px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 34.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 51px;
  }
  @media screen and (max-width: 540px) {
    font-size: 69px;
  }
}
.font-22 {
  font-size: 22px;
  @media screen and (min-width: 2160px) {
    font-size: 11px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 33px;
  }
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
  @media screen and (max-width: 540px) {
    font-size: 66px;
  }
}
.font-20 {
  font-size: 20px;
  @media screen and (min-width: 2160px) {
    font-size: 10px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 45px;
  }
  @media screen and (max-width: 540px) {
    font-size: 60px;
  }
}
.font-18 {
  font-size: 18px;
  @media screen and (min-width: 2160px) {
    font-size: 9px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media screen and (max-width: 540px) {
    font-size: 54px;
  }
}
.font-16 {
  font-size: 16px;
  @media screen and (min-width: 2160px) {
    font-size: 8px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 38px;
  }
  @media screen and (max-width: 540px) {
    font-size: 48px;
  }
}
.font-14 {
  font-size: 14px;
  @media screen and (min-width: 2160px) {
    font-size: 7px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
    font-size: 21px;
  }
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
  @media screen and (max-width: 540px) {
    font-size: 42px;
  }
}
.font-12 {
  font-size: 12px;
  @media screen and (min-width: 2160px) {
    font-size: 6px;
  }
  @media screen and (min-width: 2366px) {
    font-size: 9px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 29px;
  }
  @media screen and (max-width: 540px) {
    font-size: 36px;
  }
}

.uppercase {
  text-transform: uppercase;
}

.font-black {
  font-family: "Inter-black";
}
.font-bold {
  font-family: "Inter-bold";
}

.weight-3 {
  font-weight: 300;
}
.weight-4 {
  font-weight: 400;
}
.weight-5 {
  font-weight: 500;
}
.weight-6 {
  font-weight: 600;
}
.weight-7 {
  font-weight: 700;
}
.weight-8 {
  font-weight: 800;
}

.flex-row {
  display: flex !important;
  align-items: center;
  flex-wrap: wrap;
  &.space-between {
    justify-content: space-between;
  }
  &.center {
    justify-content: center;
  }
  &.flex-start {
    justify-content: flex-start;
  }
  &.flex-end {
    justify-content: flex-end;
  }
  &.nowrap {
    flex-wrap: nowrap;
  }
}

.width-icon {
  display: block;
  width: 24px;
  height: 24px;
  color: @black-color;
  fill: @black-color;
  @media screen and (min-width: 2160px) {
    width: 28px;
    height: 28px;
  }
  @media screen and (min-width: 2366px) {
    width: 30px;
    height: 30px;
  }
  &.small {
    width: 20px;
    height: 20px;
    @media screen and (min-width: 2160px) {
      width: 24px;
      height: 24px;
    }
    @media screen and (min-width: 2366px) {
      width: 26px;
      height: 26px;
    }
  }
  &.min-small {
    width: 16px !important;
    height: 16px;
    @media screen and (min-width: 2160px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (min-width: 2366px) {
      width: 22px;
      height: 22px;
    }
  }
  &.minimum-small {
    width: 14px;
    height: 14px;
    @media screen and (min-width: 2160px) {
      width: 18px;
      height: 18px;
    }
    @media screen and (min-width: 2366px) {
      width: 20px;
      height: 20px;
    }
  }
  &.big {
    width: 35px;
    height: 35px;
    @media screen and (min-width: 2160px) {
      width: 39px;
      height: 39px;
    }
    @media screen and (min-width: 2366px) {
      width: 41px;
      height: 41px;
    }
  }
  svg {
    width: inherit;
    height: inherit;
  }
}

.button-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.button {
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  border-radius: 100px;
  svg,
  path {
    display: block;
    fill: @black-color;
    cursor: inherit;
  }
}

.el-button--primary {
  background-color: @theme-color !important;
  border-color: @theme-color !important;
}

.is-disabled {
  cursor: no-drop;
}

.text-center {
  text-align: center;
}

.img {
  display: block;
  width: 100%;
}

.picture-mit {
  max-width: 170px;
  margin: auto;
}

.menu-width-mit {
  width: calc(100% - 230px);
  @media screen and (max-width: 540px) {
    width: calc(100% - 200px);
  }
}

.el-loading-spinner {
  position: relative !important;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  top: auto !important;
  margin: 0 !important;
  .path {
    stroke: @theme-color;
  }
  .circular {
    @media screen and (max-width: 540px) {
      width: 150px !important;
      height: 150px !important;
    }
  }
  .el-loading-text {
    width: 100%;
    margin: 8px 0 0 !important;
    font-size: inherit !important;
    color: @theme-color;
    @media screen and (max-width: 540px) {
      margin: 38px 0 0 !important;
    }
  }
}

body {
  .el-popper {
    &.is-light {
      min-width: 200px;
      padding: 4px 10px 0;
      background: @bg-module-color;
      border: 0;
      border-radius: 8px;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.72);
      // @media screen and (max-width: 1920px) {
      // width: 280px;
      // margin-left: -110px;
      // }
      @media screen and (max-width: 768px) {
        padding: 0 10px;
        margin-left: 0;
      }
      .el-menu--horizontal {
        .el-menu.el-menu--popup {
          width: 100%;
          background-color: transparent;
          box-shadow: none;
          .span {
            opacity: 0.5;
          }
          .el-menu-item {
            padding: 0;
            word-break: break-word;
            white-space: normal;
            line-height: 1.4;
            color: @white-color !important;
            &:not(.is-disabled):focus,
            &:not(.is-disabled):hover {
              background-color: transparent;
              .menu-default {
                background-color: @theme-color;
                .svg-color {
                  path {
                    fill: @white-color;
                    stroke: @white-color;
                  }
                }
              }
            }
            .menu-header {
              width: calc(100% - 40px);
              padding: 10px 20px !important;
              margin: 0 0 10px;
              line-height: 1.4;
              @media screen and (max-width: 768px) {
                width: 100%;
                padding: 0 !important;
                margin: 0;
              }
              &.community {
                background: url(assets/images/menu/menu-community.png) right
                  center no-repeat;
                background-size: 110px;
                @media screen and (max-width: 768px) {
                  background-size: 66px;
                }
              }
              &.developers {
                background: url(assets/images/menu/menu-developers.png) right
                  center no-repeat;
                background-size: 80px;
                @media screen and (max-width: 768px) {
                  background-size: 50px;
                }
              }
              .head-left {
                width: 45%;
                min-width: 150px;
                .desc {
                  padding: 3px 0 10px;
                }
                a {
                  color: @theme-color;
                  text-decoration: underline;
                }
              }
            }
            .menu-default {
              align-items: flex-start;
              width: calc(100% - 24px);
              padding: 10px 12px;
              margin: 2px 0;
              border-radius: 12px;
              &.m {
                width: calc(100% - 18px);
                padding: 3px 12px 7px 6px;
              }
              .head-left {
                &.svg-color {
                  svg {
                    width: 24px;
                    margin: 3px 0 0;
                    &.none {
                      path {
                        fill: none;
                      }
                    }
                    path {
                      fill: @theme-color;
                      stroke: @theme-color;
                    }
                  }
                }
                p {
                  padding: 0 0 0 28px;
                  &.event-menu {
                    // background: url(assets/images/)
                  }
                }
                svg {
                  width: 28px;
                }
              }
              .head-right {
                padding: 3px 0 0 0;
                p {
                  padding: 2px 0 0 7px;
                  &.event-menu {
                    // background: url(assets/images/)
                  }
                }
              }
            }
          }
          .el-sub-menu__title {
            @media screen and (max-width: 992px) {
              line-height: 1.4;
            }
          }
        }
      }
    }
    .el-select-dropdown__wrap,
    .el-select-dropdown__list,
    .el-select-dropdown__item {
      font-size: inherit;
      li {
        @media screen and (max-width: 768px) {
          height: auto;
          line-height: 2;
        }
      }
    }
  }
}
</style>
