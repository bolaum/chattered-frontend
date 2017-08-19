import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  joinedChannels: DS.hasMany('channel', { inverse: 'joinedNicks' }),
  messages: DS.hasMany('message')
});
