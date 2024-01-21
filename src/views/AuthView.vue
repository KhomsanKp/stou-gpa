<template>
    <div class="mx-auto md:container px-3 py-5">
        <div class="border rounded-3xl shadow-xl mt-5 p-3 bg-white w-2/3 block mx-auto">
            <form @submit.prevent="login">
                <div class="grid grid-cols-1">
                    <label for="Email" class="p-3">
                        Email :
                        <input type="email" id="Email" class="px-5 py-2 w-2/3 border rounded-xl" v-model="email" />
                    </label>

                    <label for="Password" class="p-3">
                        Password :
                        <input type="password" id="Password" class="px-5 py-2 w-2/3 border rounded-xl" v-model="password" />
                    </label>
                </div>

                <div class="flex gap-3 mt-5 mx-3">
                    <button type="submit"
                        class="px-3 py-2 text-white bg-green-500 hover:bg-green-400 rounded-full">Login</button>
                    <RouterLink to="/" type="button" class="px-3 py-2 text-blue-500 font-semibold hover:underline">
                        กลับหน้าหลัก</RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router';

const userStore = useUserStore()
userStore.setUser()

const router = useRouter()

const email = ref<String | any>('')
const password = ref<String | any>('')

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
    const userEmail = email.value
    const userPassword = password.value
    if (email.value !== '' && password.value !== '') {
        await userStore.login(userEmail, userPassword)

        setTimeout(() => {
            userStore.logOut()
        }, (1000 * 60) * 60);
    }
}

</script>