import heroImage from '../assets/herobg2.jpg';
import Photo from '../assets/avatar.jpg'

import Profile from './Profile'
import Verse from './Verse'

function Hero(){
    return(
        <div className="relative">
            <div style={{ backgroundImage: `url(${heroImage})` }} className="absolute top-0 left-0 w-full h-60 bg-cover bg-center bg-no-repeat rounded-b-2xl "></div>
            <div className="relative z-10 px-5 pt-8 flex flex-col gap-8">
                <Profile greeting="Assalamualaikum" name="Ukhty wa Akhy" avatar={Photo} />
                <Verse 
                    verse="Did you think that We created you aimlessly and that you would not be returned to Us?”" 
                    surah="Al-Mu'minun : 115"/>
            </div>
        </div>
    )
}

export default Hero