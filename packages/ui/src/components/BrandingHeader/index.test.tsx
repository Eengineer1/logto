import { render } from '@testing-library/react';

import { appLogo } from '@/__mocks__/logto';

import BrandingHeader from '.';

describe('BrandingHeader UI Component', () => {
  const appHeadline = 'description.welcome_to_sign_in';

  test('render logo with context', () => {
    const { queryByText, container } = render(
      <BrandingHeader logo={appLogo} headline={appHeadline} />
    );
    expect(queryByText(appHeadline)).not.toBeNull();
    expect(container.querySelector('img')).not.toBeNull();
  });
});
