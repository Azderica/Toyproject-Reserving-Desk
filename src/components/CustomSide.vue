<template>
  <a-layout-sider width="200" style="background: #fff">
    <div>
      Side
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component<CustomSide>({
  name: "CustomSide",
})
export default class CustomSide extends Vue {}
</script>

<style></style>
