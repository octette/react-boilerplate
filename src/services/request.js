import request from 'superagent';

const APP_LOCAL_API = 'https://api.github.com';
const APP_LIVE_API = 'https://beta-api.tagon.co';

const API_ROOT = process.env.NODE_ENV !== 'production'
  ? APP_LOCAL_API
  : APP_LIVE_API;

export default class Request {
  constructor() {
    this.url = '';
    this.query = {};
    this.attach = {};
    this.field = {};
    this.oauthToken = '';
    this.options = {
      method: 'get',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    };

    if (this.oauthToken) {
      this.options.headers.Authorization = `Bearer ${this.oauthToken}`;
    }
  }

  Get(url) {
    this.url = `${API_ROOT}/${url}`;

    this.options.method = 'get';

    return this;
  }

  Post(url) {
    this.url = `${API_ROOT}/${url}`;
    this.options.method = 'post';

    return this;
  }

  Put(url) {
    this.url = `${API_ROOT}/${url}`;
    this.options.method = 'put';

    return this;
  }

  Delete(url) {
    this.url = `${API_ROOT}.${url}`;
    this.options.method = 'delete';

    return this;
  }

  Query(query) {
    this.query = query;
    return this;
  }

  Send(body) {
    this.options.body = JSON.stringify(body);
    this.Set('content-type', 'application/json');
    return this;
  }

  Attach(key, data) {
    this.attach = { [key]: data, ...this.attach };
    this.Set('Accept', 'multipart/form-data');
    return this;
  }

  Set(header, value) {
    this.options.headers[header] = value;
    return this;
  }

  Field(key, data) {
    this.fields = { [key]: data, ...this.fields };
    return this;
  }

  End() {
    return new Promise((resolve, reject) => {
      let r = null;

      if (this.options.method === 'get') {
        r = request.get(this.url);
      } else if (this.options.method === 'post') {
        r = request.post(this.url);
      } else if (this.options.method === 'delete') {
        r = request.del(this.url);
      } else if (this.options.method === 'put') {
        r = request.put(this.url);
      }

      r = r.query(this.query);

      Object.keys(this.options.headers).forEach((key) => {
        const value = this.options.headers[key];
        r = r.set(key, value);
      });

      if (this.options.body) {
        r = r.send(this.options.body);
      }

      Object.keys(this.attach).forEach((key) => {
        const value = this.attach[key];
        r = r.attach(key, value);
      });

      Object.keys(this.field).forEach((key) => {
        const value = this.field[key];
        r = r.field(key, value);
      });

      r.end((err, res) => {
        if (err) {
          return reject(res ? res.body : err);
        }

        return resolve(res.body);
      });
    });
  }
}
