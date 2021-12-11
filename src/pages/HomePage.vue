<template>
    <div></div>
</template>

<script>
export default {
    name: "HomePage",
    async mounted() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.warn({response});
    }
}
</script>