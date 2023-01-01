import Player from "@vimeo/player";
import { throttle } from "lodash";
import { save, load } from "./localStorage.js";

const video = document.querySelector("#vimeo-player");
const key = "videoplayer-current-time";
const options = {
  loop: true,
  autoplay: true,
  controls: false,
  muted: true,
};

const player = new Player(video, options);

player.on(
  "timeupdate",
  _.throttle((obj) => {
    save(key, obj.seconds);
  }),
  500
);

window.onload = () => {
  const s_seconds = load(key);
  s_seconds === undefined ? 0 : s_seconds;

  player
    .setCurrentTime(s_seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      console.log(error);
    });
};
