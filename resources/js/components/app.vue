<template>
    <div class="app">
    <h1>{{ greeting }}</h1>
    </div>
</template>
<script>


import addItemForm from "./addItemForm"
import listView from "./listView"
import listItem from "./listItem"
export default {
    setup: () => ({
        greeting: 'Hello World from Vue 3!'
    })
}

// export default {
//     components: {
//         addItemForm,
//         listView,
//         listItem
//     }



// }
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {text-align: center;
}
</style>