<template>
  <div
    class="
      m-auto
      relative
      bg-gray-100
      p-5
      shadow-md
      w-11/12
      sm:rounded-lg
      mt-3
      h-screen
      overflow-y-scroll
    "
  >
    <!-- Leave Comment box -->

    <label for="chat" class="sr-only">Your message</label>
    <div
      class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700"
    >
      <textarea
        id="chat"
        rows="1"
        class="
          resize-none
          block
          mx-4
          p-2.5
          w-full
          text-sm text-gray-900
          bg-white
          rounded-lg
          border border-gray-300
          focus:ring-blue-500 focus:border-blue-500
          dark:bg-gray-800
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
        "
        placeholder="Your message..."
        v-model="storeData.leaveComment"
      ></textarea>
    </div>

    <!-- Comment list table -->
    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          bg-gray-200
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th class="py-3 px-6">Date & Time</th>
          <th class="py-3 px-6 border border-slate-300">
            Technical
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-6 border border-slate-300">
            English
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-2 border border-slate-300">
            PL
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
          <th class="py-3 px-3 border border-slate-300">
            Other
            <button
              @click="storeData.addComment()"
              type="submit"
              class="
                inline-flex
                justify-center
                p-2
                text-blue-600
                rounded-full
                cursor-pointer
                hover:bg-blue-100
                dark:text-blue-500 dark:hover:bg-gray-600
              "
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody v-for="comment in storeData.comments" :key="comment">
        <tr v-if="comment.user.role!=1"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="py-3 px-2 text-center border border-slate-300">
            <p>
              {{ comment.created_at }}
            </p>
       
          </td>

          <td class="py-3 px-6 text-justify border border-slate-300">
            <p v-if="comment.user.teachers!=null && (comment.user.teachers.position=='WEB Trainer')" >
              <b>
              {{ comment.user.first_name +' '+ comment.user.last_name}}:
              </b>
              {{comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>

          <td class="py-3 px-6 text-justify border border-slate-300">
          
            <p v-if=" comment.user.teachers!=null && comment.user.teachers.position== 'English Trainer'">
              <b>
              {{ comment.user.first_name +' '+  comment.user.last_name}}:

              </b>
              {{comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>

          <td class="py-4 px-5 text-justify border border-slate-300">
            <p v-if=" comment.user.teachers!=null && comment.user.teachers.position== 'PL Trainer'">
              <b>
              {{ comment.user.first_name +' '+  comment.user.last_name}}:
              </b>
              {{comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>
          <td class="py-3 px-2 text-justify border border-slate-300">
            <p v-if="(comment.user.teachers!=null &&comment.user.teachers.position=='Social Affair')||comment.user.role==3">
              <b>
              {{ comment.user.first_name +' '+  comment.user.last_name}}:
              </b>
              {{ comment.paragraph }}
            </p>
            <p v-else class="text-center">N/A</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { studentstore } from "../../../store/index";
import { onMounted } from "vue";
const storeData = studentstore();

onMounted(() => {
  storeData.getComment();
});
</script> 