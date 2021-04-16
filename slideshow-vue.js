//点击前后按钮切换图片
let slideShow = new Vue({
	el: "#slide-container",
	data: {
		number: 0,
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
	},
});

// //设置自动切换图片定时器
// //设置鼠标移动到图片区域时清除自动播放定时器
// const bindEventSetAutoPlay = function () {
// 	//选中图片区域
// 	const slide = e(".slide-container");
// 	//监听事件，mouseenter的时候暂停轮播
// 	bindEvent(slide, "mouseenter", function () {
// 		log("stop auto play");
// 		//清除定时器
// 		clearInterval(timer);
// 		timer = null;
// 	});
// 	//监听事件，mouseleave的时候开始轮播
// 	bindEvent(slide, "mouseleave", function () {
// 		log("start auto play");
// 		//设定定时器
// 		timer = setInterval(autoPlay, 3000);
// 	});
// };
// //设置定时器自动播放
// let timer = setInterval(autoPlay, 3000);

// const __main = function () {
// 	bindEventSlide();
// 	// bindEventIndicator();
// 	// bindEventSetAutoPlay();
// };

// __main();
