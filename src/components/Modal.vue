<template>
    <Transition enter-active-class="animate__animated animate__zoomIn animate__faster 500ms"
        leave-active-class="animate__animated animate__zoomOut animate__faster 500ms">
        <div v-show="isOpen" @click="emit('isClose')" class="w-screen h-screen top-0 fixed bg-opacity-80 bg-black z-10">
            <div class="relative flex flex-col justify-center items-center z-20 pt-[5%] md:container mx-auto">
                
                <div class="absolute top-[5%] right-[46%]">
                    <button class="text-red-500 flex-1 text-2xl font-bold hover:bg-white rounded-full px-2" @click="emit('isClose')">X</button>
                </div>
                <slot />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const isOpen = defineModel()
const emit = defineEmits(['isClose'])
</script>