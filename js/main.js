import Tiny from './Tiny/tiny.js'
import Child from './child.js'
// import totalCount from './total-count.js'

Tiny({
  selector: 'main',
  state: { count: 10 },
  components: { Child },

  increaseCount (event) {
    this.setState({
      count: this.state.count + 1
    })
  },

  // increaseSelfCount (event) {
  //   const amount = event.detail.amount
  //   this.setState({
  //     count: this.state.count + amount
  //   })
  // },

  // setChildCount (event) {
  //   this.setState({
  //     childCount: event.detail.count
  //   })
  // },

  template () {
    return `
      <div class="component parent-component flow">
        <h1>Parent Counter</h1>
        <p>Count: ${this.state.count}</p>
        <button tiny-listener="[click, increaseCount]">Increase count by 1</button>

        <div tiny-component="Child" tiny-props = "[count, state.count]"></div>
      </div>`
  }
})
