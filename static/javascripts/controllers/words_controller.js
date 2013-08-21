Wordy.WordsController = Ember.ArrayController.extend({
  createWord: function () {
    // Get the word information
    var name        = this.get('newName') || '',
        translation = this.get('newTranslation') || '',
        type        = this.get('newType') || '',
        tags        = this.get('newTags') || '';
        
    if (!(name.trim() && translation.trim() && type.trim() &&tags.trim())) { return; }

    // Create the new Word model
    var word = Wordy.Word.createRecord({
      name: name,
      translation: translation,
      type: type,
      tags: tags
    });

    // Clear the "New Word" text field
    this.set('newName', '');
    this.set('newTranslation', '');
    this.set('newType', '');
    this.set('newTags', '');
    word.save();
  }
});