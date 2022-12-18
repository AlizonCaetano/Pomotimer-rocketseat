import Controls from "./controls.js"
import Timer  from "./timer.js"
import Sounds from "./sounds.js"
import { 
    buttonPlay, 
    buttonPause, 
    buttonSet, 
    buttonStop, 
    buttonSoundOff, 
    buttonSoundOn, 
    minutesDisplay, 
    secondsDisplay 
} from "./elements.js"

const sound = Sounds()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    Sounds().pressButton()
  })
  
buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    Sounds().pressButton()
})
 
buttonStop.addEventListener('click', ()=>{
    controls.reset()
    timer.reset()
    Sounds().pressButton()
})

buttonSoundOn.addEventListener('click', ()=>{
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})


buttonSoundOff.addEventListener('click', ()=>{
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', ()=>{
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes){
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})