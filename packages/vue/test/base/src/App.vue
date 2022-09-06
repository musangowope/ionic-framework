<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, useIonRouter } from '@loveless/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup() {
    (window as any).debugIonRouter = useIonRouter();
  }
});
</script>
