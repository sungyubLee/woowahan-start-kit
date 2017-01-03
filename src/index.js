import Woowahan from 'woowahan';
import MainView from './views/main/main';

global.$ = global.jQuery = Woowahan.$;

const app = new Woowahan();

const siteRouting = [
  {url: '/', view: MainView, container: '#root'}
]

const siteRoutingOption = { empty: page => { alert(`${page}는 없는 페이지!!`); } }

app.start(siteRouting, siteRoutingOption);
