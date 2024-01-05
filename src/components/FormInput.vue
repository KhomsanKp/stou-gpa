<template>
    <form @submit.prevent="emit('submitForm')">
        <div class="grid grid-cols-1 gap-3 w-[300px ] justify-items-center">
            <p v-if="!props.isValidS" class="text-red-500 text-sm">* เกรด S มีค่าระหว่าง 0 - 24</p>
            <input type="number" placeholder="จำนวนเกรด S" class="border-b font-bold rounded-lg outline-none focus:border-green-500 py-3 px-5 text-center text-green-500 focus:text-left focus:text-gray-500" v-model.number="gradeS" 
                :class="[!props.isValidS ? 'border-red-500 focus:text-red-500 focus:border-red-500': '']"
            />

            <p v-if="!props.isValidH" class="text-red-500 text-sm">* เกรด H มีค่าระหว่าง 0 - 24</p>
            <input type="number" placeholder="จำนวนเกรด H" class="border-b font-bold rounded-lg outline-none focus:border-green-500 py-3 px-5 text-center text-green-500 focus:text-left focus:text-gray-500" v-model.number="gradeH" 
            :class="[!props.isValidH ? 'border-red-500 focus:text-red-500 focus:border-red-500': '']"
            />
        </div>

        <p v-if="!props.isValidAll" class="text-sm text-red-500 text-center mt-5 font-semibold">* จำนวนเกรด S + H มีค่าระหว่าง 1 - 24 {{ props.isValidAll }}</p>

        <div class="mt-10 flex justify-center gap-5">
            <button type="submit" class="text-white shadow-md hover:shadow-xl block px-3 py-2 bg-green-500 hover:bg-green-400 rounded-full ">คำนวณเกรด</button>
            <button type="button" class="text-white shadow-md hover:shadow-xl block px-3 py-2 bg-amber-500 hover:bg-amber-400 rounded-full" @click="emit('resetForm')">Reset</button>
        </div>
    </form>
</template>

<script setup lang="ts">
const gradeS = defineModel<Number | any>('gradeS')
const gradeH = defineModel<Number | any>('gradeH')
const props = defineProps(['isValidS', 'isValidH', 'isValidAll'])

const emit = defineEmits(['submitForm', 'resetForm'])
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