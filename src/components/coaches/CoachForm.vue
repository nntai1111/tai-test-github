<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !validation.firstName }">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
      <p v-if="!validation.firstName" class="error-text">
        Please enter your first name
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !validation.lastName }">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
      <p v-if="!validation.lastName" class="error-text">
        Please enter your last name
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !validation.description }">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
      <p v-if="!validation.description" class="error-text">
        Please enter your description
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !validation.rate }">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control" :class="{ invalid: !validation.areas }">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!validation.areas" class="error-text">Please chose your Areas</p>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
      validation: {
        firstName: true,
        lastName: true,
        description: true,
        rate: true,
        areas: true,
        formValid: true,
      },
    };
  },
  methods: {
    submitForm() {
      this.validation.firstName = !!this.firstName.trim(); // !! là cách ngắn gọn để chuyển đổi bất kỳ giá trị nào thành kiểu boolean.
      this.validation.lastName = !!this.lastName.trim();

      this.validation.description = !!this.description.trim();
      this.validation.rate = !!this.rate;
      this.validation.areas = !!this.areas.length > 0;
      this.validation.formValid = Object.values(this.validation).every(
        (val) => val
      ); //[true, false, true, true, true, true]
      if (this.validation.formValid) {
        const formData = {
          first: this.firstName,
          last: this.lastName,
          desc: this.description,
          rate: this.rate,
          areas: this.areas,
        };

        this.$emit('save-data', formData);
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.error-text {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>