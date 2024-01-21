<template>
    <div>
        <div>
            <div>
                Addmin
            </div>

            <div>
                <button class="bg-red-500 text-white shadow-md px-3 py-2 hover:text-red-400"
                    @click="userLogout">Logout</button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
userStore.setUser()

const router = useRouter()

watchEffect(() => {
    const user = userStore.getUser
    const isActive = user.isActive

    if (isActive) {
        router.replace('/admin')
    } else {
        router.push('/auth')
    }
})

function userLogout() {
    userStore.logOut()
}
</script>