import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(function (event) {
    console.log('callback called!')
    localStorage.setItem(KEY, event.seconds);
  }, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)) ?? 0);