<template>
    <div class="row">
        <div class="col col-12">
            <router-link class="paper-btn btn-warning margin-left" to="/">Back</router-link>
            <form @submit.prevent="onSave">
                <div class="row">
                    <div class="col col-5">
                        <div class="form-group">
                            <label for="input-1">Title</label>
                            <input class="input-block" type="text" id="input-1" v-model="formTodo.title" required>
                        </div>
                    </div>
                    <div class="col col-5">
                        <div class="form-group">
                            <label for="input-2">Description</label>
                            <input class="input-block" type="text" id="input-2" v-model="formTodo.description" required>
                        </div>
                    </div>
                    <div class="col col-2">
                        <div class="form-group">
                            <label>&nbsp;</label>
                            <button type="submit"
                                class="input-block btn-primary btn-small">{{ formSubmitText }}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                formTodo: {
                    title: '',
                    description: '',
                }
            }
        },
        props: {
            todoIndex: {
                type: [Number],
                default: null,
            }
        },
        watch: {
            todoIndex: {
                immediate: true,
                handler: 'onTodoIndexChange'
            }
        },
        computed: {
            ...mapState(['todos']),
            formSubmitText() {
                return this.todoIndex !== null ? 'Update' : 'Add'
            }
        },
        methods: {
            onTodoIndexChange() {
                window.todos = this.todos
                if (this.$route.name === 'updateTodo' && !this.todos[this.todoIndex]) {
                    this.$router.push({ name: 'createTodo' })
                    return
                }
                if (this.todoIndex == null) return

                this.setFormValue()
            },
            setFormValue(){
                const { title, description } = this.todos[this.todoIndex]
                this.formTodo = { title, description }
            },
            onSave() {
                // update if index of current todo is set
                if (this.todoIndex !== null) {
                    this.$store.dispatch('updateTodo', {
                        todo: this.formTodo,
                        index: this.todoIndex
                    })
                } else {
                    this.$store.dispatch('createTodo', this.formTodo)
                }
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>