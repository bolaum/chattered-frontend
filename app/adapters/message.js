// import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//   namespace: 'api/v1'
// });

import DS from 'ember-data';
import UrlTemplates from 'ember-data-url-templates';

export default DS.JSONAPIAdapter.extend(UrlTemplates, {
  queryUrlTemplate: '/channels/{channelId}/messages',

  urlSegments: {
    channelId: function(type, id, snapshot, query) {
      return query.channelId
    },
  },
});
