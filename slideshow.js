//点击前后按钮切换图片
const bindEventSlide = function() {
    const selector = '.slide-button'
    bindAll(selector, 'click', function(event){
        console.log('click next')
        // 找到 slide div
        const slide = event.target.parentElement
        // 得到图片总数和当前图片下标
        const numberOfImgs = parseInt(slide.dataset.imgs)
        const activeIndex = parseInt(slide.dataset.active)
        const target = event.target
        // 求出下一张图片的 id
        //分别给上一张和下一张两个按钮设置了不同的id
        //如果点击了下一张按钮，就给图片下标加1
        let nextIndex
        if(target.id == "slide-button2") {
            nextIndex = (activeIndex + 1) % numberOfImgs
        }
        //如果点击了上一张按钮，就给图片下标减1
        if(target.id == "slide-button1") {
            //避免负数
            nextIndex = (activeIndex - 1 + numberOfImgs) % numberOfImgs
        }
        // 设置父节点的 data-active
        slide.dataset.active = nextIndex
        const nextSelector = '#id-image-' + String(nextIndex)
        // 删除当前图片的 class 给下一张图片加上 class
        const className = 'img-active'
        removeClassAll(className)
        const img = e(nextSelector)
        img.classList.add(className)
        //切换对应下标的小圆点效果
        addClass(nextIndex, '.slide-indi', 'white')
    })
}

//点击小圆点切换图片
const bindEventIndicator = function() {
    const indiContainer = e('.slide-indicators')
    bindEvent(indiContainer, 'mouseover', function(event){
        const target = event.target
        if (target.classList.contains('slide-indi')) {
            const index = target.dataset.indi
            const slide = e('.slide-container')
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
    const slide = e('.slide-container')
    //得到当前总图片数和当前图片下标
    const numberOfImgs = parseInt(slide.dataset.imgs)
    const activeIndex = parseInt(slide.dataset.active)
    //计算出下一张图片下标
    let nextIndex = (activeIndex + 1) % numberOfImgs
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
        //清除定时器
        clearInterval(timer)
        timer = null
    })
    bindEvent(slide, 'mouseleave', function() {
        log('start auto play')
        //设定定时器
        timer = setInterval(autoPlay, 3000)
    })
}
//设置定时器自动播放
let timer = setInterval(autoPlay, 3000)

const __main = function() {
    bindEventSlide()
    bindEventIndicator()
    bindEventSetAutoPlay()
}

__main()