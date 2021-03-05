import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { counterActionCreators, INCREASE, DESCREASE, ASYNC_INCREASE } from '../actions/counter'

@connect(
  (state) => ({
    counter: state.counter
  }),
  counterActionCreators
)
export default class Counter extends PureComponent {

  add() {
    this.props[INCREASE]()
  }

  des() {
    this.props[DESCREASE]()
  }

  sagaAdd() {
    this.props[ASYNC_INCREASE]()
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <h1>Counter number:{counter}</h1>
        <button onClick={() => this.add()}>+</button>
        <button onClick={() => this.des()}>-</button>
        <button onClick={() => this.sagaAdd()}>saga +</button>
      </div>
    );
  }
}
