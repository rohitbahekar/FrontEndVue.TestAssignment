import Vue from 'vue'
import Vuex from 'vuex'

import defaultTodos from './defaultTodos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: defaultTodos,
  },
  mutations: {
    CREATE_TODO(state, todo) {
      state.todos.push(todo)
    },

    UPDATE_TODO(state, {
      todo,
      index
    }) {
      state.todos.splice(index, 1, todo)
    },

    DELETE_TODO(state, index) {
      state.todos.splice(index, 1)
    }
  },
  actions: {
    createTodo({
      commit
    }, todo) {
      commit("CREATE_TODO", todo)
    },

    updateTodo({
      commit
    }, {
      todo,
      index
    }) {
      commit("UPDATE_TODO", {
        todo,
        index
      })
    },

    deleteTodo({
      commit
    }, index) {
      commit("DELETE_TODO", index)
    }
  }
})