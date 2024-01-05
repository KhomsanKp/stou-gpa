<template>
  <Modal v-model="isOpen" @is-close="isClose" :gpa="gpa" />

  <div class="md:container mx-auto px-3">
    <Transition enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__backOutLeft">
      <h1
      class="mx-auto my-5 max-w-[500px]  bg-amber-400 shadow-xl rounded-full font-black px-7 text-2xl py-5 flex justify-center items-center text-center text-green-700 animate__animated animate__backInLeft">
      คำนวณเกรดเฉลื่ย (GPA)
      <span class="px-3 py-2 ml-3 rounded-full bg-white">STOU</span>
    </h1>
  </Transition>

    <main class="mx-auto max-w-[500px] mt-10">
      <div class="border  block mx-auto w-full h-full rounded-3xl py-10 shadow-xl animate__animated animate__backInRight">
        <FormInput :is-valid-s="checkForm.isValidS" :is-valid-h="checkForm.isValidH" :is-valid-all="checkForm.isValidAll"
          v-model:grade-h="gradeH" v-model:grade-s="gradeS" @submit-form="submitForm" @reset-form="resetForm" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import FormInput from './components/FormInput.vue';
import Modal from './components/Modal.vue';

const isOpen = ref<Boolean>(false)

const gradeH = ref<Number | any>('')
const gradeS = ref<Number | any>('')
const gpa = ref<Number | any>('')

const checkForm: CheckForm = reactive({
  isValidH: true,
  isValidS: true,
  isValidAll: true,
})

watchEffect(() => {

  // Check grade S
  if (typeof gradeS.value === 'number' && gradeS.value < 0 || gradeS.value > 24) {
    checkForm.isValidS = false
  } else {
    checkForm.isValidS = true
  }

  // Check grade H
  if (typeof gradeH.value === 'number' && gradeH.value < 0 || gradeH.value > 24) {
    checkForm.isValidH = false
  } else {
    checkForm.isValidH = true
  }

  // Check all
  if (Number.isInteger(gradeH.value) && Number.isInteger(gradeS.value)) {
    if (gradeH.value + gradeS.value < 1 || gradeH.value + gradeS.value > 24) {
      checkForm.isValidAll = false
    } else {
      checkForm.isValidAll = true
    }
  }

})

const submitForm = () => {
  if (gradeH.value !== '' && gradeS.value !== '' && checkForm.isValidH && checkForm.isValidS && checkForm.isValidAll) {
    let h: number = (gradeH.value * 4.0)
    let s: number = (gradeS.value * 2.3)
    let total: number = gradeH.value + gradeS.value
    let gpaValue = (h + s) / total

    gpa.value = gpaValue.toFixed(2)
    isOpen.value = true

    gradeH.value = ''
    gradeS.value = ''
  } else {
    checkForm.isValidH = false
    checkForm.isValidS = false
  }
}

const resetForm = () => {
  gradeH.value = ''
  gradeS.value = ''
  gpa.value = ''

  checkForm.isValidH = true
    checkForm.isValidS = true
}

const isClose = () => {
  isOpen.value = false
  gpa.value = ''
}

interface CheckForm {
  isValidS: Boolean,
  isValidH: Boolean,
  isValidAll: Boolean
}

</script>