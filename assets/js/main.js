const sliderImages = document.querySelectorAll('img')
console.log(sliderImages);
document.addEventListener('scroll', (e) => {
    console.log('I scroll')
    //console.log(e)
    //window height
    //console.log(window)
    //console.log(window.innerHeight)
    //console.log(window.scrollY)
    //console.log('pic1', sliderImages[0].height)
    console.log('height between top browser and picture 1', sliderImages[0].offsetTop)
    // let showPicture = window.innerHeight + window.scrollY - sliderImages[0].height / 2
    // console.log('moment to shine', showPicture)
    // if (showPicture > sliderImages[0].offsetTop) {
    //     sliderImages[0].classList.add('active')
    // } else {
    //     sliderImages[0].classList.remove('active')
    // }
    sliderImages.forEach(elt => {
        let showPicture = window.innerHeight + window.scrollY - elt.height / 2
        console.log('moment to shine', showPicture)
        if (showPicture > elt.offsetTop) {
            elt.classList.add('active')
        } else {
            elt.classList.remove('active')
        }
    })
})