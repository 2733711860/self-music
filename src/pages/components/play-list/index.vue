<template>
	<div class="playing-page">
		<me-popup v-model='showPopup' position="bottom" class="playingDiv">
			<item-music
				v-for="(item, index) in playlist"
				:key="index + 'playing'"
				:musicDesc="item"
				@click.native="playThis(item, index)"></item-music>
		</me-popup>
	</div>
</template>

<script>
import itemMusic from '@/pages/components/music-new/item-music.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		itemMusic
	},
	
	data () {
		return {
			showPopup: this.value
		}
	},
	
	props: {
		playlist: {
			type: Array,
			default: () => []
		},
		
		value: {
			type: Boolean,
			default: false
		}
	},
	
	watch: {
		value(val) {
			this.showPopup = val
		},
		
		showPopup(val) {
			this.$emit('input', val)
		}
	},
	
	methods: {
		playThis (item, index) { // 点击播放
			this.startSong(item)
		},
		
		...mapActions(["startSong"])
	}
}
</script>

<style scoped="scoped" lang="less">
.playingDiv{
	max-height: 400px;
}
</style>