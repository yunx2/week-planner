/* global data */
/* exported data */
const $addEntry = document.querySelector('.add-entry');
const $entryFormModal = document.querySelector('dialog');
const $submitBtn = document.querySelector('.btn-submit');
const $entryForm = document.querySelector('.entry-form');
const $daySelect = document.querySelector('.day-select');
const $timeSelect = document.querySelector('.time-select');
const $description = document.querySelector('.description');
const $buttons = document.querySelector('.buttons');
const $scheduleHeader = document.querySelector('.schedule-header');

$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});

$submitBtn.addEventListener('click', () => {
  $entryFormModal.close();
});

$buttons.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  $scheduleHeader.textContent = 'Scheduled Events for ' + event.target.innerHTML;

  if (event.target.getAttribute('data-day')) {
    var clickedDay = event.target.getAttribute('data-day');
    var clickedDayArray = data.entries[clickedDay];
  }

});

function handleSubmit(e) {
  e.preventDefault();
  var selectedDayText = $daySelect.options[$daySelect.selectedIndex].text;
  var selectedTimeText = $timeSelect.options[$timeSelect.selectedIndex].text;
  var selectedDayValue = $daySelect.options[$daySelect.selectedIndex].value;
  const entryDescription = $entryForm.elements.description.value;
  /* console.log('entryDescription', entryDescription);
  console.log(selectedDayText);
  console.log(selectedTimeText);
  console.log(selectedDayValue); */

  var entry = {
    day: selectedDayText,
    time: selectedTimeText,
    description: entryDescription,
    nextEntryId: data.nextEntryId,
    entryId: data.nextEntryId - 1
  };
  data.entries[selectedDayValue].push(entry);
  data.nextEntryId++;
  $entryForm.reset();
  // console.log(entry);
}

$entryForm.addEventListener('submit', e => handleSubmit(e));

function renderEntries(entry) {
  var tableRow = document.createElement('tr');

  var tableTime = document.createElement('td');
  tableTime.textContent = entry.time;
  tableRow.appendChild(tableTime);

  var tableDescription = document.createElement('td');
  tableDescription.textContent = entry.description;
  tableRow.appendChild(tableDescription);

  return tableRow;
}
