<template>
    <div v-show="isOpen" @click="emit('isClose')"
        class="w-full h-full fixed bg-opacity-60 bg-black z-10 flex justify-center items-center">

        <div class="w-2/3 h-fit block p-5 bg-white rounded-3xl z-20 animate__animated animate__heartBeat">
            <h6 class="text-2xl text-gray-600 font-semibold mt-5 text-center">เกรดเฉลี่ย (GPA)</h6>
            <p
                class="text-center text-xl font-semibold mt-7 ring w-1/3 block mx-auto rounded-full ring-green-500 text-green-700 py-2 px-3 mb-5">
                {{ props.gpa }}
            </p>
        </div>

        <div
            class=" w-fit  h-fit absolute text-center bottom-[32%] px-4 py-2 hover:bg-red-400 hover:bg-opacity-20 rounded-3xl z-20">
            <button class="text-red-500 text-2xl font-bold" @click="emit('isClose')">X</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    gpa: String,
})

const isOpen = defineModel()
const emit = defineEmits(['isClose'])
</script>