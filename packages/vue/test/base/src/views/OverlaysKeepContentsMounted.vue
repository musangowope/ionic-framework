<template>
  <ion-page data-pageid="overlays-automount">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Overlays - Auto Mount</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <ion-button id="open-auto-mount-modal">Open Auto Mount Modal</ion-button>

      <ion-button id="open-auto-mount-popover">Open Auto Mount Popover</ion-button>

      <br /><br />

      <ion-modal
        id="auto-mount-modal"
        :keep-contents-mounted="true"
        trigger="open-auto-mount-modal"
      >
        <ModalContent :title="overlayProps.title"></ModalContent>
      </ion-modal>

      <ion-popover
        id="auto-mount-popover"
        :keep-contents-mounted="true"
        trigger="open-auto-mount-popover"
      >
        <PopoverContent :title="overlayProps.title"></PopoverContent>
      </ion-popover>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonPopover,
} from '@monorepo-starter/vue';
import { defineComponent } from 'vue';
import ModalContent from '@/components/ModalContent.vue';
import PopoverContent from '@/components/PopoverContent.vue';

export default defineComponent({
  components: {
    ModalContent,
    PopoverContent,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
    IonPopover,
  },
  setup() {
    const overlayProps = {
      title: 'Custom Title'
    }

    return {
      overlayProps
    }
  }
});
</script>
