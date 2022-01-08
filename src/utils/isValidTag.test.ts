import isValidTag from './isValidTag';

describe('isValidTag', () => {
  const tags = ['#apples', '#doggy'];
  it('rejects tags if they already exist', () => {
    expect(isValidTag(tags, '#apples'));
  });
});
