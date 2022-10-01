<template>
  <a-layout-header class="header">
    <div class="logo">자리예약시스템</div>
    <a-menu
      theme="dark"
      mode="horizontal"
      style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        34F
      </a-menu-item>
      <a-menu-item key="2">
        35F
      </a-menu-item>
      <a-menu-item key="3">
        36F
      </a-menu-item>
      <a-menu-item key="4">
        37F
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component<CustomHeader>({
  name: "CustomHeader",
})
export default class CustomHeader extends Vue {
  private userName: string = "myepark";

  protected getSubtitle(): string {
    return this.userName + "님의 자리예약 시스템입니다.";
  }
}
</script>

<style></style>
