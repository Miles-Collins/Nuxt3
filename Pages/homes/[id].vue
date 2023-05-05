<script setup>
import { state } from "~/Services/HousesService";
import { housesService } from "~/Services/HousesService";

const {id} = useRoute().params
await housesService.getHouse(id)
const house = computed(() => state.house.value)

</script>

<template>

  <NavBar />

  <div class="container-fluid">
    <div v-if="house"  class="row">
      <div class="col-12 col-md-6 mt-5">
        <img :src="house.imgUrl" alt="">
      </div>
      <div class="col-12 col-md-6 mt-5">
        <div class="row">
          <div class="col-12">
            <p class="fs-2">This {{ house.levels }} story house was built in {{ house.year }}. It's large space holds {{ house.bedrooms }} bedrooms, and {{ house.bathrooms }} baths. Currently the home owners are looking to get ${{ house.price }} out of it, but are willing to negotiate. </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">
        <h1>Loading...</h1>
      </div>
    </div>
  </div>


</template>

<style scoped>

img {
  width: 100%;
  height: 75dvh;
}

.maxHeight {
  height: 100dvh;
} 

</style>