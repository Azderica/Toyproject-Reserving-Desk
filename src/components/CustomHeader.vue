<template>
  <a-layout-header class="header">
    <div class="logo">자리예약시스템</div>
    <a-menu
      theme="dark"
      mode="horizontal"
      v-model="curFloor"
      style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="34">
        34F
      </a-menu-item>
      <a-menu-item key="35">
        35F
      </a-menu-item>
      <a-menu-item key="36">
        36F
      </a-menu-item>
      <a-menu-item key="37">
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
  private curFloor: number = 34;
  private userName: string = "myepark";

  protected getSubtitle(): string {
    return this.userName + "님의 자리예약 시스템입니다.";
  }
}
</script>

<style></style>
