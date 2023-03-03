<template>
  <div class="nav-box">
    <div class="nav-list item-header">
      <div v-for="(item, index) in navList.filter(e => e.id>0)" :key="'menu'+index">
        <router-link :to="item.path">
          <i :class="['icon', item.icon]"></i>
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="nav-list item-footer">
      <div v-for="(item, index) in navList.filter(e => e.id<0)" :key="'menu'+index">
        <router-link :to="item.path">
          <i :class="['icon', item.icon]"></i>
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBox",
  data() {
    return {
      navList: [
        {id: 1,  title: '首页推荐', icon: 'el-icon-star-on', path: '/home/recommend'},
        {id: 1,  title: '装机必备', icon: 'el-icon-folder-checked', path: '/home/essential'},
        {id: 1,  title: '游戏娱乐', icon: 'el-icon-present', path: '/home/game'},
        {id: 1,  title: '办公软件', icon: 'el-icon-suitcase', path: '/home/work'},
        {id: 1,  title: '全部分类', icon: 'el-icon-menu', path: '/home/all'},
        {id: -1, title: '软件升级', icon: 'el-icon-upload', path: '/home/upgrade'},
        {id: -1, title: '软件卸载', icon: 'el-icon-delete', path: '/home/unload'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-box {
  height: 570px;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .nav-list {
    width: 100%;
    > div {
      width: 100%;
      height: 40px;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
      position: relative;
      margin-top: 5px;
      margin-bottom: 5px;
      cursor: pointer;
      a {
        width: 132px;
        height: 40px;
        color: #333;
        text-decoration: none;
        cursor: pointer;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 6px;
        font-size: 14px;
        line-height: 40px;
        margin-left: 8px;
        margin-right: 6px;
        i {
          font-size: 20px;
          color: #333333;
          margin-right: 12px;
        }
      }
      a.router-link-active {
        color: #ffffff;
        background: linear-gradient(90deg,#3a6dff,#00a2ff);
        i {
          color: #ffffff;
        }
      }
      a:hover {
        @extend a.router-link-active;
        background: linear-gradient(90deg,#0042ff,#008ada);
      }
    }
  }

}
</style>
