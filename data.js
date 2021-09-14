/* exported data */
// data.entries[selectedDayValue]
// on click of day: data.entries[clickedDay]
var data = {
  entries: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  editing: null,
  nextEntryId: 1
};
// var entry = {
//   day: '',
//   time: '',
//   description: '   ',
//   nextEntryId: data.nextEntryId,
//   entryId: data.nextEntryId - 1
// }

var dataJSON = localStorage.getItem('data');
if (dataJSON !== null) {
  data = JSON.parse(dataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('data', dataJson);
});
