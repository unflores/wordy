Wordy.Word = DS.Model.extend({
  name: DS.attr('string'),
  tags: DS.attr('string'),
  translation: DS.attr('string'),
  type: DS.attr('string')
});

// Wordy.Word.FIXTURES = [{
//   id: 1,
//   name: "Je m'en sort",
//   translation: "I do ok",
//   type: 'expression',
//   tags: 'phrase, vernaculaire'
// }, {
//   id: 2,
//   name: 'essuyer',
//   translation: 'to wipe',
//   type: 'verb',
//   tags: 'nettoyage'
// }, {
//   id: 3,
//   name: 'courbature',
//   translation: 'soreness',
//   type: 'nm',
//   tags: 'danse, sport'
// }, {
//   id: 4,
//   name: 'Je suis rassasié',
//   translation: "I am satisfied.(with what I've eaten)",
//   type: 'expression',
//   tags: 'phrase, manger'
// }, {
//   id: 5,
//   name: 'plancher',
//   translation: "ceiling",
//   type: 'nm',
//   tags: 'batiment, salle'
// }];