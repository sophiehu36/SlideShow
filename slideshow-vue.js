//点击前后按钮切换图片
let slideShow = new Vue({
	el: "#slide-container",
	data: {
		number: 0,
		timer: setInterval(this.nextImg, 3000),
	},
	// computed计算属性会有缓存
	// computed: {
	// 	// 计算属性的getter
	// 	imgSrc: function () {
	// 		return "images/" + this.number + ".jpg";
	// 	},
	// },
	methods: {
		previousImg: function () {
			this.number = (--this.number + 4) % 4;
		},
		nextImg: function () {
			this.number = ++this.number % 4;
		},
		// method没有缓存，并且html里面要调用这个方法imgSrc()
		// <img id="slide-image" v-bind:src="imgSrc()" alt="" />
		imgSrc: function () {
			return "images/" + this.number + ".jpg";
		},
		changeSrc1: function () {
			this.number = 0;
		},
		changeSrc2: function () {
			this.number = 1;
		},
		changeSrc3: function () {
			this.number = 2;
		},
		changeSrc4: function () {
			this.number = 3;
		},
		autoPlay: function () {
			this.timer = setInterval(this.nextImg, 3000);
		},
		stopAutoPlay: function () {
			clearInterval(this.timer);
			this.timer = null;
		},
	},
});
