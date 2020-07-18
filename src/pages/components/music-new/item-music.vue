<template>
	<div :class="['item-music', {actives: currentSong.id == musicDesc.id}]">
		<img v-lazy="musicDesc.img + '?param=50y50'" v-if="currentSong.id == musicDesc.id" />
		<Icon :size="10" type="add" class="icon" v-else />
		<div class="music-desc">
			<div class="music-name">{{musicDesc.name}}</div>
			<div class="music-author">{{musicDesc.artistsText}}</div>
		</div>
		<div class="fun-icon" v-if="currentSong.id == musicDesc.id">
			<music-loading class="musicLoading"></music-loading>
			<Icon :size="10" type="nolike" class="icon" />
			<Icon :size="10" type="delete" class="icon" />
		</div>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import musicLoading from '@/pages/components/music-loading'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default{
	components: {
		Icon, musicLoading
	},

	computed: {
		...mapGetters([
      "currentSong"
    ]),
	},

	props: {
		musicDesc: {
			type: Object,
			default: {}
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.actives{
	background-color: rgba(0, 0, 0, 0.03);
	.music-desc{
		color: #0a86f6;
	}
}
.item-music{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 0;
	color: #333;
	img{
		border-radius: 100%;
		margin: 0 10px;
		width: 50px;
		height: 50px;
	}
	.icon{
		padding: 0 8px;
	}
	.music-desc{
		flex: 1;
		overflow: hidden;
		.music-name{
			font-size: 14px;
			line-height: 25px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.music-author{
			font-size: 12px;
			color: rgba(0, 0, 0, .6);
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
	.fun-icon{
		display: flex;
		align-items: center;
		.musicLoading {
			height: 15px !important;
			width: 20px;
		}
	}
}
.item-music:active{
	background-color: rgba(0, 0, 0, .03);
}
@media screen and (min-width: 550px){
  /* 电脑端CSS代码 */
  .item-music:hover{
		background-color: rgba(0, 0, 0, .03);
	}
}
</style>