
import Photo from './assets/avatar.jpg'
import './App.css'
import Profile from './component/Profile'
import Verse from './component/Verse'

function App() {


  return (
    <>
   
    <p className="testing bg-amber-100 ">hello ucup dan dontol</p>

    <Profile greeting="Assalamualaikum" name="Ukhty wa Akhy" avatar={Photo} />
    <Verse 
      verse="“He said: ‘Therein you shall live, and therein you shall die, and from it you shall be brought out (i.e. resurrected).’”" 
      surah="Al-A'raaf (7:25)"/>


    

    </>
  )
}

export default App
