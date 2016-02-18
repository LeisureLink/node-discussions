'use strict';

import Reporting from '../src';

describe('Reporting Tool', () => {

  describe('#construtor()', () => {

    it('assigns the apiKey and secret', () => {
      const apiKey = '1234';
      const secret = 'my-secret';

      const reporting = new Reporting(apiKey, secret);
      expect(reporting.apiKey).to.be.equal(apiKey);
      expect(reporting.secret).to.be.equal(secret);
    });

    it('apiKey is required', () => {
      expect(() => {
        new Reporting(null, 'secret');
      }).to.throw(/apiKey/);
    });

    it('secret is required', () => {
      expect(() => {
        new Reporting('key', null);
      }).to.throw(/secret/);
    });

  });

});