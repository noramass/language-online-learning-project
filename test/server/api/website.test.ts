import 'mocha';
import { expect } from 'chai';
import request from 'request';

describe.skip('Website Endpoint', () => {
  it('can be reached', done => {
    request('http://localhost:3000', (error, response, body) => {
      expect(response).to.exist;
      expect(response && response.statusCode).to.eq(200);
      done(error);
    });
  });
});
