<template>
  <div class="recommend-container">
    <div class="item-banner-box">
      <div class="item-carousel-box">
        <el-carousel height="242px" arrow="never" :interval="5000">
          <el-carousel-item v-for="(item, index) in bannerConfig.filter(e => e.type==='carousel')" :key="'carousel'+index">
            <img :src="item.image" alt=""/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="item-card-list-box">
        <div v-for="(item, index) in bannerConfig.filter(e => e.type==='card')" :key="'card'+index" class="item-card">
          <img :src="item.image" alt=""/>
        </div>
      </div>
    </div>
    <div class="item-navbar-box">
      <el-menu :default-active="activeNavbar" mode="horizontal" active-text-color="#3a6dff" @select="handleSelect">
        <div v-for="(item, index) in navbarConfig" :key="'navbar'+index" class="item-navbar">
          <el-submenu v-if="item.child" :index="`${index}`">
            <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
            <el-menu-item v-for="(childItem, childIndex) in item.child" :key="`childItem${index}-${childIndex}`" :index="`${index}-${childIndex}`">
              {{ childItem.title }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="`${index}`"><i :class="item.icon"></i>{{item.title}}</el-menu-item>
        </div>
      </el-menu>
    </div>
    <div v-for="(item, index) in contentConfig" :key="'content'+index" :class="[`item-${item.boxType}-box`]">
      <h4>{{item.title}}</h4>
    </div>
    <div class="item-footer-box">
      <el-divider> 已经到底啦，看看<strong>装机必备</strong>吧 </el-divider>
    </div>
<!--    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      activeNavbar: '0',
      recommendTitle: '综合推荐',
      bannerConfig: [
        {type: 'carousel',  image: require('@/assets/carousel1.png'), handleTo: ''},
        {type: 'carousel',  image: require('@/assets/carousel1.png'), handleTo: ''},
        {type: 'carousel',  image: require('@/assets/carousel1.png'), handleTo: ''},
        {type: 'carousel',  image: require('@/assets/carousel1.png'), handleTo: ''},
        {type: 'card',      image: require('@/assets/card1.png'),     handleTo: ''},
        {type: 'card',      image: require('@/assets/card1.png'),     handleTo: ''},
        {type: 'card',      image: require('@/assets/card1.png'),     handleTo: ''},
        {type: 'card',      image: require('@/assets/card1.png'),     handleTo: ''},
      ],
      navbarConfig: [
        {title: '综合推荐', icon: 'el-icon-goods', handleTo: ''},
        {title: '游戏合集', icon: 'el-icon-goods', child: [
            {title: '游戏推荐', handleTo: ''},
            {title: '精品页游', handleTo: ''},
            {title: '网页游戏', handleTo: ''},
            {title: '人气单机', handleTo: ''},
          ],
        },
        {title: '影音娱乐', icon: 'el-icon-goods', child: [
            {title: '娱乐推荐', handleTo: ''},
            {title: '影音试听', handleTo: ''},
            {title: '直播录屏', handleTo: ''},
          ],
        },
        {title: '商务办公', icon: 'el-icon-goods', child: [
            {title: '办公推荐', handleTo: ''},
            {title: '文档写作', handleTo: ''},
            {title: '办公其他', handleTo: ''},
          ],
        },
        {title: '服务折扣', icon: 'el-icon-goods', child: [
            {title: '精选折扣', handleTo: ''},
          ],
        },
      ],
      contentConfig: [
        {title: '综合推荐', boxType: 'recommend', child: []},
        {title: '软件榜单', boxType: 'top-list', child: [
            {id: '', title: '办公软件榜', background: '#628bff'},
            {id: '', title: '娱乐视听榜', background: '#52c883'},
            {id: '', title: '热门游戏榜', background: '#f08766'},
          ]
        },
        {title: '精品页游', boxType: 'web-game',      child: []},
        {title: '网游单机', boxType: 'single-game',   child: []},
        {title: '人气手游', boxType: 'mobile-game',   child: []},
        {title: '文档写作', boxType: 'document',      child: []},
        {title: '办公其他', boxType: 'office',        child: []},
        {title: '精选折扣', boxType: 'discount',      child: []},
        {title: '影音视听', boxType: 'audio-visual',  child: []},
        {title: '直播录屏', boxType: 'live',          child: []},
      ],
    }
  },
  methods: {
    handleSelect() {

    }
  }
};
</script>

<style lang="scss">
.el-menu--popup {
  min-width: 104px;
  text-align: center;
  .el-menu-item.is-active,
  .el-menu-item:not(.is-disabled):focus,
  .el-menu-item:not(.is-disabled):hover {
    background: #f3f4f8!important;
    color: #333333!important;
  }
}
</style>
<style lang="scss" scoped>
.recommend-container {
  padding-left: 32px;
  padding-right: 26px;
  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    margin-right: 30px;
  }
  > * {
    + * {
      margin-top: 12px;
    }
  }
  .item-banner-box {
    display: flex;
    height: 242px;
    /deep/.item-carousel-box {
      width: 448px;
      border-radius: 4px;
      overflow: hidden;
      .el-carousel__button {
        width: 8px;
        height: 8px;
        border-radius: 8px;
      }
      .el-carousel__indicator {
        &.is-active {
          .el-carousel__button {
            width: 18px;
          }
        }
      }
    }
    .item-card-list-box {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      margin-left: 8px;
      row-gap: 8px;
      column-gap: 8px;
      .item-card {
        width: 168px;
        height: 118px;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /deep/.item-navbar-box {
    .item-navbar {
      display: inline-block;
    }
    .el-menu {
      border: 0;
    }
    .el-submenu__icon-arrow {
      display: none;
    }
    .el-menu-item,
    .el-submenu__title {
      display: flex;
      align-items: center;
      padding: 0;
      width: 120px;
      height: 44px;
      line-height: 44px;
    }
    .el-menu-item.is-active,
    .el-submenu.is-active .el-submenu__title,
    .el-submenu__title:hover,
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: transparent;
      color: #3a6dff;
      font-weight: 700;
      font-size: 16px!important;
    }
    .el-submenu.is-active .el-submenu__title i, {
      color: #3a6dff;
    }
  }
  .item-footer-box {
    width: 400px;
    margin: auto;
    text-align: center;
    .el-divider__text {
      font-size: 12px;
    }
    strong {
      color: #3a6dff;
      cursor: pointer;
    }
  }
}
</style>
