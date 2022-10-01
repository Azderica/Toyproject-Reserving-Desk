<template>
  <a-layout-footer>
    <div>Footer</div>
  </a-layout-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component<CustomFooter>({
  name: "CustomFooter",
})
export default class CustomFooter extends Vue {}
</script>

<style></style>
