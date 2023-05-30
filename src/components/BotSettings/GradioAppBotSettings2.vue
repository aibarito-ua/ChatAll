<template>
  <v-list-subheader>{{ bot.getBrandName() }}</v-list-subheader>
  <v-list-item>
    <v-list-item-title>{{ $t("gradio2.url") }}</v-list-item-title>
    <v-list-item-subtitle>{{ $t("gradio2.urlPrompt") }}</v-list-item-subtitle>
    <v-text-field
      v-model="gradio2.url"
      outlined
      dense
      :placeholder="
        $t('settings.forExample', {
          example: 'https://*.hf.space, http://127.0.0.1:7861',
        })
      "
      @update:model-value="setGradio2({ url: $event })"
    ></v-text-field>
    <v-list-item-title>{{ $t("gradio2.fnIndex") }}</v-list-item-title>
    <v-list-item-subtitle>{{
      $t("gradio2.fnIndexPrompt")
    }}</v-list-item-subtitle>
    <v-text-field
      v-model="gradio2.fnIndex"
      outlined
      dense
      placeholder="0"
      @update:model-value="setGradio2({ fnIndex: $event })"
    ></v-text-field>
  </v-list-item>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Bot from "@/bots/huggingface/GradioAppBot2";

export default {
  data() {
    return {
      bot: Bot.getInstance(),
    };
  },
  methods: {
    ...mapMutations(["setGradio2"]),
  },
  computed: {
    ...mapState(["gradio2"]),
  },
};
</script>
