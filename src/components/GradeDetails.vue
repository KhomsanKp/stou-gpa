<template>
    <div v-if="isGrade" class="block mx-auto p-5 border rounded-3xl shadow-xl animate__animated  animate__backInLeft">
        <p class="mt-3 text-blue-600 font-semibold">H (Honor) = 4.00 => ได้คะแนน 76% ขึ้นไป</p>
        <p class="mt-3 text-green-600 font-semibold">S (Satisfactory) = 2.30 => ได้คะแนน 60% ถึง 75%</p>
        <p class="mt-3 text-red-600 font-semibold">U (Unsatisfactory) = ไม่ผ่าน => ได้คะแนนต่ำกว่า 60%</p>
        <p class="mt-3 text-yellow-500 font-semibold">I (Incomplete) = ไม่สมบูรณ์ / ไม่เข้าสอบ</p>

        <div class="border-b mt-5 border-green-500" />

        <button
            class="text-xl block mx-auto mt-10  hover:font-bold ring ring-red-500 rounded-3xl px-3 text-red-500 hover:ring-red-400 hover:text-red-400 hover:px-4 hover:py-1"
            @click="isGrade = false">X ปิด</button>
    </div>
</template>

<script setup lang="ts">
const isGrade = defineModel()
</script>