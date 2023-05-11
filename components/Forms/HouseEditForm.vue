<script setup>
import { housesService } from "~/Services/HousesService";

const {id} = useRoute().params


const editable = ref({})

async function editHouse() {
    let houseBody = editable.value
    await housesService.editHouse(houseBody, id)
}

</script>

<template>

 <div class="form-body bg-dark">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Edit Home</h3>
                        <p>Fill in the correct data below.</p>
                        <form @submit.prevent="editHouse">
                          <div class="row">
                            <div class="col-md-4">
                              <label class="form-label" for="bedrooms">Bedrooms:</label>
                                <select id="bedrooms" v-model="editable.bedrooms" class="form-select m-0" >
                                      <option selected disabled value="">Bedrooms</option>
                                      <option value=1>1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                            </div>

                               <div class="col-md-4">
                              <label class="form-label" for="bathrooms">Bathrooms:</label>
                                <select id="bathrooms" v-model="editable.bathrooms" class="form-select m-0" >
                                      <option selected disabled value="">Bathrooms</option>
                                      <option value=1>1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                            </div>

                           <div class="col-md-4">
                            <label class="form-label" for="levels">Levels:</label>
                                <select v-model="editable.levels" id="levels" class="form-select m-0" >
                                      <option selected disabled value="">Levels</option>
                                      <option  value=1>1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                           </div>


                           <div class="col-md-6 mt-2">
                            <label class="form-label" for="houseImage">House Image:</label>
                              <input v-model="editable.imgUrl" class="form-control m-0" type="text" name="houseImage" placeholder="House Image..." >
                           </div>

                           <div class="col-md-3 mt-2">
                            <label class="form-label" for="">Year:</label>
                            <input v-model="editable.year" class="form-control m-0" name="year"  type="number" placeholder="Year...">
                           </div>

                           <div class="col-md-3 mt-2">
                            <label class="form-label" for="">Price:</label>
                            <input v-model="editable.price" class="form-control m-0" name="price"  type="number" placeholder="Price...">
                           </div>

                           <div class="col-md-12 mt-2">
                            <label  for="description">House Description:</label>
                            <textarea v-model="editable.description" class="form-control" name="description" id="description" cols="30" rows="10"></textarea>
                           </div>

                            <div class="form-button mt-3">
                                <button data-bs-dismiss="modal" id="submit" type="submit" class="btn btn-primary">Edit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>


</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

*, body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

html, body {
    height: 100%;
    background-color: #152733;
    overflow: hidden;
}


.form-holder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 75vh;
}

.form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
}

.form-content .form-items {
    border: 3px solid #fff;
    padding: 40px;
    display: inline-block;
    width: 95%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: left;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.form-content h3 {
    color: #fff;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.form-content h3.form-title {
    margin-bottom: 30px;
}

.form-content p {
    color: #fff;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 30px;
}


.form-content label, .was-validated .form-check-input:invalid~.form-check-label, .was-validated .form-check-input:valid~.form-check-label{
    color: #fff;
}

.form-content input[type=text], .form-content input[type=password], .form-content input[type=email], .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 16px;
}


.btn-primary{
    background-color: #6C757D;
    outline: none;
    border: 0px;
     box-shadow: none;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
    background-color: #495056;
    outline: none !important;
    border: none !important;
     box-shadow: none;
}

.form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
}

.form-content textarea:hover, .form-content textarea:focus {
    border: 0;
    background-color: #ebeff8;
    color: #8D8D8D;
}

.mv-up{
    margin-top: -9px !important;
    margin-bottom: 8px !important;
}

.invalid-feedback{
    color: #ff606e;
}

.valid-feedback{
   color: #2acc80;
}

</style>