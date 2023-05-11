<script setup>
import { state } from "~/Services/HousesService";
import { housesService } from "~/Services/HousesService";
import HouseEditForm from "~/components/Forms/HouseEditForm.vue";

const {id} = useRoute().params
await housesService.getHouse(id)
const house = computed(() => state.house.value)

async function deleteHouse() {
  await housesService.deleteHouse(id)
}

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        
        <button @click="deleteHouse" class="btn btn-outline-dark">Delete House</button>
        <button data-bs-target="#editHouse" data-bs-toggle="modal" class="btn btn-outline-dark">Edit House</button>
        
      </div>
    </div>
    <div v-if="house"  class="row">
      <div class="col-12 col-md-6 mt-5">
        <img class="rounded" :src="house.imgUrl" alt="">
      </div>
      <div class="col-12 col-md-6 mt-5">
        <div class="row">
          <div class="col-12">
            <p class="fs-6">{{house.description}} </p>
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

  <Modal id="editHouse">
    <HouseEditForm />
  </Modal>


</template>

<style scoped>

img {
  width: 100%;
  height: 75dvh;
  object-fit: cover;
  box-shadow: 0px 0px 10px black;
}

.maxHeight {
  height: 100dvh;
} 

</style>