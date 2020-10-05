import * as sapper from '@sapper/app';
import 'materialize-css/dist/js/materialize.js';

M.AutoInit();

sapper.start({
  target: document.querySelector('#sapper'),
});
