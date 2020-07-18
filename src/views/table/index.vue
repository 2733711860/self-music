<template>
	<div>
		<me-table
			:tableData="list"
			:columns="columns"
			checkBox
			needRowColor
			@change="change"></me-table>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{
					code: '1001001',
					name: '张三',
					sex: '男',
					birthday: '1995-09-21',
					cellPhone: '18356010272',
					address: '中国上海'
				},
				{
					code: '1001002',
					name: '张三',
					sex: '男',
					birthday: '1995-09-21',
					cellPhone: '18356010272',
					address: '中国上海中国上海中国上海'
				},
				{
					code: '10010011001001',
					name: '张三',
					sex: '男',
					birthday: '1995-09-21',
					cellPhone: '18356010272',
					address: '中国上海'
				},
				{
					code: '1001003',
					name: '张三',
					sex: '男',
					birthday: '1995-09-21',
					cellPhone: '18356010272',
					address: '中国上海'
				}
			],
			columns: [
				{ field: 'code', title:'编码', width: 80, isFixed: 'left' },
				{ field: 'name', title:'姓名', width: 60, isFixed: false },
				{ field: 'sex', title:'性别', width: 50, isFixed: false },
				{ field: 'birthday', title:'出生日期', isFixed: false },
				{ field: 'cellPhone', title:'手机号', isFixed: false },
				{ field: 'address', title:'住址', width: 80, isFixed: 'right' }
			]
		}
	},
	methods: {
		change(val) {
			console.log(val)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
</style>