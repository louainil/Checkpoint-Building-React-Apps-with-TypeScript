import React from 'react';

/**
 * CHECKPOINT: Converting this component from JavaScript to TypeScript
 *
 * Steps applied here:
 * 1) Rename the file from `.jsx`/`.js` to `.tsx` because it returns JSX.
 * 2) Define a props type (what this component expects from its parent).
 * 3) Type the destructured props so `name` is known to be a string.
 * 4) Keep the JSX output the same as the original requirement.
 */

type GreetingProps = {
  /** The name to display in the greeting message. */
  name: string;
};

const Greeting = ({ name }: GreetingProps): JSX.Element => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
