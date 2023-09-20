import { render } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('should render successfully', () => {
    render(<Link href="/">Link</Link>);

    expect(true).toBeTruthy();
  });
});
