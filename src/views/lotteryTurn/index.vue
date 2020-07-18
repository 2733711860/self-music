<template>
	<div>
		<me-lottery-turn :awards="awards"
			:value="value"
			></me-lottery-turn>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	awards: [
    		{name: '谢谢惠顾'},
    		{name: 'pad'},
    		{name: '华为P30'},
    		{name: '华为mateBook'},
    		{name: '小米手机'},
    		{name: '红米手机'}
    	],
    	value: 0
    }
  },
}
</script>
