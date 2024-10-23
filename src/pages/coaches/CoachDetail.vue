<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <!-- <base-button link :to="contactLink">Contact</base-button> -->
          <base-button
            link
            v-if="isContact"
            :to="contactLink"
            @click="hideContactButton"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      isContact: true,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      // this.isContact = !this.isContact;
      return this.$route.path + '/contact';
    },
  },
  methods: {
    hideContactButton() {
      this.isContact = false; // Khi nhấn vào nút, biến isContact trở thành false
    },
    checkRoute() {
      // Kiểm tra nếu đường dẫn hiện tại chứa /contact
      if (this.$route.path.endsWith('/contact')) {
        this.isContact = false; // Ẩn nút nếu đúng
      }
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
    this.checkRoute();
  },
};
</script>