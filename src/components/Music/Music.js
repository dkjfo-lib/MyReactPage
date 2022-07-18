export default function Music(props) {
    const YTMusic = "https://music.youtube.com/watch?v="
    const spotify = "https://open.spotify.com/track/"
    return (
        <div>
            <h4>{props.name}</h4>
            <h5>{props.authors}</h5>
            {props.url_YTMusic && <a href={YTMusic + props.url_YTMusic}>YTMusic</a>}
            {props.url_Spotify && <a href={spotify + props.url_Spotify}>YTMusic</a>}
        </div>
    )
}