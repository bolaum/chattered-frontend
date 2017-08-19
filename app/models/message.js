import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  sentAt: DS.attr('date'),
  nick: DS.belongsTo('nick'),
  channel: DS.belongsTo('channel')
});
