<template>
    <div id="Quizzes" class="mt-10 px-3 md:container mx-auto">
        <h2 class="text-xl font-bold border-l-8 rounded pl-5 border-green-500">แบบทดสอบออนไลน์</h2>

        <div v-for="quizz in quizzesStore.getQuizzes" class="mt-5 border rounded-3xl p-5 shadow-md">
            <p class="font-semibold">{{ quizz.quizzTest[questionIdx].no }}. <span class="text-pretty ml-1">{{
                quizz.quizzTest[0].question }}</span>
            </p>

            <div class="mt-3 ml-4 grid grid-cols-1 gap-3 md:grid-cols-2 text-sm">
                <p
                    class="cursor-pointer w-full hover:bg-yellow-200 active:text-center active:shadow-md hover:text-green-600 border border-yellow-300  rounded-3xl px-4 py-2 active:ring-2 active:ring-green-600 active:bg-white active:font-bold" @click="nextQuizze(quizz.quizzTest.length, quizz.quizzTest[questionIdx].answer)">
                    1.
                    <span class="ml-3">{{ quizz.quizzTest[questionIdx].option_1 }}</span>
                </p>
                <p
                    class="cursor-pointer w-full hover:bg-yellow-200 active:text-center active:shadow-md hover:text-green-600 border border-yellow-300  rounded-3xl px-4 py-2 active:ring-2 active:ring-green-600 active:bg-white active:font-bold">
                    2.
                    <span class="ml-3">{{ quizz.quizzTest[questionIdx].option_2 }}</span>
                </p>
                <p
                    class="cursor-pointer w-full hover:bg-yellow-200 active:text-center active:shadow-md hover:text-green-600 border border-yellow-300  rounded-3xl px-4 py-2 active:ring-2 active:ring-green-600 active:bg-white active:font-bold">
                    3.
                    <span class="ml-3">{{ quizz.quizzTest[questionIdx].option_3 }}</span>
                </p>
                <p
                    class="cursor-pointer w-full hover:bg-yellow-200 active:text-center active:shadow-md hover:text-green-600 border border-yellow-300  rounded-3xl px-4 py-2 active:ring-2 active:ring-green-600 active:bg-white active:font-bold">
                    4.
                    <span class="ml-3">{{ quizz.quizzTest[questionIdx].option_4 }}</span>
                </p>
                <p
                    class="cursor-pointer w-full hover:bg-yellow-200 active:text-center active:shadow-md hover:text-green-600 border border-yellow-300  rounded-3xl px-4 py-2 active:ring-2 active:ring-green-600 active:bg-white active:font-bold">
                    5.
                    <span class="ml-3">{{ quizz.quizzTest[questionIdx].option_5 }}</span>
                </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue';
import { useQuizzesStore } from '../stores/quizzes'

const quizzesStore = useQuizzesStore()

const questionIdx = ref<Number | any>(0)

function nextQuizze(qLength : Number, qAns: String) {
    console.log(qLength, qAns)
    let qValue = questionIdx.value + 1

    if (qValue < qLength) {

        questionIdx.value = questionIdx.value + 1
    } else {
        return;
    }
}
</script>