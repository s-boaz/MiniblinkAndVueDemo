<template>
  <div class="header-box">
    <div class="item-logo">
      <div class="logo-box">
        <img src="@/assets/logo.png" alt=""/>
      </div>
    </div>
    <div class="item-content">
      <div class="item-left">
        <el-button type="text"><i :class="['icon el-icon-arrow-left', {'is-disabled': $route.name==='recommend'}]"></i></el-button>
        <div class="item-input">
          <el-input v-model="searchText" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="item-download">
          <img src="@/assets/download.gif" alt="" class="img-btn">
        </div>
      </div>
      <div class="item-right">
<!--        <div class="setup_menu-box">-->
<!--          <div class="icon el-icon-close"></div>-->
<!--          <div class="setup_menu-list" style="display: none;">-->
<!--            <div class="setup_menu-item">-->
<!--              <p class="icon"></p>-->
<!--              <p class="menu-text">设置中心</p>-->
<!--            </div>-->
<!--            <div class="setup_menu-item">-->
<!--              <p class="icon"></p>-->
<!--              <p class="menu-text">关于我们</p></div>-->
<!--            <div class="setup_menu-item">-->
<!--              <p class="icon"></p>-->
<!--              <p class="menu-text">反馈中心</p></div>-->
<!--          </div>-->
<!--        </div>-->
        <el-dropdown trigger="click" placement="top-start" style="margin-right: 10px">
          <el-button type="text"><i class="icon el-icon-more"></i></el-button>
          <el-dropdown-menu slot="dropdown" class="item-header-dropdown">
            <el-dropdown-item icon="el-icon-setting">设置中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-warning-outline">关于我们</el-dropdown-item>
            <el-dropdown-item icon="el-icon-chat-dot-square">反馈中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="text"><i class="icon el-icon-minus"></i></el-button>
        <el-button type="text"><i class="icon el-icon-close"></i></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss">
.item-header-dropdown {
  margin-top: 0!important;
  .popper__arrow {
    display: none!important;
  }
  .el-dropdown-menu__item {
    padding: 0 10px;
    font-size: 13px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #333333;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #f3f4f8;
    color: #333333;
  }
}
</style>
<style lang="scss" scoped>
.header-box {
  -webkit-app-region: drag;
  height: 76px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .item-logo {
    width: 180px;
    height: 76px;
    .logo-box {
      width: 132px;
      height: 30px;
      padding-top: 4px;
      padding-bottom: 4px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      img {
        pointer-events: none;
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .item-content {
    padding: 21px 40px 21px 36px;
    flex: 1;
    display: flex;
    justify-content: space-between;

    .item-left {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .icon {
        font-weight: bold;
        color: #333333;
      }
      .is-disabled {
        color: #e6e6e6;
      }
      /deep/ .item-input {
        width: 280px;
        margin-left: 12px;
        margin-right: 20px;
        .el-input__inner {
          border-radius: 16px;
          background: #f2f2f2;
        }
        .el-input__inner:focus {
          background: #ffffff;
          border-width: 2px;
        }
        .el-input__icon {
          font-size: 16px;
        }
      }
      .item-download {
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
    .item-right {
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button:hover {
        .icon {
          color: #3a6dff;
        }
      }
      .icon {
        font-weight: bold;
        color: #333333;
      }
    }
  }
}
</style>
