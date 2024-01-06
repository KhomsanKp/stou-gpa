<template>
    <form @submit.prevent="emit('submitForm')">
        <div class="grid grid-cols-1 gap-3  justify-items-center">
            <p v-if="total" class="text-green-600 text-left mt-3 italic">จำนวนชุดวิชาที่สอบผ่าน : <span
                    class="text-green-500 font-bold ring ring-green-500 rounded-3xl px-4 ml-5"
                    :class="[total < 1 || total > 24 ? 'text-red-500 ring ring-red-500' : '']">{{ total }}</span></p>

            <p v-if="!props.isValidAll && total < 1 || total > 24" class="text-sm mb-10 text-red-500 text-left font-semibold border-b border-red-500">* ชุดวิชาที่สอบผ่านมีค่าระหว่าง 1 - 24</p>

            <p v-if="!props.isValidS" class="text-red-500 text-sm">* เกรด S มีค่าระหว่าง 0 - 24</p>
            <input type="number" placeholder="จำนวนเกรด S"
                class="border-b font-bold rounded-lg outline-none focus:border-green-500 py-3 px-5 text-center text-green-500 focus:text-left focus:text-gray-500"
                v-model.number="gradeS"
                :class="[!props.isValidS ? 'border-red-500 focus:text-red-500 focus:border-red-500' : '']" />

            <p v-if="!props.isValidH" class="text-red-500 text-sm">* เกรด H มีค่าระหว่าง 0 - 24</p>
            <input type="number" placeholder="จำนวนเกรด H"
                class="border-b font-bold rounded-lg outline-none focus:border-green-500 py-3 px-5 text-center text-green-500 focus:text-left focus:text-gray-500"
                v-model.number="gradeH"
                :class="[!props.isValidH ? 'border-red-500 focus:text-red-500 focus:border-red-500' : '']" />
        </div>

        <div class="mt-10 flex justify-center gap-5">
            <button type="submit"
                class="text-white shadow-md hover:shadow-xl block px-3 py-2 bg-green-500 hover:bg-green-400 rounded-full ">คำนวณเกรด</button>
            <button type="button"
                class="text-white shadow-md hover:shadow-xl block px-3 py-2 bg-amber-500 hover:bg-amber-400 rounded-full"
                @click="emit('resetForm')">Reset</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const gradeS = defineModel<Number | any>('gradeS')
const gradeH = defineModel<Number | any>('gradeH')
const props = defineProps(['isValidS', 'isValidH', 'isValidAll'])

const emit = defineEmits(['submitForm', 'resetForm'])

const total = computed(() => gradeH.value + gradeS.value)
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox
input[type=number] {
  -moz-appearance: textfield;
} */
</style>