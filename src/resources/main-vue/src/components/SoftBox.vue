<template>
  <div :class="['soft-box', 'soft-box--'+size, {'is-static': isStatic}]">
    <div class="item-soft-image">
      <img :src="value.soft_icon" alt=""/>
    </div>
    <div class="item-soft-info">
      <div class="item-soft-title">{{ value.soft_name }}</div>
      <!--评分+安装/描述+安装鼠标移入显示 仅描述 仅评分 仅安装-->
      <div class="item-soft-desc">
        <slot>{{value.soft_tip}}</slot>
      </div>
      <div class="item-soft-install">
        <el-button type="primary" size="mini" round>安装</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftBox",
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          soft_name: '抖音',
          soft_tip: '五一拼假攻略',
          soft_icon: require('@/assets/soft1.png'),
        }
      }
    },
    size: {
      type: String,
      default: 'mini'
    }, // mini small medium large
    isStatic: Boolean, // 静态的只做展示，没有hover交互，做样式强制绑定
  },
  methods: {
    handleInstall() {

    }
  }
};
</script>

<style lang="scss" scoped>
// size变量
.soft-box {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 188px;
  height: 52px;
  padding: 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  .item-soft-image {
    flex: 0 0 40px;
    box-sizing: border-box;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .item-soft-info {
    flex: 1;
    max-width: 135px;
    position: relative;
    .item-soft-title {
      font-size: 14px;
      margin-bottom: 4px;
      color: #000;
      font-weight: 400;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .item-soft-desc {
      color: #666;
      font-size: 12px;
      height: 28px;
      line-height: 28px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      /deep/.el-rate__icon {
        margin-right: 0px;
      }
    }
    .item-soft-install {
      display: none;
    }
  }
  &:hover:not(.is-static) {
    .item-soft-title {
      color: #3a6dff;
    }
    .item-soft-desc {
      display: none;
    }
    .item-soft-install {
      display: block;
    }
  }
}
.soft-box--mini {

}
.soft-box--small {
  height: 60px;
  .item-soft-image {
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
  }
}
.soft-box--medium {
  height: 102px;
  justify-content: flex-start;
  width: 368px;
  &:nth-of-type(2n-1) {
    margin-right: 58px;
  }
  .item-soft-image {
    flex: 0 0 52px;
    width: 52px;
    height: 52px;
  }
  .item-soft-info {
    max-width: 300px;
    height: 52px;
    .item-soft-title {
      font-size: 16px;
      margin-bottom: 12px;
      font-weight: 700;
      max-width: 214px;
    }
    .item-soft-desc {
      display: block!important;
      max-width: 214px;
    }
    .item-soft-install {
      display: block!important;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 52px;
      button {
        background-color: #fff;
        border: 1px solid #3a6dff;
        color: #3a6dff;
        width: 76px;
        height: 36px;
        font-size: 14px;
        border-radius: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
