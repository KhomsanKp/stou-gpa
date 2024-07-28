<template>
    <!-- View User backlist -->
    <Modal v-model="isOpen" @is-close="isClose">
        <div v-if="userDetail.length < 1"></div>
        <div v-else class="w-[90%] h-[500px] overflow-x-hidden mt-16 bg-white py-5 px-3 border-2 border-red-500 rounded-3xl">
            <h6 class="text-2xl font-semibold text-red-500 text-center pb-3 mb-3 border-b-2 border-red-500">คำเตือน!!!</h6>
                <p class="text-amber-600 text-center text-lg">ซื้อ-ขาย กับบุคคลนี้ อย่างระมัดระวัง</p>

            <div v-for="infUser in userDetail" :key="infUser.id" class="mt-5 text-green-600 font-semibold">
                <p class="text-red-500"><span class="text-black">Facebook name : </span>{{ infUser.facebookName }}</p>
                <p class="text-gray-500 indent-4 mb-2">{{ infUser.note }}</p>

                <div v-if="infUser.refLink.length < 1"></div>

                <div v-else class="w-full block h-1/2 overflow-y-auto">
                    <p class="mb-3 text-xs">ข้อมูลเพิ่มเติม ?</p>
                    <div>
                        <a v-for="(link, index) in infUser.refLink" :key="index" :href="link"
                            class="text-sky-500 hover:pb-1 mb-3 cursor-pointer hover:border-b hover:border-sky-500 text-ellipsis text-xs inline-block">
                            {{ link }}</a>
                    </div>
                </div>
            </div>
        </div>
    </Modal>

    <div id="Home" class="p-3 md:container mx-auto">
        <div class="md:container mx-auto my-5">
            <h2 class="text-2xl font-bold mb-3 text-red-500 pl-3">เข็คก่อนโอน ?</h2>

            <div class="px-3">
                <input type="text" id="serach" placeholder="ป้อนข้อมูลที่ต้องการค้นหา"
                    class="border border-green-500 text-blue-500 rounded-full w-full px-4 py-2" v-model="searchValue" />
            </div>

            <div class=" grid gird-cols-1 md:grid-cols-3 gap-1 my-3 px-5">
                <label for="facebook">
                    <input type="radio" id="facebook" value="Facebook" v-model="selectValue" />
                    ชื่อใน Facebook
                </label>
                <label for="account">
                    <input type="radio" id="account" value="Account" v-model="selectValue" />
                    เลขที่บัญชี / พร้อมเพย์
                </label>
                <label for="mobile">
                    <input type="radio" id="mobile" value="Mobile" v-model="selectValue" />
                    เบอร์โทรศัพท์
                </label>
            </div>

            <div class="px-3 pt-3">
                <button type="button" class="px-3 py-2 text-white w-1/4 hover:shadow-md bg-green-500 rounded-full"
                    @click="findUser">ค้นหา</button>
            </div>
        </div>

        <div class="border-b-2 border-yellow-400 my-5" />

        <!-- Menu list -->
        <h3 class="text-2xl font-bold border-l-4 border-amber-400 pl-3 text-green-500">เมนู</h3>

        <nav class="grid gride-cols-1 md:grid-cols-2 gap-2 mt-5 text-gray-500 animate__animated animate__backInLeft">

            <RouterLink to="/gpa"
                class="hover:text-green-500 hover:border-b hover:border-green-500 flex gap-7 justify-start items-center px-3 py-5">
                <span>
                    <GpaIcon />
                </span>
                <span class="text-lg font-bold">คำนวณเกรด</span>
            </RouterLink>
            <!-- <RouterLink to="/courses" class="hover:text-green-500 flex hover:border-b hover:border-green-500 gap-5 justify-start items-center px-3 py-5">
                    <span><DocIcon/></span>
                    <span class="text-lg md:text-xl font-bold">ค่าใช้จ่ายตลอดหลักสูตร</span>
                </RouterLink>
                <RouterLink to="/quizzes" class="hover:text-green-500 flex hover:border-b hover:border-green-500 gap-5 justify-start items-center px-3 py-5">
                    <span><QuestionIcon/></span>
                    <span class="text-lg md:text-xl font-bold">แบบทดสอบออนไลน์</span>
                </RouterLink> -->
        </nav>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal.vue';
import GpaIcon from '@/components/Icons/GpaIcon.vue';
// import DocIcon from '@/components/Icons/DocIcon.vue'
// import QuestionIcon from '@/components/Icons/QuestionIcon.vue'
import { useBlacklistUsersStore } from '@/stores/blacklistUsers';
import { RouterLink } from 'vue-router';

const blackListUserStore = useBlacklistUsersStore()

const userDetail = ref<any>([])
const selectValue = ref<String>("")
const searchValue = ref<String>("")
const isOpen = ref<Boolean>(false)

async function findUser() {
    await blackListUserStore.findUser(selectValue.value, searchValue.value)
    blackListUserStore.getUser.forEach((user) => userDetail.value.push(user))

    if (userDetail.value.length < 1) {
        return;
    } else {
        userDetail.value = blackListUserStore.getUser
        isOpen.value = true
    }
}

function isClose() {
    isOpen.value = false
    userDetail.value = []
    searchValue.value = ''
    searchValue.value = ''
}
</script>