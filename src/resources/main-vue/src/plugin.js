import Lodash from "lodash";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default {
  async install (Vue) {
    Vue.config.productionTip = false;
    Vue.prototype.$lodash = Lodash;
    Vue.use(Element, {size: "small", zIndex: 3000});
  }
};
