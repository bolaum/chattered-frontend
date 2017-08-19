import { moduleForModel, test } from 'ember-qunit';

moduleForModel('channel', 'Unit | Model | channel', {
  // Specify the other units that are required for this test.
  needs: ['model:joined-nick', 'model:message', 'model:owner']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});