<template>
    <header
        class="md:container mx-auto flex justify-between px-5 shadow-md items-center h-[100px] bg-gradient-to-r from-green-600 to-yellow-400">

        <h1 class=" font-black text-white drop-shadow-xl text-3xl">STOU center</h1>
        <div class="grid grid-cols-1 justify-items-center hover:cursor-pointer" @click="gotoAuth" >
            <span class="">
                <Account />
            </span>
            <span class="">
                Login
            </span>
        </div>
    </header>
</template>

<script setup lang="ts">
import Account from "../Icons/Account.vue";
import { useRouter } from "vue-router";

const router = useRouter()

function gotoAuth() {
    router.push('/auth')
}
</script>