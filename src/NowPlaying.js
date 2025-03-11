import { useState, useEffect } from "react";
import querystring from "querystring";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const client_id = "e3369c6d10ca493bab510663de7d0483";
const client_secret = "ed9a1585e54c4dec98328ff9b313b259";
const refresh_token =
  "AQDV3U6QgiE-Qpg5RZgys0ruzaPtGD4LeyPaTtaim_MULpiml6eSGkYbYqZNpjrGlYz7o0d3GPe2M2w6-b-MTJ6F9b0V-vrbwltAv-VmZNqQ9IjHRODPuAyqm_wcMJlq_U0";

//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async (
  client_id,
  client_secret,
  refresh_token
) => {
  //Creates a base64 code of client_id:client_secret as required by the API
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  //The response will contain the access token
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
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

    //If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } else if (response.status === 204) {
      //The response was fetched but there was no content
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
      // console.log(data)
    };

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
  let albumImageUrl = "./images/albumCover.png";
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
  } else {
    //If the response wasn't able to fetch anything then we display this
    title = "Failed to";
    artist = "fetch song";
  }
  return (
    <div className="now-playing-card">
      <div className="album-art-col">
        <img
          className="album-art"
          src={albumImageUrl}
          alt="Album Art"
          style={{ width: "200px", borderRadius: "10px 0px 0px 10px" }}
        />
      </div>
      <div className="song-info-col">
        <p id="song-title">{title}</p>
        <p id="song-artist">{artist}</p>
        {
          //Check if message failed
          secondsPlayed < 10 ? (
            <p>
              {minutesPlayed}:0{secondsPlayed}/{minutesTotal}:{secondsTotal}
            </p>
          ) : (
            <p>
              {minutesPlayed}:{secondsPlayed}/{minutesTotal}:{secondsTotal}
            </p>
          )
        }
        <div className="scrubber">
          <div
            className="seconds-played"
            style={{
              width: `${(scrubberSecondsPlayed / scrubberSecondsTotal) * 100}%`,
            }}
          ></div>
          <div className="total-seconds" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
