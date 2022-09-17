<template>
  <!-- navbar left of three view such as Coordinator , Teacher , Student -->
  <div class="flex container">
    <div
      class="bg-sky-500 flex-none w-50 lg:relative w-60 text-white p-3 sticky top-0 h-screen"
    >
      <div class="profile_info">
        <slot name="img"></slot>
      </div>
      <!-- aside for group slot of router -->
      <aside class="p-5 m-auto">
        <ul class="font-bold text-white">
          <slot name="manageStudent"></slot>
          <slot name="manageTeacher"></slot>
          <slot name="manageStudentFollowUp"></slot>
          <slot name="studentFollowUpHistory"></slot>
        </ul>
        <ul class="font-bold text-white">
          <li class="m-3">
            <slot name="viewProfile"></slot>
          </li>
        </ul>
      </aside>
    </div>
    <div class="grow h-14 w-full">
      <!-- navbar top -->
      <NavbarView></NavbarView>
      <!-- router-view that it is children of Coordinator Teacher and Student -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavbarView from "@/components/NavBar/NavbarView.vue";
export default {
  components: {
    NavbarView: NavbarView,
  },
};
</script>
<style scoped></style>
