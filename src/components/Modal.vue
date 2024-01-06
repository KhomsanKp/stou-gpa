<template>
    <Transition enter-active-class="animate__animated animate__zoomIn animate__faster 500ms"
        leave-active-class="animate__animated animate__zoomOut animate__faster 500ms">
        <div v-show="isOpen" @click="emit('isClose')"
            class="w-full h-full fixed bg-opacity-80 bg-black z-10 flex justify-center items-center">
            <slot />

            <div class=" flex flex-col absolute top-[65%] px-5 py-3 bg-opacity-0 hover:bg-opacity-10  bg-red-500 rounded-3xl z-20 mt-3">
                <button class="text-red-500 flex-1 text-2xl font-bold" @click="emit('isClose')">X</button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const isOpen = defineModel()
const emit = defineEmits(['isClose'])
</script>