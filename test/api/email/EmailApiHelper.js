'use strict';

import Auth from '../../../src/api/auth/Auth';
import WeDeploy from '../../../src/api/WeDeploy';

describe('EmailApiHelper', function() {
  afterEach(function() {
    WeDeploy.email_ = null;
    RequestMock.teardown();
  });

  beforeEach(function() {
    RequestMock.setup();
    WeDeploy.email('http://localhost');
  });

  describe('WeDeploy.email()', function() {
    it('should return the same instance', function() {
      let email = WeDeploy.email();
      assert.deepEqual(email, WeDeploy.email());
    });

    it('should return the instance with url filled', function() {
      let email = WeDeploy.email('http://host.com');
      assert.strictEqual(email.wedeployClient.emailUrl_, 'http://host.com');
    });

    it('should raise an error if the email url has a path', function() {
      assert.throws(function() {
        WeDeploy.email('http://email.project.wedeploy.me/extrapath');
      }, Error);
    });

    it('should return the instance of scoped auth', function() {
      WeDeploy.auth().currentUser = Auth.create('token');
      assert.strictEqual(
        WeDeploy.auth().currentUser,
        WeDeploy.email().helperAuthScope
      );
    });
  });

  describe('.from()', function() {
    it('should add "from" param into post form', function() {
      const email = WeDeploy.email().from('test@test.com');
      assert.deepEqual(
        ['from'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com'], email.params.getAll('from'));
    });

    it('should accept single value only in "from" param into post form', function() {
      const email = WeDeploy.email().from('test@test.com').from('test2@test2.com');
      assert.deepEqual(
        ['from'],
        email.params.names()
      );

      assert.deepEqual(['test2@test2.com'], email.params.getAll('from'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.from(null);
      }, Error);
    });
  });

  describe('.bcc()', function() {
    it('should add "bcc" param into post form', function() {
      const email = WeDeploy.email().bcc('test@test.com');
      assert.deepEqual(
        ['bcc'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com'], email.params.getAll('bcc'));
    });

    it('should accept multiple values in "bcc" param into post form', function() {
      const email = WeDeploy.email().bcc('test@test.com').bcc('test2@test2.com');
      assert.deepEqual(
        ['bcc'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com', 'test2@test2.com'], email.params.getAll('bcc'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.bcc(null);
      }, Error);
    });
  });

  describe('.cc()', function() {
    it('should add "cc" param into post form', function() {
      const email = WeDeploy.email().cc('test@test.com');
      assert.deepEqual(
        ['cc'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com'], email.params.getAll('cc'));
    });

    it('should accept multiple values in "cc" param into post form', function() {
      const email = WeDeploy.email().cc('test@test.com').cc('test2@test2.com');
      assert.deepEqual(
        ['cc'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com', 'test2@test2.com'], email.params.getAll('cc'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.cc(null);
      }, Error);
    });
  });

  describe('.message()', function() {
    it('should add "message" param into post form', function() {
      const email = WeDeploy.email().message('message');
      assert.deepEqual(
        ['message'],
        email.params.names()
      );
    });

    it('should accept single value only in "message" param into post form', function() {
      const email = WeDeploy.email().message('test@test.com').message('test2@test2.com');
      assert.deepEqual(
        ['message'],
        email.params.names()
      );

      assert.deepEqual(['test2@test2.com'], email.params.getAll('message'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.message(null);
      }, Error);
    });
  });

  describe('.priority()', function() {
    it('should add "priority" param into post form', function() {
      const email = WeDeploy.email().priority('1');
      assert.deepEqual(
        ['priority'],
        email.params.names()
      );

      assert.deepEqual(['1'], email.params.getAll('priority'));
    });

    it('should accept single value only in "priority" param into post form', function() {
      const email = WeDeploy.email().priority('1').priority('2');
      assert.deepEqual(
        ['priority'],
        email.params.names()
      );

      assert.deepEqual(['2'], email.params.getAll('priority'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.priority(null);
      }, Error);
    });
  });

  describe('.replyTo()', function() {
    it('should add "replyTo" param into post form', function() {
      const email = WeDeploy.email().replyTo('test@test.com');
      assert.deepEqual(
        ['replyTo'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com'], email.params.getAll('replyTo'));
    });

    it('should accept single value only in "replyTo" param into post form', function() {
      const email = WeDeploy.email().replyTo('test@test.com').replyTo('test2@test2.com');
      assert.deepEqual(
        ['replyTo'],
        email.params.names()
      );

      assert.deepEqual(['test2@test2.com'], email.params.getAll('replyTo'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.replyTo(null);
      }, Error);
    });
  });

  describe('.to()', function() {
    it('should add "to" param into post form', function() {
      const email = WeDeploy.email().to('test@test.com');
      assert.deepEqual(
        ['to'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com'], email.params.getAll('to'));
    });

    it('should accept multiple values in "to" param into post form', function() {
      const email = WeDeploy.email().to('test@test.com').to('test2@test2.com');
      assert.deepEqual(
        ['to'],
        email.params.names()
      );

      assert.deepEqual(['test@test.com', 'test2@test2.com'], email.params.getAll('to'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.to(null);
      }, Error);
    });
  });

  describe('.subject()', function() {
    it('should add subject param into post form', function() {
      const email = WeDeploy.email().subject('subject');
      assert.deepEqual(
        ['subject'],
        email.params.names()
      );

      assert.deepEqual(['subject'], email.params.getAll('subject'));
    });

    it('should accept single value only in "subject" param into post form', function() {
      const email = WeDeploy.email().subject('subject').subject('subject2');
      assert.deepEqual(
        ['subject'],
        email.params.names()
      );

      assert.deepEqual(['subject2'], email.params.getAll('subject'));
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.subject(null);
      }, Error);
    });
  });

  describe('.send()', function() {
    it('should send an http request to the email path', function(done) {
      RequestMock.intercept('POST', 'http://localhost/emails').reply(
        200,
        '{"sent": "ok"}'
      );

      WeDeploy.email().from('test@test.com').send().then(result => {
        assert.equal('{"sent": "ok"}', result);
        done();
      });
    });

    it('should clear the params after sending the email', function(done) {
      RequestMock.intercept('POST', 'http://localhost/emails').reply(
        200,
        '{"sent": "ok"}'
      );

      const email = WeDeploy.email().from('test@test.com');

      email.send().then(result => {
        assert.isTrue(email.params.isEmpty());
        done();
      });
    });
  });

  describe('.status()', function() {
    it('should send an http request to check the status of an email', function(
      done
    ) {
      RequestMock.intercept('GET', 'http://localhost/emails/xyz/status').reply(
        200,
        '{"sent": "ok"}'
      );

      WeDeploy.email().status('xyz').then(result => {
        assert.equal('{"sent": "ok"}', result);
        done();
      });
    });

    it('should fail if param is not specified', function() {
      const email = WeDeploy.email();
      assert.throws(function() {
        email.status(null);
      }, Error);
    });
  });
});
