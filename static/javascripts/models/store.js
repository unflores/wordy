Wordy.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.RESTAdapter.create({
    url: 'http://localhost:4567'
  })
});
