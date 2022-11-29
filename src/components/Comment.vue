<template>
    <h1>Comments</h1>
    <div v-if="!cmptComments">

        <div class="flex">
            <div role="status"
                class="w-screen p-4 space-y-4  divide-y divide-gray-200  animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <div class="flex justify-between items-center pt-4">
                    <div>
                        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-96 mb-2.5"></div>
                        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    <div v-else>

        <div class="flex">
            <div class="py-2 inline-block w-screen">
                <div class="overflow-x-auto ">
                    <table class="w-full">
                        <thead class="border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left w-10">
                                    No
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left w-88">
                                    Email
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left">
                                    Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-3 text-left w-44">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b" v-for="comment, index of cmptComments" :key="comment.id">
                                <td class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ index + 1 }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                                    {{ comment.email }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                                    {{ comment.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-3 whitespace-nowrap">
                                    Cell
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            comments: null
        }
    },
    computed: {
        cmptComments() {
            // this.comments = []
            axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
                // console.log(response)
                this.comments = response.data
            })
            // console.log(this.comments)
            return this.comments
        }
    }
}
</script>