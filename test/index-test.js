import expect from 'expect';

import x from '../src/index';

describe('x', () => {
  before(done => {
    done();
  });

  after(done => {
    done();
  });

  it('start', done => {
    const xvalue = x();
    expect(xvalue).toEqual(1);
    done();
  });
});
