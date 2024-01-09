<template>
    <TheHeader />
    <div class="p-3 md:container mx-auto">
        <nav class="grid gride-cols-1 md:grid-cols-2 gap-2 mt-5 text-blue-500">
            <RouterLink to="/gpa" class="hover:text-green-500 hover:border-b hover:border-green-500 flex gap-7 justify-start items-center px-3 py-5">
                <span><GpaIcon/></span>
                <span class="text-2xl font-bold">คำนวณเกรด</span>
            </RouterLink>
            <RouterLink to="#" class="hover:text-green-500 flex hover:border-b hover:border-green-500 gap-5 justify-start items-center px-3 py-5">
                <span><DocIcon/></span>
                <span class="text-2xl font-bold">ค่าใช้จ่ายตลอดหลักสูตร</span>
            </RouterLink>
            <RouterLink to="#" class="hover:text-green-500 flex hover:border-b hover:border-green-500 gap-5 justify-start items-center px-3 py-5">
                <span><QuestionIcon/></span>
                <span class="text-2xl font-bold">แบบทดสอบออนไลน์</span>
            </RouterLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
import GpaIcon from '@/components/Icons/GpaIcon.vue';
import DocIcon from '@/components/Icons/DocIcon.vue'
import QuestionIcon from '@/components/Icons/QuestionIcon.vue'
</script>