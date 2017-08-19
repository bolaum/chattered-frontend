import Ember from 'ember';

export default Ember.Component.extend({
  formattedDate: Ember.computed('message', function () {
    var date = this.get('message').get('sentAt');
    return date.getHours() + ":" + date.getMinutes()
  })
});
