<template>
  <v-collapse :active-index="activeIndexSimple" :bordered="false">
    <v-panel header="This is panel header 1" index="1">
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </v-panel>
    <v-panel header="This is panel header 2" index="2">
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </v-panel>
    <v-panel header="This is panel header 3" index="3">
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </v-panel>
  </v-collapse>
</template>

<script>
export default {
name: "Anonymous",
  data() {
    return {
      activeIndexSimple:['1'],
    }
  },
}
</script>

<style scoped>

</style>
