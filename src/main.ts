import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import axios from 'axios'
import * as moment from "moment/moment";
import 'moment/locale/ko';

class Main {
  public run(): void {
    Vue.use(Antd);
    Vue.config.productionTip = true;
    Vue.config.devtools = true;
    // Vue.prototype.$eventBus = new Vue();
    // Vue.prototype._ = _;
    // Vue.prototype.moment = moment;

    const app = new Vue({
      el: '#app',
      render: h => h(App)
    });
  }
}

// @ts-ignore
const main = new Main();

main.run();
