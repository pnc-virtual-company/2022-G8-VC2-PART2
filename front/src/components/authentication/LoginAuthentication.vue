<template>
    <section class=" gradient-form bg-white-200   ">
        <div class="container p-3 ">
          <div class="flex justify-center items-center flex-wrap  g-6 text-gray-800">
            <div class="xl:w-10/12">
              <div class="block shadow rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
            
                    <div
                    class="lg:w-6/12 flex  items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style="
                    background: linear-gradient(to right, #87d3f8, #89cff0, #87ceeb, #93ccea);
                    "
                    >
                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 class="text-xl font-semibold mb-6">Welcome To Student Follow Up System</h4>
                      <p class="text-sm">
                        Welcome to our system you can login as student 
                        teacher and Coordinator
                      </p>
                     
                    </div>
                   
                  </div>
                  <div class="lg:w-6/12">
                    <div class=" md:mx-6 p-3">
                      <div class="text-center">
                        <img
                          class="mx-auto w-48"
                          src="@/assets/pnc_logo.png"
                          alt="logo"
                        />
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1"> <strong>Student Follow Up System</strong> </h4>
                      </div>
                      <form @submit.prevent="loginStore.login">
                        <p class="mb-4">Please login to your account</p>
                        <div class="mb-4">
                          <!-- email -->
                          <input
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            v-model="loginStore.email"
                          />
                        </div>
                        <!-- password login and hide show password -->
                        <div class="mb-4">
                          <span v-if="loginStore.showPassword"  class="flex px-2 py-1 border rounded justify-center align-items-center">
                            <input 
                            type="text"
                            class="border-none form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="password"
                            v-model="loginStore.password"
                            />
                            <span  class="flex items-center p-1">
                              <svg @click="loginStore.hideShowPassword"  class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                              </svg>                          
                            </span>
                            
                          </span>
                          <span v-else class="border px-2 py-1 flex rounded">
                            <input
                              type="password"
                              class="border-none form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Password"
                              v-model="loginStore.password"
                              />
                              <span class="flex items-center p-1">
                                <svg @click="loginStore.hideShowPassword"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                              </span>
                          </span>
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class="px-6 py-2.5 bg-sky-500 font-medium text-xs text-white leading-tight uppercase rounded shadow-md   focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                          >
                            <strong >Login</strong>
                          </button>
                          <router-link to="/forgetPassword"><a class="text-gray-500" href="#!">Forgot password?</a></router-link>
                        </div>
                      </form>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>
import {userStore} from "@/store/coordinatorStore/coordinator/coordinator"
const loginStore = userStore()
</script>

<style  scoped>
.shadow{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
}
</style>