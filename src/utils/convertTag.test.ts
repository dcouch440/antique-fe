import convertTag from './convertTag';

describe('converTag', () => {
  it('converts spaces, removes special chars and adds a hash tag.', () => {
    const t = convertTag('&AB       !!@#$%^&*()_+                  CD***');
    expect(t).toEqual('#abcd');
  });
});
