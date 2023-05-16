<script >
import { useNewsStore } from '../stores';
export default {
    setup() {
        const newsStore = useNewsStore()
        console.log('setup')
        console.log(newsStore)
        return { newsStore }
    },
    computed: {
        posts() {
            return this.newsStore.posts
        },
    },
}
</script>
<template>
    <div>
        <pre style="color: red">
            {{posts}}
        </pre>
    </div>
</template>