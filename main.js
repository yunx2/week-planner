/* global data */
/* exported data */
const $addEntry = document.querySelector('.add-entry');
const $entryFormModal = document.querySelector('dialog');
const $submitBtn = document.querySelector('.btn-submit');
const $entryForm = document.querySelector('.entry-form');
const $daySelect = document.querySelector('.day-select');
const $timeSelect = document.querySelector('.time-select');

$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});

$entryForm.addEventListener('submit', () => {
  var selectedDayText = $daySelect.options[$daySelect.selectedIndex].text;
  var selectedTimeText = $timeSelect.options[$timeSelect.selectedIndex].text;
  var selectedDayValue = $daySelect.options[$daySelect.selectedIndex].value;
})
