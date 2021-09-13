/* global data */
/* exported data */
const $addEntry = document.querySelector('.add-entry');
const $entryFormModal = document.querySelector('dialog');
const $submitBtn = document.querySelector('.btn-submit');
const $entryForm = document.querySelector('.entry-form');
const $daySelect = document.querySelector('.day-select');
const $timeSelect = document.querySelector('.time-select');
var selectedDay = $daySelect.options[$daySelect.selectedIndex].text;
console.log(selectedDay);

$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});

$entryForm.addEventListener('submit', () => {
  var selectedDay = $daySelect.options[$daySelect.selectedIndex].text;
  var selectedTime = $timeSelect.options[$timeSelect.selectedIndex].text;
})
