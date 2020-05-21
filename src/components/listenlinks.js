import React from "react"
import spotify from "../../content/assets/listen-on-spotify.png"
import itunes from "../../content/assets/listen-on-itunes.png"
import overcast from "../../content/assets/listen-on-overcast.png"

const ListenLinks = () => {
        return (
            <div className="mt-5 flex sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <a className="w-1/4 m-2" href="https://open.spotify.com/show/3yUXDikALYz3dDYhmKaXRs"> <img src={spotify} /></a>
                  <a className="w-1/4 m-2" href="https://podcasts.apple.com/se/podcast/kompilator/id1455198510?mt=2"><img src={itunes} /></a>
                  <a className="w-1/4 m-2" href="https://overcast.fm/itunes1455198510/kompilator"><img src={overcast} /></a>
                </div>
        );
}

export default ListenLinks