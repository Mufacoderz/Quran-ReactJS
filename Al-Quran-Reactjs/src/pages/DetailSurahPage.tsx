import DetailSurahContainer from "../component/DetailSurah/DetailSurahContainer"
import {Link} from "react-router-dom"

function DetailSurahPage(){
    return(
        <>
        <div className="p-5 text-left">
        <Link to="/" className="text-light">
          ← Daftar Surah
        </Link>
      </div>
        <DetailSurahContainer/>
        </>
    )
}

export default DetailSurahPage