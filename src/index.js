'use strict';

export default class {

  constructor(apiKey, secret) {
    this.apiKey = apiKey;
    this.secret = secret;

    if (!this.apiKey) {
      throw new Error('apiKey is required');
    }

    if(!this.secret) {
      throw new Error('secret is required');
    }
  }
}