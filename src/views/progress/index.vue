<template>
  <!--进度条拖动-->
  <div style="padding: 50px 10px;">
  	<me-tree
      :tree-data="treeData"
      v-model="ids"
      :options="options"
      @handle="handle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
    	ids: [2], // 选中的ID列表
    	options: {
        label: 'label',
        checkbox: false, // 是否启用选择框，多选目前不成熟，需要自己修改一点
        checkedOpen: true, // 选中时是否展开节点
        folderBold: true, // 目录是否加粗显示
        idsWithParent: true, // v-model数据是否包含目录,如果只获取叶子节点设置为false
        depthOpen: 0, // 初始化时展开层级，根节点为0
        openIcon: 'fa fa-angle-right',
        closeIcon: 'fa fa-angle-down',
        halfCheckedIcon: 'fa fa-minus-square-o fa-fw text-primary',
        checkedIcon: 'fa fa-check-square-o fa-fw text-danger',
        uncheckedIcon: 'fa fa-square-o fa-fw'
      },
    	treeData: [{
        label: '根目录[1]',
        id: 1,
        children: [
          {
            label: '一级节点[4]',
            id: 4,
            children: [
              {
                label: '二级节点[5]',
                id: 5,
                children: [
                  {label: '三级节点[6]', id: 6},
                  {label: '三级节点[8]', id: 8},
                  {label: '三级节点[30]', id: 30},
                  {
                    label: '三级节点[31]',
                    id: 31,
                    children: [
                      {label: '四级节点[36]', id: 36},
                      {label: '四级节点[38]', id: 38},
                      {label: '四级节点[39]', id: 39},
                      {label: '四级节点[48]', id: 48}
                    ]
                  }
                ]
              },
              {label: '二级节点[9]', id: 9},
              {label: '二级节点[10]', id: 10},
              {
                label: '二级节点[11]',
                id: 11,
                children: [
                  {label: '三级节点[12]', id: 12},
                  {label: '三级节点[13]', id: 13},
                  {
                    label: '三级节点[14]',
                    id: 14,
                    children: [
                      {label: '四级节点[15]', id: 15},
                      {label: '四级节点[16]', id: 16},
                      {label: '四级节点[17]', id: 17},
                      {label: '四级节点[18]', id: 18},
                      {
                        label: '四级节点[19]',
                        id: 19,
                        children: [
                          {label: '五级节点[20]', id: 20},
                          {label: '五级节点[21]', id: 21},
                          {label: '五级节点[22]', id: 22},
                          {label: '五级节点[23]', id: 23},
                          {label: '五级节点[24]', id: 24}
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {label: '一级节点[2]', id: 2},
          {
            label: '一级节点[59]',
            id: 59,
            children: [
              {label: '二级节点[60]', id: 60},
              {label: '二级节点[61]', id: 61},
              {label: '二级节点[62]', id: 62},
              {label: '二级节点[63]', id: 63},
              {label: '二级节点[64]', id: 64}
            ]
          },
          {label: '一级节点[3]', id: 3}
        ]
      },
      {
        label: '根目录[99]',
        id: 99,
        children: [
          {label: '二级节点[70]', id: 70},
          {label: '二级节点[71]', id: 71},
          {label: '二级节点[72]', id: 72},
          {label: '二级节点[73]', id: 73},
          {
            label: '二级节点[74]',
            id: 74,
            children: [
              {label: '三级节点[82]', id: 82},
              {label: '三级节点[83]', id: 83}
            ]
          }
        ]
      }]
    }
  },
  mounted() {
  },
  methods: {
  	handle (item) {
  		console.log(item)
    }
  }
}
</script>

<style lang="less">
</style>