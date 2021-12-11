<template>
  <div id="info_main">
      <InfoCard/> 
      <FormCard/>
  </div>
</template>

<script>
import InfoCard from "./../components/InfoCard.vue";
import FormCard from "./../components/FormCard.vue";
export default {
  name: "InfoPage",
  components: {
    FormCard,InfoCard
  },
};
</script>
