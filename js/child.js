import Tiny from './Tiny/tiny.js'
import Descendant from './descendant.js'

export default Tiny({
  components: {
    Descendant
  },

  // state: {
  //   count: 5
  // },

  // afterMount () {
  //   this.emit('child-count', {
  //     count: this.state.count
  //   })
  // },

  // increaseCount () {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  //   this.emit('child-count', {
  //     count: this.state.count
  //   })
  // },

  // increaseParentCount (event) {
  //   this.emit('increase-parent-count', {
  //     amount: 1
  //   })
  // },

  template () {
    return `
      <div class='component child-component flow'>
        <h2>Child Counter</h2>
        <p>Count: ${this.props.count}</p>

        <div tiny-component="Descendant" tiny-props="[count, props.count]"></div>
      </div>
    `
  }
})
