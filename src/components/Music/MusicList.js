import Music from "./Music";
import songs from "../../Data/songs";

export default function MusicList() {
    const Songs = songs.map(s => <Music {...s} />)
    return (
        <div>
            {Songs}
        </div>
    )
}