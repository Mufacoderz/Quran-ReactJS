
import bgImage from '/src/assets/VerseBackgroundImage.png';


type VerseProps = {
    verse: string;
    surah: string;
}

function Verse({verse, surah}: VerseProps) {
    return(
        <div style={{ backgroundImage: `url(${bgImage})` }} className=" p-4 rounded-2xl">
            <p className="font-xs text-light">📖 Your Daily Verse</p>
            <p className="font-sm text-light font-semibold">{verse}</p>
            <p className="font-xs text-light font-light">{surah}</p>
        </div>
    )
}

export default Verse