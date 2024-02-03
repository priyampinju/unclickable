const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const refBtn = document.querySelector('.refresh')

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yeeeiii finally 🤩🎉';
    yesBtn.style = 'display:none'
    noBtn.style = 'display:none'
    refBtn.style = 'display:inline'
    
    confetti();
})

function reloadd() {
    location.reload()
}

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px'; 
})

