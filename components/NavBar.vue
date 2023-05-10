<script setup lang="ts">
import HouseForm from "~/components/Forms/HouseForm.vue";

const path = useRoute().path

console.log('Page Route', path);

const a : string = 'Miles'
</script>

<template>

<div class="container-fluid sticky-top bg-light">
  <nav>
    <div class="row p-2">
      <div class="col-2">
        <NuxtLink to="/"><button class="btn">Home</button></NuxtLink>
      </div>
      <div class="col-2"> <NuxtLink to="/cars"><button class="btn btn-outline">Cars</button></NuxtLink></div>
      <div class="col-2"> <NuxtLink to="/homes"><button class="btn">Houses</button></NuxtLink></div>
      <div class="col-2"> <NuxtLink to="/jobs"><button class="btn">Jobs</button></NuxtLink></div>
      <div v-if="path.includes('/homes')" class="col-2 offset-2 text-end"><button class="btn" data-bs-target="#houseModal" data-bs-toggle="modal">Sell House</button></div>
      <div v-if="path == '/cars'" class="col-2 offset-2"><button class="btn" data-bs-target="#carModal" data-bs-toggle="modal">Sell Car</button></div>
    </div>
  </nav>
</div>

  <Modal id="houseModal">
    <HouseForm />
  </Modal>


</template>

<style scoped>

  button:hover {
    background-color: rgba(0, 0, 0, 0.491);
    opacity: .75;
    color: white;
  }

</style>