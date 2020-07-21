<template>
	<div class="user-page">
		<div class="user-top">
			<div class="countdown-div">
				<div class="countdown">
	        <div class="days"><span>{{times.days}}</span> <ins>/</ins> <em>days /</em></div>
	        <div class="hours"><span>{{times.hours}}</span> <ins>/</ins> <em>hours /</em></div>
	        <div class="minutes"><span>{{times.minutes}}</span> <ins>/</ins> <em>min /</em></div>
	        <div class="seconds"><span>{{times.seconds}}</span><em>sec</em> </div>
	      </div>
			</div>

			<div class="user-div">
				<img :src="users.avatarUrl" />
				<div>{{users.nickname}}</div>
			</div>
		</div>

		<div class="sheet-page">
			<div class="title-div">
				<span>热门歌单</span>
			</div>
			<div class="sheet-div">
				<item-sheet
					v-for="(item, index) in sheetList"
					:key="index + 'sheet'"
					:sheetMsg="item"
					@click.native="goList(item)"></item-sheet>
			</div>
		</div>

		<div class="sheet-page">
			<div class="title-div">
				<span>历史记录</span>
				<div class="right">
					<Icon :size="10" type="right" />
				</div>
			</div>
		</div>

		<div class="sheet-page">
			<div class="title-div">
				<span>专属模块</span>
				<div class="right">
					<Icon :size="10" type="right" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getEndTime2 } from '@/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import itemSheet from '@/pages/components/music-sheet/item-sheet.vue'
import Icon from '@/pages/components/icon'
export default {
	components: {
		itemSheet, Icon
	},

	data () {
		let timess = getEndTime2(new Date(), new Date('2020/05/02 11:00:00'))
		return {
			times: timess,
			users: {},
			sheetList: []
		}
	},

	mounted () {
		this.login()
		setInterval(() => {
			this.times = getEndTime2(new Date(), new Date('2020/05/02 11:00:00'))
		}, 1000)
	},

	methods: {
		async login () { // 用户登陆
			await this.$get(this.$api.login, {phone: '18356010272', password: 'mwd18356010272'}).then(async data => {
				this.users = data.profile
				this.getUserPlaylist(data.account.id)
	    })
		},

		async getUserPlaylist (uid) { // 用户详情
			await this.$get(this.$api.getUserPlaylist, {uid: uid}).then(async data => {
				this.sheetList = data.playlist
				this.getUserSubcount()
	    })
		},

		async getUserSubcount (uid) { // 用户详情
			await this.$get(this.$api.getUserSubcount).then(async data => {
	    })
		},

		goList (sheet) {
			this.$router.push({
				path: '/sheetList',
				query: {
					id: sheet.id
				}
			})
		},
	}
}
</script>

<style scoped="scoped" lang="less">
.user-page{
	height: 100%;
	.user-top{
		height: 210px;
		background: url(../../assets/img/centerBg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		color: rgba(255, 255, 255, .7);
		.user-div{
			display: flex;
			align-items: center;
			padding: 20px;
			img{
				height: 55px;
				width: 55px;
				border-radius: 100%;
				margin-right: 15px;
			}
		}
	}
}
.sheet-page{
	margin: 0 10px;
}
.sheet-div:after{
	content: '';
	width: 110px;
}
.sheet-div{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	div{
		margin-bottom: 10px;
	}
}
.title-div{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	span{
		font-weight: 550;
	}
	.right{
		display: flex;
		align-items: center;
		font-size: 12px;
		span{
			font-weight: normal;
		}
	}
}

@font-face {
	font-family: 'JournalRegular';
	src: url('../../assets/fonts/journal-webfont.eot');
	src: url('../../assets/fonts/journal-webfont_162a16fe.eot') format('embedded-opentype'), url('../../assets/fonts/journal-webfont.woff') format('woff'), url('../../assets/fonts/journal-webfont.ttf') format('truetype'), url('../../assets/fonts/journal-webfont.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

.countdown-div{
	position: relative;
	height: 100px;
}

.countdown {
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
}
.countdown div {
	float: left;
	font-family: 'JournalRegular', Arial, sans-serif;
	font-size: 40px;
	line-height: 38px;
}
.countdown em {
	display: block;
	font-size: 30px;
	text-align: right;
	padding: 0 10px 0 0;
}
.countdown ins {
	color: #ffbd38;
	text-decoration: none;
}
.countdown div.days span {
	width: 50px;
	display: inline-block;
	text-align: center;
}
.countdown div.hours span {
	width: 40px;
	display: inline-block;
	text-align: center;
}
.countdown div.hours em {
	text-align: left;
}
.countdown div.minutes span {
	width: 40px;
	display: inline-block;
	text-align: center;
}
.countdown div.minutes em {
	text-align: left;
	margin-left: -10px;
}
.countdown div.seconds span {
	width: 40px;
	display: inline-block;
	text-align: center;
}
.countdown div.seconds em {
	text-align: left;
	margin-left: -10px;
}

</style>