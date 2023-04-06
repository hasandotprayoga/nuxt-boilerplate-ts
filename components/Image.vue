<template>
  <img :src="src" />
</template>

<script setup>
import { joinURL } from "ufo";

const props = defineProps({
  src: String,
});

const config = useRuntimeConfig();

const appCdnUrl = config.public.appCdnUrl;

const src = computed(() => joinURL(appCdnUrl, props.src));
</script>
