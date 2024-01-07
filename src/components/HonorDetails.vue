<template>
     <div v-if="isHonor" class="block px-3 drop-shadow-2xl w-full animate__animated  animate__backInDown">
          <h2 class="font-semibold mt-5 text-gray-600">ผู้ที่มีสิทธิได้รับเกียรตินิยมอันดับหนึ่ง</h2>
          <ul class="list-inside list-disc ml-5 italic text-gray-500">
            <li>สอบผ่านชุดวิชาต่างๆ ครบตามโครงสร้างหลักสูตรภายในกำหนดเวลาของหลักสูตร</li>
            <li>ไม่เคยสอบได้คะแนนลำดับขั้น <span class="text-red-500 font-semibold">U</span> ในชุดวิชาใดตลอดหลักสูตร</li>
            <li>ไม่เคยเรียนซ้ำชุดวิชาใดเพื่อยกระดับคะแนน</li>
            <li>มีชุดวิชาสะสมของลำดับขั้น <span class="text-green-500 font-semibold">H</span> เป็นจำนวนตั้งแต่สามในสี่ขึ้นไปของชุดวิชาในหลักสูตรทั้งหมด</li>
            <li>นักศึกษาที่ได้รับการเทียบงานรายวิชาหรือโอนชุดวิชาจะไม่มีสิทธิได้รับปริญญาเกียรตินิยม</li>
          </ul>
  
          <div class="border-b mt-5 border-green-500" />
  
          <h2 class="font-semibold mt-5 text-gray-600">คุณสมบัติผู้ได้รับเกียรตินิยมอันดับสอง</h2>
          <ul class="list-inside list-disc ml-5 italic text-gray-500">
            <li>สอบผ่านชุดวิชาต่างๆ ครบตามโครงสร้างหลักสูตรภายในกำหนดเวลาของหลักสูตร</li>
            <li>ไม่เคยสอบได้คะแนนลำดับขั้น <span class="text-red-500 font-semibold">U</span> ในชุดวิชาใดตลอดหลักสูตร</li>
            <li>ไม่เคยเรียนซ้ำชุดวิชาใดเพื่อยกระดับคะแนน</li>
            <li>มีชุดวิชาสะสมของลำดับขั้น <span class="text-green-500 font-semibold">H</span> เป็นจำนวนไม่น้อยกว่าครึ่งหนึ่งของชุดวิชาสะสมทั้งหมด</li>
            <li>นักศึกษาที่ได้รับการเทียบงานรายวิชาหรือโอนชุดวิชาไม่มีสิทธิได้รับปริญญาเกียรตินิยม</li>
          </ul>
  
          <div class="border-b mt-5 border-green-500" />
  
          <button class="text-xl block mx-auto mt-10  hover:font-bold ring ring-red-500 rounded-3xl px-3 text-red-500 hover:ring-red-400 hover:text-red-400 hover:px-4 hover:py-1" @click="isHonor = false">X ปิด</button>
        </div>
</template>

<script setup lang="ts">
const isHonor = defineModel()
</script>