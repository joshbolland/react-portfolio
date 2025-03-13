import { useState, useEffect } from "react";
import spotify from "./spotifylogo.png";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_SECRET_KEY;
const refresh_token = process.env.SPOTIFY_REFRESH_KEY;

//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async () => {
  const response = await fetch("/.netlify/functions/getSpotifyToken");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch access token");
  }

  return data;
};

//Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
    );

    //Fetching the response
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } else if (response.status === 204) {
      throw new Error("Currently Not Playing");
    }

    //Extracting the required data from the response into seperate variables
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist) => artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error) {
    console.error("Error fetching currently playing song: ", error);
    return error.message.toString();
  }
};

const NowPlaying = () => {
  //Hold information about the currently playing song
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    fetchNowPlaying();

    //The spotify API does not support web sockets, so inorder to keep updating the currently playing song and time elapsed - we call the API every second
    setInterval(() => {
      fetchNowPlaying();
    }, 1000);
  }, []);

  // let playerState = "";
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    scrubberSecondsPlayed = 0,
    scrubberSecondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = spotify;
  let title = "";
  let artist = "";

  if (nowPlaying != null && nowPlaying.title) {
    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    scrubberSecondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    scrubberSecondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else if (nowPlaying === "Currently Not Playing") {
    //If the response returns this error message then we print the following text in the widget
    // playerState = "OFFLINE";
    title = "User is";
    artist = "currently Offline";
    albumImageUrl = spotify;
  } else {
    //If the response wasn't able to fetch anything then we display this
    title = "Fetching song";
    artist = "Just a sec";
    albumImageUrl = spotify;
  }
  return (
    <div className="working-to">
      <p className="working-to-title">What I'm working to:</p>
      <div className="now-playing-card">
        <div className="album-art-col">
          <img
            className="album-art spin"
            src={albumImageUrl}
            alt="Album Art"
            style={{ width: "100px", borderRadius: "50%", padding: "10px" }}
          />
        </div>
        <div className="song-info-col">
          <p id="song-title">{title}</p>
          <p id="song-artist">{artist}</p>
          {correctTimeStamp(
            secondsPlayed,
            secondsTotal,
            minutesPlayed,
            minutesTotal
          )}
          <div className="scrubber">
            <div
              className="seconds-played"
              style={{
                width: `${
                  (scrubberSecondsPlayed / scrubberSecondsTotal) * 100
                }%`,
              }}
            ></div>
            <div className="total-seconds" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function correctTimeStamp(
  secondsPlayed,
  secondsTotal,
  minutesPlayed,
  minutesTotal
) {
  if (secondsPlayed < 10 && secondsTotal < 10) {
    return (
      <p>
        {minutesPlayed}:0{secondsPlayed}/{minutesTotal}:0{secondsTotal}
      </p>
    );
  } else if (secondsPlayed >= 10 && secondsTotal < 10) {
    return (
      <p>
        {minutesPlayed}:{secondsPlayed}/{minutesTotal}:0{secondsTotal}
      </p>
    );
  } else if (secondsPlayed < 10 && secondsTotal >= 10) {
    return (
      <p>
        {minutesPlayed}:0{secondsPlayed}/{minutesTotal}:{secondsTotal}
      </p>
    );
  } else {
    return (
      <p>
        {minutesPlayed}:{secondsPlayed}/{minutesTotal}:{secondsTotal}
      </p>
    );
  }
}

export default NowPlaying;
