import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  createdAt: DS.attr('date'),
  joinedNicks: DS.hasMany('nick', { inverse: 'joinedChannels' }),
  messages: DS.hasMany('message'),
  owner: DS.belongsTo('nick')
});
