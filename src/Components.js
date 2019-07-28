import Vue from 'vue';

import LoaderBlock from "./components/Globals/LoaderBlock";
import Default from './Layouts/Default';
import Bare from './Layouts/Bare';

import FontAwesomeIcon from './fa.js';
import NavBar from './components/Navigation/Navbar';

Vue.component('loader-block', LoaderBlock);
Vue.component('default-layout', Default);
Vue.component('bare-layout', Bare);
Vue.component('nav-bar', NavBar);

Vue.component('font-awesome-icon', FontAwesomeIcon);
