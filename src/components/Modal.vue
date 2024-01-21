<template>
    <Transition enter-active-class="animate__animated animate__zoomIn animate__faster 500ms"
        leave-active-class="animate__animated animate__zoomOut animate__faster 500ms">
        <div v-show="isOpen" @click="emit('isClose')" class="w-full h-full top-0 fixed bg-opacity-80 bg-black z-10">
            <div class="flex justify-center items-center z-20">
                <slot />

                <div
                    class=" flex flex-col absolute top-[65%] px-5 py-3 bg-opacity-0 hover:bg-opacity-10  bg-red-500 rounded-3xl mt-3">
                    <button class="text-red-500 flex-1 text-2xl font-bold" @click="emit('isClose')">X</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const isOpen = defineModel()
const emit = defineEmits(['isClose'])
</script>