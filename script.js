var divs = document.querySelectorAll('.child').forEach(div=>{
    div.classList.add('noselect')
    
    div.addEventListener('click',event => {
        const audio = document.querySelector(`audio[data-key="${div.attributes[1].value}"]`)
        audio.currentTime =0
        audio.play()
    })


})

document.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime =0
    audio.play()
    
})