/* global data */
/* exported data */
const $addEntry = document.querySelector('.add-entry');
const $entryFormModal = document.querySelector('dialog');
const $submitBtn = document.querySelector('.btn-submit');
const $entryForm = document.querySelector('.entry-form');
const $daySelect = document.querySelector('.day-select');
const $timeSelect = document.querySelector('.time-select');
const $description = document.querySelector('.description');

$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});

function handleSubmit(e) {
  preventDefault();
  var selectedDayText = $daySelect.options[$daySelect.selectedIndex].text;
  var selectedTimeText = $timeSelect.options[$timeSelect.selectedIndex].text;
  var selectedDayValue = $daySelect.options[$daySelect.selectedIndex].value;
  const entryDescription = $entryForm.elements.description.value;
  console.log('entryDescription', entryDescription)
  // var entry = {
  //   day: selectedDayText,
  //   time: selectedTimeText,
  //   description: '   ',
  //   nextEntryId: data.nextEntryId,
  //   entryId: data.nextEntryId - 1
  // }
}

$entryForm.addEventListener('submit', (e) => handleSubmit(e));
