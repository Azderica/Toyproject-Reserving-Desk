<template>
  <div>
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="자리 예약 시스템"
      sub-title="this.getSubtitle()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
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
