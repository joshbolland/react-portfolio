import querystring from "querystring";
import { Buffer } from "buffer";
import fetch from "node-fetch";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

exports.handler = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_SECRET_KEY;
  const refresh_token = process.env.SPOTIFY_REFRESH_KEY;

  if (!client_secret || !refresh_token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Spotify API credentials" }),
    };
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

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

  const data = await response.json();

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ access_token: data.access_token }),
    };
  } else {
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  }
};
