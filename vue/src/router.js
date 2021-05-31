import Vue from 'vue'
import VueRouter from 'vue-router'
const TodoForm = () => import('./components/TodoForm.vue')
const TodoList = () => import('./components/TodoList.vue')

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            component: TodoList,
            name: 'home'
        },
        {
            path:'/todo/create',
            component: TodoForm,
            name: 'createTodo'
        },
        {
            path:'/todo/edit/:todoIndex',
            component: TodoForm,
            name: 'updateTodo',
            props: true
        }
            
    ]
})
