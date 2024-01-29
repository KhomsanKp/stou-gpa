<template>
    <header
        class="md:container mx-auto flex justify-between px-5 shadow-md items-center h-[100px] bg-gradient-to-r from-green-600 to-yellow-400">

        <h1 class=" font-black hover:cursor-pointer text-white drop-shadow-xl text-3xl"  @click="gotoHome">STOU center</h1>
        <div v-if="routeName !== 'Auth'" class="grid grid-cols-1 justify-items-center hover:cursor-pointer" @click="gotoAuth" >
            <span class="text-green-700">
                <Account />
            </span>
            <span class="text-green-700 font-semibold">
                Login
            </span>
        </div>
    </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Account from "../Icons/Account.vue";
import { useRouter, useLink, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()

const routeName = computed(() => route.name)

function gotoAuth() {
    router.push('/auth')
}

function gotoHome() {
    router.push('/')
}
</script>