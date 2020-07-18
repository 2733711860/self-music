<template>
	<span class="fileinput-button">
		<slot>
			<span><me-icon name="camera" size="30"></me-icon></span>
		</slot>
		<input type="file" @change='onUpload' :multiple="multiple" :accept="accept" :disabled="disabled" :capture="capture">
	</span>
</template>

<script>
export default {
	name: 'meUpload',

	data () {
		return {
			fileList: []
		}
	},

	props: {
		multiple: { // 是否多选image/*
			type: Boolean,
			default: false
		},
		accept: { // 上传格式
			type: String,
			default: 'image/*'
		},
		size: { // 单个文件大小限制
			type: Number,
			default: null
		},
		maxCount: { // 文件个数限制
			type: Number,
			default: null
		},
		scale: { // 压缩比例，默认不压缩
			type: Number,
			default: null
		},
		disabled: { // 是否禁用
			type: Boolean,
			default: false
		},
		capture: { //
			type: String,
			default: null
		}
	},

	methods: {
		async onUpload(e) {
			let files = e.target.files
			if (files.length > this.maxCount) {
				this.$emit('overcount')
				return
			}
			files = Array.from(files)
			this.fileList = await this.getfor(files)
			this.$emit('change', this.fileList)
		},

		async getfor(files) {
			return new Promise(async (resolve, reject) => {
				files.forEach(async file => {
					let onefile = await this.getMsg(file)
					if (onefile) {
						if (this.scale) onefile = await this.cutDowmImg(onefile)
						this.fileList.push(onefile)
					}
					resolve(this.fileList)
				})
			})
		},

		getMsg(file) { // 获取数据封装
			return new Promise((resolve, reject) => {
				let onefile = {
					name: file.name,
					size: file.size,
					type: file.type,
					base64: '',
					compressBase64: '',
					url: this.getObjectURL(file),
					file: file
				}
	      var reader = new FileReader()
	      reader.readAsDataURL(file)
	      reader.onloadstart = (e) => {} // 开始读取文件
	      reader.onprogress = (e) => {} // 正在读取文件
	      reader.onabort = (e) => {} // 中断读取文件
	      reader.onerror = (e) => {} // 正在读取文件
	      reader.onload = (e) => { // 文件读取异常
	      	onefile.base64 = e.target.result
	      }
	      if (this.size != null) {
					if (file.size > this.size) {
						this.$emit('oversize', onefile) // 超过文件限制大小
						resolve(false)
					}
				}
	      resolve(onefile)
			})
		},

		getObjectURL(file) { // 获取blod
      let url = null;
      if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      }
      return url;
    },

    cutDowmImg(onefile) { // base64压缩
    	return new Promise((resolve, reject) => {
	    	// 创建canvas画布
	    	var canvas = document.createElement('canvas')
	    	var ctx = canvas.getContext('2d')
	    	// 创建img对象
				var img = new Image
				img.src = onefile.url
				img.crossOrigin = 'Anonymous'
				img.onload = () => {
					var width = img.width
					var height = img.height
					// 按比例压缩4倍
					var rate = (width<height ? (width/height) : height/width) * (this.scale)
					//设置画布的width和height，绘制图片，压缩
					canvas.width = width*rate
					canvas.height = height*rate
					ctx.drawImage(img,0,0,width,height,0,0,width*rate,height*rate)
					onefile.compressBase64 = canvas.toDataURL()
					resolve(onefile)
				}
    	})
    }
	}
}
</script>

<style scoped="scoped">
.fileinput-button{
	position: relative;
	display: inline-block;
	overflow: hidden;
}
.fileinput-button span{
	position: relative;
	display: inline-block;
	overflow: hidden;
	padding: 25px;
	border-radius: 10px;
	background-color: #fbfdff;
	border: 1px dashed #c0ccda;
	color: #dcdee0;
}

.fileinput-button input {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0px;
	top: 0px;
	opacity: 0;
	-ms-filter: 'alpha(opacity=0)';
}
</style>