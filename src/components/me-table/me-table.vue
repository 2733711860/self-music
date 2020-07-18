<template>
	<div class="me-table-box">
		<table :class="[{borderTable: needBorder, rowColor: needRowColor}, 'me-table']" cellpadding="0" cellspacing="0" border="0">
			<thead>
				<tr>
					<th :class="[columns.filter(item=>item.isFixed=='left').length>0 ? 'checkboxCTh' : '']" v-if="checkBox">
						<input type="checkbox" name="checkboxx" id="quan" @click="chooseAll($event)" />
					</th>
					<th v-for="(nn) in columns" :ref="nn.isFixed ? 'me_td_' + nn.field : ''"
						:style="{zIndex: nn.isFixed ? '11' : ''}">
						<div>{{nn.title}}</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(xx, index) in tableData">
					<td :class="[columns.filter(item=>item.isFixed=='left').length>0 ? 'checkboxC' : '']" v-if="checkBox">
						<input type="checkbox" :value="index" v-model="chooseValue" class="checkItem" />
					</td>
					<td v-for="(nn) in columns"
						:style="{
							width: nn.width ? nn.width + 'px' : '100px',
							minWidth: nn.width ? nn.width + 'px' : '100px',
							maxWidth: nn.width ? nn.width + 'px' : '100px',
							position: nn.isFixed ? 'sticky' : 'static',
							zIndex: nn.isFixed ? '10' : ''}"
						:ref="'me_td_' + nn.field">
						<div>{{xx[nn.field]}}</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'meTable',
	data () {
		return {
			chooseValue: []
		}
	},
	props: {
		tableData: { // 表格数据
			type: Array,
			default: () => []
		},
		columns: { // 列列表
			type: Array,
			default: () => []
		},
		needBorder: { // 是否需要边框
			type: Boolean,
			default: false
		},
		needRowColor: { // 是否需要隔行变色
			type: Boolean,
			default: false
		},
		checkBox: { // 是否需要复选框
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.columns.forEach((item, index) => {
				let dom = 'me_td_' + item.field
				this.$refs[dom].forEach((domm, indexx) => {
					if (item.isFixed == 'left') {
						this.$refs[dom][indexx].style.left = this.$refs[dom][indexx].offsetLeft + 'px'
					} else if (item.isFixed == 'right') {
						domm.style.right = document.getElementsByClassName('me-table')[0].offsetWidth -
														domm.offsetLeft - domm.offsetWidth + 'px'
					}
				})
			})
		})
	},
	methods: {
		// 全选
    chooseAll (e) {
      var checkObj = document.querySelectorAll('.checkItem') // 获取所有checkbox
      if (e.target.checked) { // 判定全选checkbox的勾选状态
        for (var i=0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) { // 将未勾选的checkbox选项push到绑定数组中
            this.chooseValue.push(parseInt(checkObj[i].value))
          }
        }
      } else { // 如果是去掉全选则清空checkbox选项绑定数组
        this.chooseValue = []
      }
    },
	},
	watch: { // 监视双向绑定的数据数组
    chooseValue: {
      handler () { // 数据数组有变化将触发此函数
      	this.$emit('change', this.chooseValue) // 返回选择的序号列表
        if (this.chooseValue.length === this.tableData.length) {
          document.querySelector('#quan').checked = true
        }else {
          document.querySelector('#quan').checked = false
        }
      },
      deep: true // 深度监视
    }
  }
}
</script>

<style scoped="scoped" lang="less">
.me-table-box{
	position: relative;
	overflow: scroll;
	height: 200px;
	.me-table{
		width: 100%;
		border-collapse: initial;
	}
	.borderTable{
		border: #000000 solid;
    border-width:1px 0 0 1px;
	}
	.borderTable th, .borderTable td{
		border: #000000 solid;
    border-width:0 1px 1px 0;
	}
	.me-table th, .me-table td{
		padding: 10px 0;
		min-width: 40px;
		text-align: center;
		vertical-align: middle;
		div{
			width: 100%;
			height: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 5px;
			line-height: 18px;
			white-space: normal; /*文字换行*/
			word-break: break-all;
		}
	}
	.me-table>thead>tr>th, .me-table>tbody>tr>td {
		white-space: nowrap;
		background-color: white;
	}
	.me-table th {
		top: 1px;
		position: sticky;
	}
	.rowColor tr:nth-child(odd){
		td{
			background: #f0f9eb;
		}
	}
	.checkboxC{
		position: sticky;
		left: 0;
		z-index: 10;
	}
	.checkboxCTh{
		position: sticky;
		left: 0;
		z-index: 11;
	}
}
</style>