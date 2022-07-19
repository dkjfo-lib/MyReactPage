export default function Music(props) {
    const YTMusic = "https://music.youtube.com/watch?v="
    const spotify = "https://open.spotify.com/track/"
    return (
        <div className="min-h-fit border-main w-full mb-2 px-4 py-1">
            <h4>{props.name}</h4>
            <h5>{props.authors}</h5>
            <div className="flex h-10 justify-between py-1">
                {props.url_YTMusic && <a href={YTMusic + props.url_YTMusic}><div className="bt-ref">YT MUSIC</div></a>}
                {props.url_Spotify && <a href={spotify + props.url_Spotify}><div className="bt-ref">SPOTIFY</div></a>}
            </div>
        </div>
    )
}