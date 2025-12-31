import React, { Component } from 'react';

/**
 * CHECKPOINT: Converting this component from JavaScript to TypeScript
 *
 * Steps applied here:
 * 1) Rename the file from `.jsx`/`.js` to `.tsx` because it returns JSX.
 * 2) Create TypeScript types for Props and State.
 *    - This component has no props, so we use an empty object type.
 *    - State contains a single numeric field: `count`.
 * 3) Type the React class component as `Component<Props, State>`.
 * 4) Type the initial `state` so TypeScript knows `count` is a number.
 * 5) Keep the same UI and behavior (button increments the count).
 */

type CounterProps = Record<string, never>;

type CounterState = {
  /** Current counter value. */
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    // Using the functional form of setState avoids stale state reads.
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render(): JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
