import Vue from "vue";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "**.vue" {
  import Vue from "vue";
  export default Vue;
}

// declare var _: _.LoDashStatic;

declare module 'vue/types/vue' {
  interface Vue {
    $eventBus: Vue;
  }
}
