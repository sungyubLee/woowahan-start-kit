import Woowahan from 'woowahan';
import HelloView from './views/hello-view';

global.$ = global.jQuery = Woowahan.$;

var app = new Woowahan();

app.start({
  url: '/',
  container: '#root',
  view: HelloView
});
