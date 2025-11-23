<script setup>
import { ref, toRaw } from 'vue'
import { lockShortcuts } from '@slidev/client/state/storage.ts'
import { onMounted, onUnmounted } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { onSlideEnter } from '@slidev/client'
const { escape } = useMagicKeys()
let release = ref(null);
const props = defineProps(['doc', 'class'])
const snapshot = ref(null)
const base = import.meta.env.BASE_URL
const isDev = import.meta.env.DEV
const base2 = base.substr(1)
console.log(base, base2)
onMounted(async () => {
    const response = await fetch(`${base}${props.doc}`)
    snapshot.value = await response.json()
})
onUnmounted(() => {
    if (isDev) {

        handleRelaseLock()
    }
})

onSlideEnter(() => {
    console.log("Slide Enter")
    if (isDev) {
        handleLock()
    }
})

whenever(escape, () => {
    if (isDev) {

        console.log("Escape key")
        if (release.value !== null) {
            handleRelaseLock()
        } else if (!release.value) {
            handleLock()
        }
    }
})


function handleLock() {
    release.value = lockShortcuts()
    console.log("lock")
}
function handleRelaseLock() {
    release?.value?.()
    release.value = null
    console.log("unlock")
}


</script>

<template>
    <div>
        <p v-if="isDev" class="text-sm opacity-50">💡 Press ESC to <span class="text-red-500" v-if="release">Unlock
                🔑</span><span class="text-green-500" v-else>Lock 🔒</span> slide navigation</p>

        <tldraw v-if="isDev" :class="`${props.class}`" :doc="`${props.doc}`"></tldraw>
        <tldraw v-if="!isDev" :class="`${props.class}`" :doc="`${base2}${props.doc}`"></tldraw>
    </div>
</template>