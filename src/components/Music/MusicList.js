import Music from "./Music";
import songs from "../../Data/songs";

export default function MusicList() {
    const Songs = songs.map(s => <Music {...s} />)
    return (
        <div className="
        rounded-xl 
        bg-gray-900 
        h-80 w-3/4
        border-2 border-solid border-gray-400">
            <div className="
            h-full w-full
            rounded-[0.8rem]
            bg-gray-900 
            overflow-y-scroll no-scrollbar
            flex flex-col items-center
            p-3 pb-1  
            border-[12px] border-solid border-gray-900">
                {Songs}
            </div>
        </div>
    )
}