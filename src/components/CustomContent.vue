<template>
  <a-layout-content>
    <div style="line-height: 400px">
      Hi
    </div>
  </a-layout-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component<CustomContent>({
  name: "CustomContent"
})
export default class CustomContent extends Vue {}
</script>

<style></style>
