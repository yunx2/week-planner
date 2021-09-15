/* global data */
/* exported data */

const $addEntryButton = document.querySelector('.btn-add-entry');
const $addModal = document.querySelector('dialog');
const $addForm = document.getElementById('add-form');
const $submitButton = document.querySelector('.btn-submit');
const $buttonsContainer = document.querySelector('.buttons');

function handleClickDay({ target }) {
  if (target.tagName !== 'BUTTON') {
    return;
  }
  const day = target.getAttribute('data-day');
  // console.log('data-entry value:', day)
  // console.log('target:', target)
  const dayEvents = data.events[day];
  console.log('dayEvents:', dayEvents)
}

$buttonsContainer.addEventListener('click', e => handleClickDay(e));
$addEntryButton.addEventListener('click', () => {
  // console.log('day select element value:', $addForm.elements['select-day'].value)
  $addModal.showModal();
});

function handleAdd(e) {
  e.preventDefault();
  // console.log('day select element value:', $addForm.elements['select-day'].value)
  const newEvent = {
    day: $addForm.elements['select-day'].value,
    time: $addForm.elements['select-time'].value,
    description: $addForm.elements.description.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  const selectedDay = $addForm.elements['select-day'].value;
  // data.events[$addForm.elements['select-day'].value].push(newEvent);
  const events = data.events[selectedDay];
  events.push(newEvent);
  // console.log('selected day:', selectedDay);
  // console.log('array of events for selected day:', dayEvents);
  $addModal.close();
}

$submitButton.addEventListener('click', e => handleAdd(e));

/*  reset data in localstorage  */

const empty = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

function setData(events = empty, nextEntryId = 1) {
  data = {
    events,
    editing: null,
    nextEntryId
  };
  window.location.reload();
  // console.log('localStorage:', localStorage)
}

const monday = [
  {
    day: 'monday',
    time: '20:00',
    description: 'study js',
    entryId: 1
  }
];

const tuesday = [];

const wednesday = [
  {
    day: 'wednesday',
    time: '9:00',
    description: 'study js',
    entryId: 2
  }
];

const thursday = [
  {
    day: 'thursday',
    time: '6:00',
    description: 'study js',
    entryId: 3
  },
  {
    day: 'thursday',
    time: '10:00',
    description: 'study js',
    entryId: 4
  }
];

const friday = [];

const saturday = [
  {
    day: 'saturday',
    time: '6:00',
    description: 'study js',
    entryId: 5
  },
  {
    day: 'saturday',
    time: '10:00',
    description: 'study js',
    entryId: 6
  }
];

const sunday = [];

const testData = {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}
