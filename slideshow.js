//点击前后按钮切换图片
const bindEventSlide = function() {
    var selector = '.slide-button'
    bindAll(selector, 'click', function(event){
        console.log('click next')
        // 找到 slide div
        var slide = event.target.parentElement
        // 得到图片总数和当前图片下标
        var numberOfImgs = parseInt(slide.dataset.imgs)
        var activeIndex = parseInt(slide.dataset.active)
        var target = event.target
        // 求出下一张图片的 id
        //分别给上一张和下一张两个按钮设置了不同的id
        //如果点击了下一张按钮，就给图片下标加1
        if(target.id == "slide-button2") {
            var nextIndex = (activeIndex + 1) % numberOfImgs
        }
        //如果点击了上一张按钮，就给图片下标减1
        if(target.id == "slide-button1") {
            //避免负数
            var nextIndex = (activeIndex - 1 + numberOfImgs) % numberOfImgs
        }
        // 设置父节点的 data-active
        slide.dataset.active = nextIndex
        var nextSelector = '#id-image-' + String(nextIndex)
        // 删除当前图片的 class 给下一张图片加上 class
        var className = 'img-active'
        removeClassAll(className)
        var img = e(nextSelector)
        img.classList.add(className)
        //切换对应下标的小圆点效果
        addClass(nextIndex, '.slide-indi', 'white')
    })
}

//点击小圆点切换图片
const bindEventIndicator = function() {
    var indiContainer = e('.slide-indicators')
    bindEvent(indiContainer, 'mouseover', function(event){
        var target = event.target
        if (target.classList.contains('slide-indi')) {
            var index = target.dataset.indi
            var slide = e('.slide-container')
            slide.dataset.active = index
            log(index)
            //切换显示图片
            addClass(index, '.slide-image', 'img-active')
            //切换对应下标的小圆点效果
            addClass(index, '.slide-indi', 'white')
        }
    })
}

//切换图片
const autoPlay = function() {
    //选中slide-container
    var slide = e('.slide-container')
    //得到当前总图片数和当前图片下标
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)
    //计算出下一张图片下标
    var nextIndex = (activeIndex + 1) % numberOfImgs
    slide.dataset.active = nextIndex
    //切换显示图片
    addClass(nextIndex, '.slide-image', 'img-active')
    //切换对应下标的小圆点效果
    addClass(nextIndex, '.slide-indi', 'white')
}

//设置自动切换图片定时器
//设置鼠标移动到图片区域时清除自动播放定时器
const bindEventSetAutoPlay = function() {
    const slide = e('.slide-container')
    bindEvent(slide, 'mouseenter', function() {
        log('stop auto play')
        clearInterval(timer)
        timer = null
    })
    bindEvent(slide, 'mouseleave', function() {
        log('start auto play')
        timer = setInterval(autoPlay, 3000)
    })
}
//设置定时器自动播放
var timer = setInterval(autoPlay, 3000)

const __main = function() {
    bindEventSlide()
    bindEventIndicator()
    bindEventSetAutoPlay()
}

__main()