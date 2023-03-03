<template>
  <div class="unload-container">
    <div class="item-table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          height="520"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column type="selection" min-width="42"></el-table-column>
        <el-table-column prop="DisplayName" label="软件名称" min-width="250" header-align="center" sortable show-overflow-tooltip>
          <template v-slot="{row}">
            <div class="item-display-wrapper">
              <img :src="row.IconBase64Data"/>
              <div class="item-display-info">
                <p>{{ row.DisplayName }}</p>
                <p>{{ row.Publisher }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="EstimatedSize" label="软件大小" min-width="193" header-align="center" align="center" sortable>
          <template v-slot="{row}">
            {{ row.EstimatedSize || '未知' }}
          </template>
        </el-table-column>
        <el-table-column prop="InstallDate" label="上次打开时间" min-width="193" header-align="center" align="center"
                         sortable></el-table-column>
        <el-table-column prop="handle" label="操作" min-width="102" header-align="center" align="center">
          <template v-slot="{row}">
            <el-button type="primary" size="large" plain round @click="handleUnload(row)">卸载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="item-footer">
      <p class="item-footer-text"> 已安装软件 <strong>&nbsp;{{ tableData.length }}&nbsp; </strong> 款，系统盘（C）可用空间：<strong>&nbsp;0GB&nbsp;</strong></p>
      <el-button type="primary" size="medium" round :disabled="!selectedUnloadList.length" @click="handleUnload">一键卸载</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unload",
  data() {
    return {
      tableData: [],
      selectedUnloadList: [],
    }
  },
  methods: {
    handleUnload(row) {
      const unloadList = row || this.selectedUnloadList
      console.log('handleUnload--------', unloadList)
    },
    handleSelectionChange(val) {
      console.log('handleSelectionChange--------', val)
      this.selectedUnloadList = val
    }
  },
  async created() {
    const obj = await this.$clientInterface('uninstall');
    if (obj) {
      this.tableData = JSON.parse(obj.data);
    }
  }
}
</script>

<style lang="scss" scoped>
.unload-container {
  .item-table {
    padding-left: 32px;
    padding-right: 26px;
  }
  /deep/ .el-table {
    th {
      padding: 0;
      background-color: #f3f4f8;
    }

    td {
      height: 110px;
    }

    th:first-child .cell {
      display: none !important;
    }
  }

  .item-display-wrapper {
    position: relative;

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

    }

    .item-display-info {
      display: inline-block;
      margin-left: 64px;
      width: calc(100% - 64px);

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:nth-child(1) {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
      }
    }
  }
  .item-footer {
    height: 64px;
    padding: 14px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -6px 10px 0 rgba(102, 102, 102, 0.2);
    margin-top: 10px;
    .item-footer-text {
      font-size: 14px;
      strong {
        color: #f56e6e;
      }
    }
  }
}
</style>
