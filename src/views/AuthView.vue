<template>
    <div id="Auth" class="mx-auto md:container px-3 py-5 mt-10">
        <div class="border rounded-3xl shadow-xl p-3 bg-white w-fit block mx-auto animate__animated animate__backInLeft">
            <form @submit.prevent="login">
                <div class="grid grid-cols-1">
                    <label for="email" class="p-3">
                        Email <span v-if="!isValid.email" class="text-sm text-red-500">* email ไม่ถูกต้อง</span> <br />
                        <input type="email" id="email" class="px-5 py-2 w-full mt-1 border rounded-xl" v-model="email" />
                    </label>

                    <label for="password" class="p-3">
                        Password <span v-if="!isValid.password" class="text-sm text-red-500">* password ไม่ถูกต้อง</span> <br />
                        <input type="password" id="password" class="px-5 py-2 mt-1 w-full border rounded-xl" v-model="password" />
                    </label>
                </div>

                <div class="flex gap-3 mt-5 mx-3 justify-center">
                    <button type="submit"
                        class="px-3 py-2 text-white bg-green-500 hover:bg-green-400 rounded-full shadow-md">Login</button>

                        <button type="button"
                        class="px-3 py-2 text-white bg-amber-500 hover:bg-amber-400 rounded-full shadow-md" @click="resetForm">Reset</button>
                </div>
            </form>
        </div>

        <div class="mt-10 flex justify-center animate__animated animate__backInRight">
            <RouterLink to="/" class="bg-blue-500 w-full px-3 py-2 rounded-3xl text-center hover:bg-blue-400 text-white shadow-md">กลับหน้าหลัก</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router';

const userStore = useUserStore()
userStore.setUser()

const router = useRouter()

const email = ref<String | any>('')
const password = ref<String | any>('')
const isValid = reactive<IsValidForm>({
    email: true,
    password: true
})

watchEffect(() => {
    const user = userStore.getUser
    const hasUser = user.isActive
    if (!hasUser) {
        router.replace('/auth')
    } else {
        router.push('/admin')
    }
})

async function login() {
    validateForm()
    
    const userEmail = email.value
    const userPassword = password.value
    if (email.value !== '' && password.value !== '' && isValid.email && isValid.password) {
        await userStore.login(userEmail, userPassword)

        setTimeout(() => {
            userStore.logOut()
        }, (1000 * 60) * 60);
    }
}

function validateForm() {
    if (email.value === '' && password.value === '') {
        isValid.email = false
        isValid.password = false
    } else {
        if (email.value === 'bird348@gmail.com') {
            isValid.email = true
            isValid.password = true
        } else {
            isValid.email = false
            isValid.password = false
        }
    }
}

function resetForm() {
    email.value = ''
    password.value = ''
    isValid.email = true
    isValid.password = true
}

interface IsValidForm {
    email: Boolean,
    password: Boolean
}
</script>