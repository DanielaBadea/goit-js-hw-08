import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const localStorageKey = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(function (event) {
    console.log('callback called!')
    localStorage.setItem(localStorageKey, event.seconds);
  }, 1000));

player.setCurrentTime(localStorage.getItem(localStorageKey) ?? 0);