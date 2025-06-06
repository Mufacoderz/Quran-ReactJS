
import bgImage from '/src/assets/cardfix.jpg';


type VerseProps = {
    verse: string;
    surah: string;
}

function Verse({verse, surah}: VerseProps) {
    return(
        <div style={{ backgroundImage: `url(${bgImage})` }} className=" p-4 rounded-2xl bg-cover bg-no-repeat min-h-[155px] text-left flex flex-col justify-between gap-2">
            <div>
                <p className="text-xs text-light md:text-base">📖 A Verse for You</p>
                <p className="text-sm text-light font-semibold md:text-xl">{verse}</p>
            </div>
            <p className="text-xs text-light font-light md:text-base">{surah}</p>
        </div>
    )
}

export default Verse