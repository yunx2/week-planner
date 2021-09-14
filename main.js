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
const $tbody = document.getElementById('tbody');

$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});

function renderEvent(entry) {
  var tableRow = document.createElement('tr');
  var tableTime = document.createElement('td');
  tableTime.textContent = entry.time;
  tableRow.appendChild(tableTime);
  var tableDescription = document.createElement('td');
  tableDescription.textContent = entry.description;
  tableRow.appendChild(tableDescription);

  return tableRow;
}


function handleSubmit(e) {
  e.preventDefault();
  $entryFormModal.close();
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
    entryId: data.nextEntryId;
  };
  data.entries[selectedDayValue].push(entry);
  data.nextEntryId++;
  $entryForm.reset();
  // console.log(entry);
}

// $submitBtn.addEventListener('click', () => {
//   $entryFormModal.close();
// });

$entryForm.addEventListener('submit', e => handleSubmit(e));


$buttons.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  if (event.target.textContent === data.display) {
    return;
  }
  data.display = event.target.textContent;
  $scheduleHeader.textContent = 'Scheduled Events for ' + event.target.textContent;
  // console.log('event.target.textContent', event.target.textContent)
  var clickedDay = event.target.getAttribute('data-day');
  var clickedDayArray = data.entries[clickedDay];
  clickedDayArray.forEach(entry => {
    const $entry = renderEvent(entry);
    // console.log('$entry', $entry);
    $tbody.appendChild($entry);
  });
});
