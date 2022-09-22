<template>
    <div class="card  m-auto bg-gray-100  mt-5 p-4 rounded w-9/12"  >
      <div v-for="student in studentStore.students" :key="student"  class=" mb-2 flex justify-between items-center shadow p-3 rounded-lg bg-white" >
        <div class="flex items-center ">
          <img src="../../assets/male_logo.jpg" class="w-10 rounded-full m-auto mt-5" alt="">
          <h1 class="ml-2">
                <slot name="name"></slot>
          </h1>
        </div>
        <div >
          <h1>
            <slot name="class"></slot>
          </h1>
        </div>
        <div >
            <slot name="icon"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>