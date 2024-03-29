// import TodoList from '../component/TodoList'
// import { connect } from 'react-redux'
// import { VisibilityFilters } from '../action'
// import { toggleTodo } from '../action'

// function getVisibleTodos (todos, filter) {
//   switch(filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos 
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//   }
// }

// const mapStateToProps = state => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id)) 
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)


import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
