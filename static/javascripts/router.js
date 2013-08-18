Wordy.Router.map(function() {
  this.resource('words',  { path: '/words' });
  this.resource('word', { path: '/words/:word_id' });
  this.resource('editWord', { path: '/words/:word_id/edit' });
});

Wordy.WordRoute = Ember.Route.extend({
  model: function(params) {
    return Wordy.Word.find(params.word_id);
  },setupController: function(controller, model){
    controller.set('model', model);
    // controller.set('previous_word', controller.previousWord());
    // controller.set('next_word', controller.nextWord());
  }
});

Wordy.EditWordRoute = Ember.Route.extend({
  model: function(params) {
    return Wordy.Word.find(params.word_id);
  },events: {
    save: function() {
      var word = this.modelFor('editWord');
      
      /* this seems silly to have to do, but I'm getting an error otherwise*/
      var transaction = this.get('store').transaction();
      transaction.add(word);
      transaction.commit();
      /**********************/
      
      this.transitionTo('word', word);
    }
  }
});

Wordy.ApplicationRoute = Ember.Route.extend({
  model: function(params) {
    
    
    return Wordy.Word.find();
  },setupController: function(controller, model){
    controller.set('words', model);
  }
});