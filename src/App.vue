<template>
  <div id="app">
    <template>
      <div id="components-layout-demo-top-side-2">
        <a-layout>
          <custom-header />
          <a-layout>
            <custom-content />
            <custom-side />
          </a-layout>
          <custom-footer />
        </a-layout>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomFooter from "./components/CustomFooter.vue";
import CustomSide from "./components/CustomSide.vue";
import CustomContent from "./components/CustomContent.vue";
import CustomHeader from "./components/CustomHeader.vue";

@Component<App>({
  name: "App",
  components: { CustomContent, CustomSide, CustomHeader, CustomFooter },
})
export default class App extends Vue {
}
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
