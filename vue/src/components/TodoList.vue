<template>
    <div class="row">
        <div class="col col-12">
            <router-link class="paper-btn btn-warning" :to="{name: 'createTodo'}">New Todo</router-link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo, todoIndex) in todos" :key="todoIndex">
                        <td>{{ todoIndex +1 }}</td>
                        <td>{{ todo.title }}</td>
                        <td><small>{{ todo.description }}</small></td>
                        <td>
                            <button class="btn-danger btn-small" @click="onDelete(todo, todoIndex)">Delete</button>
                            &nbsp;
                            <button class="btn-secondary btn-small" @click="$router.push({name: 'updateTodo',  params: {todoIndex} })">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState(['todos']),
    methods: {
        onDelete(todo, todoIndex) {
            const confirmed = confirm(`Are you sure you want to delete "${todo.title}" ?`)
            if (confirmed) this.$store.dispatch('deleteTodo', todoIndex)
        }
    }
}
</script>