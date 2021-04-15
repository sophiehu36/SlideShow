//点击前后按钮切换图片
new Vue({
	el: "#slide-container",
	data: {
		number: 0,
		imgSrc: `images/0.jpg`,
	},
	methods: {
		previousImg: function () {
			this.number = ++this.number % 4;
			// this.imgSrc = `images/${this.number}.jpg`;
		},
		nextImg: function () {
			this.number = (--this.number + 4) % 4;
			// this.imgSrc = `images/${this.number}.jpg`;
		},
	},
});

// //点击小圆点切换图片
// const bindEventIndicator = function () {
// 	//选中小圆点的父元素
// 	const indiContainer = e(".slide-indicators");
// 	//利用事件委托，绑定在父元素上，获取事件
// 	bindEvent(indiContainer, "mouseover", function (event) {
// 		const target = event.target;
// 		//判断事件对象是否为小圆点
// 		if (target.classList.contains("slide-indi")) {
// 			//获取当前的小圆点的下标
// 			const index = target.dataset.indi;
// 			//选中图片框
// 			const slide = e(".slide-container");
// 			//设置当前轮播图片下标为小圆点下标
// 			slide.dataset.active = index;
// 			// log(index)
// 			//切换显示图片
// 			addClass(index, ".slide-image", "img-active");
// 			//切换对应下标的小圆点效果
// 			addClass(index, ".slide-indi", "white");
// 		}
// 	});
// };

// //切换图片
// const autoPlay = function () {
// 	//选中slide-container
// 	const slide = e(".slide-container");
// 	//得到当前总图片数和当前图片下标
// 	const numberOfImgs = parseInt(slide.dataset.imgs);
// 	const activeIndex = parseInt(slide.dataset.active);
// 	//计算出下一张图片下标
// 	let nextIndex = (activeIndex + 1) % numberOfImgs;
// 	//设置当前轮播图片下标
// 	slide.dataset.active = nextIndex;
// 	//切换显示图片
// 	addClass(nextIndex, ".slide-image", "img-active");
// 	//切换对应下标的小圆点效果
// 	addClass(nextIndex, ".slide-indi", "white");
// };

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
