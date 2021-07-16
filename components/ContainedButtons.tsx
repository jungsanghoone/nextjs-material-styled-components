import * as React from 'react';
import Button from '@material-ui/core/Button';

export default function ContainedButtons(): JSX.Element {
  return (
    <>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </>
  );
}
