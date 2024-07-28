<template>
    <div id="Gpa">
        <Teleport to="body">
            <Modal v-model="isOpen" @is-close="isClose">
                <div
                    class="flex border border-green-500 flex-col h-fit mt-16 py-5 px-10 bg-white rounded-3xl z-20 animate__animated animate__heartBeat animate__slow 1s">
                    <h6 class="text-2xl text-green-600 font-semibold text-center">ผลการคำนวณ</h6>
                    <div class="border-b my-3" />
                    <p class="text-lg text-gray-500 italic">สอบผ่าน : <span class="text-gray-600 ml-5 mr-3">{{ gradeH +
                        gradeS
                    }}</span> วิชา</p>
                    <p class="text-lg text-gray-500 italic">เกรด S : <span class="text-gray-600 ml-5 mr-3">{{ gradeS
                    }}</span>
                        วิชา
                    </p>
                    <p class="text-lg text-gray-500 italic">เกรด H : <span class="text-gray-600 ml-5 mr-3">{{ gradeH
                    }}</span>
                        วิชา
                    </p>
                    <p class="text-xl mt-5 mb-3 text-green-600">
                        เกรดเฉลี่ยสะสม : <span class="font-bold text-2xl border-b-2 text-blue-600 border-blue-600 ml-5">{{
                            gpa
                        }}</span>
                    </p>
                </div>
            </Modal>
        </Teleport>

        <div class="md:container mx-auto px-3 w-full py-5">

            <h2 v-if="!isHonor && !isGrade"
                class="mt-5 rounded text-xl py-3 font-bold text-green-500 md:block md:mx-auto md:w-2/3 border-green-500 border-l-8 pl-5 animate__animated animate__backInLeft">
                คำนวณเกรด
                <span class="px-3 py-2 ml-5 rounded-full border border-yellow-500 text-yellow-500">STOU</span>
            </h2>

            <div class="mt-5">
                <div v-if="!isHonor && !isGrade" class="flex justify-center md:block md:mx-auto md:w-2/3">
                    <div
                        class="border bg-white w-full rounded-3xl px-6 py-5 mt-5 shadow-xl animate__animated animate__backInRight">
                        <FormInput :is-valid-s="checkForm.isValidS" :is-valid-h="checkForm.isValidH"
                            :is-valid-all="checkForm.isValidAll" v-model:grade-h="gradeH" v-model:grade-s="gradeS"
                            @submit-form="submitForm" @reset-form="resetForm" />
                    </div>
                </div>

                <div class="mt-10 flex justify-center gap-5 flex-col">
                    <button v-if="!isHonor && !isGrade"
                        class="drop-shadow-xl flex justify-center items-center gap-1 text-lg text-blue-500 hover:underline animate__animated  animate__backInUp"
                        @click="isHonor = true">
                        คุณสมบัติผู้ได้รับเกียรตินิยม
                        <span class="text-green-500">
                            <IconLink />
                        </span>
                    </button>

                    <button v-if="!isGrade && !isHonor"
                        class="drop-shadow-xl flex justify-center items-center gap-1 text-lg text-blue-500 hover:underline animate__animated  animate__backInUp"
                        @click="isGrade = true">
                        คำอธิบายเกรดต่างๆ มสธ.
                        <span class="text-green-500">
                            <IconLink />
                        </span>
                    </button>
                </div>

                <HonorDetails v-model="isHonor" />

                <GradeDetails v-model="isGrade" />
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import FormInput from '@/components/FormInput.vue';
import Modal from '@/components/Modal.vue';
import IconLink from '@/components/Icons/IconLink.vue'
import HonorDetails from '@/components/HonorDetails.vue'
import GradeDetails from '@/components/GradeDetails.vue'

const isOpen = ref<Boolean>(false)
const isHonor = ref<Boolean>(false)
const isGrade = ref<Boolean>(false)

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
    checkForm.isValidAll = true
}

const isClose = () => {
    isOpen.value = false
    gpa.value = ''

    resetForm()
}

interface CheckForm {
    isValidS: Boolean,
    isValidH: Boolean,
    isValidAll: Boolean
}

</script>