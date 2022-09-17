<template>
    <div class="overflow-x-auto m-auto relative bg-gray-100 p-5 shadow-md w-11/12 sm:rounded-lg mt-3  h-screen overflow-y-scroll">
      <table class="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th  class="py-3 px-6 ">
                    <slot name="col1"></slot>
                </th>
                <th  class="py-3 px-6 ">
                    <slot name="col2"></slot>
                </th>
                <th  class="py-3 px-6 ">
                    <slot name="col3"></slot>
                </th>
                <th  class="py-3 px-2">
                    <slot name="col4"></slot>
                </th>
                <th  class="py-3 px-3">
                    <slot name="col5"></slot>
                </th>
                <th  class="py-3 px-6">
                    <slot name="col6"></slot>
                </th>
            </tr>
        </thead>
        <tbody >
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                <td  class="py-3 px-2 ">
                    <slot name="row1"></slot>
                </td>
                <td >
                  <div class=" py-4 px-6 text-right ">
                    <slot name="row2"></slot>
                  </div>
                </td>
                <td  class="py-3 px-6 ">
                    <slot name="row3"></slot>
                </td>
                <td class="py-3 px-6 ">
                    <slot name="row4"></slot>
                </td>
                <td class="py-4 px-5 ">
                    <slot name="row5"></slot>
                </td>
                <td class="py-3 px-2 flex justify-end ">
                    <slot name="row6"></slot>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>
<style>

</style>