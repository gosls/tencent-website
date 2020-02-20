const { Component } = require('@serverless/core')

class GlobalVar extends Component {
  getIndex() {
    const argument = process.argv
    for (let i = 0; i <= argument.length; i++) {
      if (argument[i] == '-n') {
        return i + 1
      }
    }
    return null
  }

  async getComponent() {
    return await this.load('@serverless/tencent-website', this.id.split('.')[1])
  }

  async default(inputs = {}) {
    const index = this.getIndex()
    if (index) {
      if (process.argv[index] && this.id.split('.')[1] === process.argv[index]) {
        return (await this.getComponent())(inputs)
      }
      return {}
    }
    return (await this.getComponent())(inputs)
  }

  async remove(inputs = {}) {
    const index = this.getIndex()
    if (index) {
      if (process.argv[index] && this.id.split('.')[1] === process.argv[index]) {
        return (await this.getComponent()).remove(inputs)
      }
      return {}
    }
    return (await this.getComponent()).remove(inputs)
  }
}

module.exports = GlobalVar
