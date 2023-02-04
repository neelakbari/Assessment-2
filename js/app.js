slides = document.querySelectorAll('.slide');
btns = document.querySelectorAll('.btn');
nextBtn = document.querySelector(".nextbtn");
prevBtn = document.querySelector(".prevbtn");
var currentSlide = 0;

// ----------javascript for btn click----
var manualNav = function(manual){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    btns.forEach(btn => {
        btn .classList.remove('active');
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');


}


btns.forEach((element,index) => {
    element.addEventListener("click",()=>{
        manualNav(index)
        currentSlide = index
    })     
});

// ----------javascript for next arrow----

nextBtn.addEventListener("click",()=>{
    slides.forEach(slide => {
        slide.classList.remove('active');
        btns.forEach(btn => {
            btn .classList.remove('active');
    });
    });
    
    currentSlide++;
    if(currentSlide > (slides.length -1))
    {
        currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
    btns[currentSlide].classList.add('active');
})
    

// ----------javascript for prev arrow----
prevBtn.addEventListener("click",()=>{
    slides.forEach(slide => {
        slide.classList.remove('active');
        btns.forEach(btn => {
            btn .classList.remove('active');
    });
    });
    currentSlide--;
    if(currentSlide < 0)
    {
        currentSlide = (slides.length - 1)
        
    }
    slides[currentSlide].classList.add('active');
    btns[currentSlide].classList.add('active');

})


