<template>
  <div class="soft-list-box">
    <div class="item-header">
      <div v-if="!pid" class="item-pid-box">
        <div :class="['item-category', {'is-active': !currentPid}]" @click="changePid('')">全部软件</div>
        <div v-for="item in pidList" :key="'pid'+item.id"
             :class="['item-category', {
               'is-active': currentPid===item.id
             }]" @click="changePid(item.id)">
          {{item.name}}
        </div>
      </div>
      <div v-if="categoryList.length" class="item-category-box">
        <div class="item-category-list">
          <div :class="['item-category', {'is-active': !currentCategory}]" @click="changeCategory('')">全部软件</div>
          <div v-for="item in categoryList" :key="'category'+item.id"
               :class="['item-category', {
               'is-active': currentCategory===item.id
             }]" @click="changeCategory(item.id)">
            {{item.name}}
          </div>
        </div>
        <el-dropdown trigger="hover" placement="bottom-start" class="item-sort-box" @command="changeOrder">
          <el-button type="text">{{sortConfig.find(e => e.value===searchParams.order).label}}<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown" class="item-sort-dropdown">
            <el-dropdown-item v-for="item in sortConfig" :key="'dropdown'+item.value" :command="item.value"
                              :disabled="searchParams.order===item.value">&ensp;{{ item.label }}&ensp;</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="item-body">
      <div v-infinite-scroll="changePage" class="item-soft-box">
        <soft-box v-for="(item, index) in softList" :key="`soft${item.id}${index}`" size="medium" :value="item"></soft-box>
      </div>
      <p v-if="loading">加载中...</p>
      <p v-else-if="softList.length>=softTotal" class="bottom-tips"> 你已经看到底了哦~ </p>
    </div>
  </div>
</template>

<script>
import { getSofts } from "@/api";
import { mapActions, mapState } from "vuex";

export default {
  name: "SoftList",
  props: {
    pid: [String, Number] // 如果指定pid的话 仅展示pid所在分类
  },
  data() {
    const sortConfig = [
      {value: 0, label: '默认排行'},
      {value: 1, label: '下载排行'},
      {value: 2, label: '评分排行'},
    ]
    return {
      loading: false,
      softList: [],
      softTotal: 0,
      pidList: [],
      currentPid: '', // 复用时data中指定pid
      currentCategory: '',
      sortConfig: sortConfig,
      searchParams: {
        category_id: '',
        limit: 12,
        page: 1,
        order: 0,
      }
    }
  },
  methods: {
    ...mapActions(['getCategories']),
    async getSoftList() {
      this.loading = true
      try {
        const res = await getSofts({
          ...this.searchParams,
          category_id: this.currentCategory || this.currentPid
        });
        this.softList = this.softList.concat(res.data?.list || [])
        this.softTotal = res.data?.total || 0
      } catch (e) {}
      this.loading = false
    },
    getSoftListByPage1() {
      this.searchParams.page = 1
      this.softList = []
      this.getSoftList()
    },
    changePid(id) {
      this.currentPid = id || ''
      this.currentCategory = ''
      this.getSoftListByPage1()
    },
    changeCategory(id) {
      this.currentCategory = id || ''
      this.getSoftListByPage1()
    },
    changeOrder(command) {
      this.searchParams.order = command
      this.getSoftListByPage1()
    },
    changePage() {
      this.searchParams.page++
      this.getSoftList()
    }
  },
  created() {
    if (this.pid) {
      this.currentPid = this.pid
    }
    this.getCategories()
    this.getSoftList()
  },
  computed: {
    ...mapState(['categories']),
    categoryList() {
      return this.pidList.find(e => e.id===this.currentPid)?.children || []
    },
  },
  watch: {
    categories: {
      handler(val) {
        this.pidList = val
      },
      deep: true,
      immediate: true
    },
    currentPid() {
      this.currentCategory = ''
      this.searchParams.order = 0
    },
    currentCategory() {
      this.getSoftListByPage1()
    },
  },
  components: {
    SoftBox: () => import(/* webpackChunkName: "components" */ "../components/SoftBox"),
  }
};
</script>

<style lang="scss">
.item-sort-dropdown {
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover, .is-disabled {
    background-color: #f3f4f8;
    color: #3a6dff;
  }
}
</style>
<style lang="scss" scoped>
.item-header {
  .item-category {
    width: 80px;
    height: 36px;
    line-height: 36px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
  }
  .item-category:first-child {
    font-weight: 700;
  }
  .item-category.is-active {
    color: #3a6dff;
    font-weight: 700;
  }
  .item-pid-box {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .item-category-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    background: #f3f4f8;
    border-radius: 4px;
    margin-bottom: 10px;
    position: relative;
  }
  .item-category-list {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .item-sort-box {
    margin-top: 4px;
    margin-right: 6px;
    width: 100px;
    height: 28px;
    line-height: 28px;
    border-radius: 16px;
    background-color: #3a6dff;
    display: flex;
    justify-content: center;
    cursor: pointer;
    button {
      font-size: 12px;
      color: #fff;
    }
    i {
      font-size: 12px!important;
    }
  }
}
.item-body {
  .bottom-tips {
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    color: #999;
  }
}
</style>

