import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var selected_channel;

    if (params.slug == '_')
      selected_channel = null;
    else {
      selected_channel = this.store.findRecord('channel', params.slug);
      this.store.query('message', {channelId: params.slug})
    }

    return {
      channels: this.store.findAll('channel'),
      selected_channel: selected_channel
    }
  }
});
