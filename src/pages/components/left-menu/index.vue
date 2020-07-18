<template>
	<div>
		<me-popup v-model='showPopup' position="left">122</me-popup>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default{
	computed: {
    ...mapGetters([ 'showLeftMenu' ]),
    
    showPopup: {
    	get() {
    		return this.showLeftMenu
    	},
    	set(val) {
    		this.setShowLeftMenu(val)
    	}
    }
	},
	
	methods: {
		...mapActions(['setShowLeftMenu'])
	}
}
</script>

<style>
</style>