<template>
  <div id="app">
    <template>
      <div id="components-layout-demo-basic">
        <a-layout>
          <a-layout-header>
            <CustomHeader />
          </a-layout-header>
          <a-layout>
            <a-layout-content>
              <CustomContent />
            </a-layout-content>
            <a-layout-sider>
              <CustomSide />
            </a-layout-sider>
          </a-layout>
          <a-layout-footer>
            <CustomFooter />
          </a-layout-footer>
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

@Component({
  name: "App",
  components: { CustomContent, CustomSide, CustomHeader, CustomFooter },
})
class App extends Vue {}

export default App;
</script>

<style></style>
