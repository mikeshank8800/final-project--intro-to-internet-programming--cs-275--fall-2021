window.onload = () => {
    let leftArrow = document.getElementById(`left-arrow`);
    let rightArrow = document.getElementById(`right-arrow`);
    document.onkeydown = arrowKeys;

    let slide = 0;
    let slideOriginal = document.getElementById(`original`);
    let slideRed = document.getElementById(`red`);
    let slideGreen = document.getElementById(`green`);
    let slideBlue = document.getElementById(`blue`);
    let slideBlack = document.getElementById(`black`);

    slideRed.classList.add(`startPosition`);
    slideGreen.classList.add(`startPosition`);
    slideBlue.classList.add(`startPosition`);
    slideBlack.classList.add(`startPosition`);

    leftArrow.style.visibility = `hidden`;
    leftArrow.disabled = `true`;
    rightArrow.style.visibility = `visible`;
    rightArrow.disabled = `false`;

    function previousSlide() {
        slide--;
        if(slide === 0) {
            leftArrow.style.visibility = `hidden`;
            leftArrow.disabled = `true`;
            rightArrow.style.visibility = `visible`;
            rightArrow.disabled = `false`;
        } else {
            leftArrow.style.visibility = `visible`;
            leftArrow.disabled = `false`;
            rightArrow.style.visibility = `visible`;
            rightArrow.disabled = `false`;
        }

        if(slide === 0) {
            slideRed.classList.remove(`currentSlide`);
            slideRed.classList.remove(`nextSlide`);
            slideRed.classList.add(`previousSlide`);
            slideOriginal.classList.add(`currentSlide`);
        } else if (slide === 1) {
            slideGreen.classList.remove(`currentSlide`);
            slideGreen.classList.remove(`nextSlide`);
            slideGreen.classList.add(`previousSlide`);
            slideRed.classList.add(`currentSlide`);
        } else if (slide === 2) {
            slideBlue.classList.remove(`currentSlide`);
            slideBlue.classList.remove(`nextSlide`);
            slideBlue.classList.add(`previousSlide`);
            slideGreen.classList.add(`currentSlide`);
        } else if (slide === 3) {
            slideBlack.classList.remove(`currentSlide`);
            slideBlack.classList.remove(`nextSlide`);
            slideBlack.classList.add(`previousSlide`);
            slideBlue.classList.add(`currentSlide`);
        } else {
            slideBlack.classList.add(`currentSlide`);
        }
    }

    function nextSlide() {
        slide++;
        if(slide === 4) {
            rightArrow.style.visibility = `hidden`;
            rightArrow.disabled = `true`;
            leftArrow.style.visibility = `visible`;
            leftArrow.style.disabled = `false`;
        } else {
            leftArrow.style.visibility = `visible`;
            leftArrow.disabled = `false`;
            rightArrow.style.visibility = `visible`;
            rightArrow.disabled = `false`;
        }

        if(slide === 4) {
            slideBlue.classList.remove(`currentSlide`);
            slideBlue.classList.add(`nextSlide`);
            slideBlack.classList.add(`currentSlide`);
        } else if (slide === 3) {
            slideGreen.classList.remove(`currentSlide`);
            slideGreen.classList.add(`nextSlide`);
            slideBlue.classList.add(`currentSlide`);
        } else if (slide === 2) {
            slideRed.classList.remove(`currentSlide`);
            slideRed.classList.add(`nextSlide`);
            slideGreen.classList.add(`currentSlide`);
        } else if (slide === 1) {
            slideOriginal.classList.remove(`currentSlide`);
            slideOriginal.classList.add(`nextSlide`);
            slideRed.classList.add(`currentSlide`);
        } else {
            slideOriginal.classList.add(`currentSlide`);
        }
    }

    leftArrow.onclick = () => {
        previousSlide();
    };

    rightArrow.onclick = () => {
        nextSlide();
    };

    function arrowKeys(e) {
        if (e.keyCode == `37`) {
            if(slide!=0) {
                previousSlide();
            }
        }
        else if (e.keyCode == `39`) {
            if(slide!=4) {
                nextSlide();
            }
        }
    }
};
