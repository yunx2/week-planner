/* exported data */

// all entries go into data.entries; this entire data object should be stored in local storage
// because all the data in it needs to persist
// entry being edited goes at data.entry
// data.nextEntryId gets incremented

// this file gets loaded first and main.js second. so functions in main.js can use the functions
// and variables defined in this file

var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};
// entry = {
//   day: '',
//   time: '',
//   description: '   ',
//   nextEntryId: 1
// }

const $entriesList = document.getElementById('entries-ul');

function swapView(swap) {
  data.view = swap;
  const viewNodeList = document.querySelectorAll('.view');
  viewNodeList.forEach(node => {
    const viewName = node.getAttribute('data-view');
    if (viewName === data.view) {
      node.classList.remove('hidden');
      node.scrollIntoView();
    } else {
      node.classList.add('hidden');
    }
  });
}

// handle load and unload
function handleUnload() {
/* on unload stringify the data object in memory and store */
  data.editing = null;
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('dataJSON', dataJSON);
}

function createEntryElement(entry) {
  const { entryId, journalEntry, photoUrl, title } = entry;
  // first create container elements
  const $entriesListItem = document.createElement('li'); // outermost element
  const $article = document.createElement('article');
  $article.classList.add('row');
  $article.setAttribute('data-entry-id', entryId);
  // children of $article
  const $colHalfImg = document.createElement('div');
  $colHalfImg.classList.add('column-half');
  const $colHalfEntry = document.createElement('div');
  $colHalfEntry.classList.add('column-half');
  // entry image
  const $photo = document.createElement('img');
  $photo.classList.add('entry-img');
  $photo.setAttribute('src', photoUrl);
  $colHalfImg.append($photo);
  // entry title
  const $title = document.createElement('h3');
  $title.classList.add('entry-title');
  $title.textContent = title;
  // edit button
  const $editButton = document.createElement('button');
  $editButton.className = 'btn-edit';
  $editButton.innerHTML = '<i class="fas fa-pen"></i>';
  const $entryItemHeader = document.createElement('div');
  $entryItemHeader.className = 'item-header';
  $entryItemHeader.append($title, $editButton);

  const $entryPara = document.createElement('p');
  $entryPara.textContent = journalEntry;
  $colHalfEntry.append($entryItemHeader, $entryPara);
  $article.append($colHalfImg, $colHalfEntry);

  $entriesListItem.appendChild($article);
  // return outermost element
  return $entriesListItem;
}

function handlePageLoad() {
  data = JSON.parse(localStorage.getItem('dataJSON'));
  if (data) {
    swapView(data.view);
  }
  // check that the entries array exists and has at least on eentry in it
  if (data.entries && (data.entries.length > 0)) {
    // hide 'no entries' message
    const $message = document.getElementById('no-entries-recorded');
    $message.classList.add('hidden');
    // entries is already in reverse chronologiccal order, so just append
    // in the same order as array
    data.entries.forEach(current => {
      const $current = createEntryElement(current);
      $entriesList.append($current);
    });
  }
}
// attach event listeners
window.addEventListener('beforeunload', handleUnload);
document.addEventListener('DOMContentLoaded', handlePageLoad);

// helper functions
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.';

const testEntries = [
  {
    entryId: 5,
    journalEntry: lorem,
    title: 'Python',
    photoUrl: 'images/dummy-images/python.jpeg'
  }, {
    entryId: 4,
    journalEntry: lorem,
    title: 'Ruby',
    photoUrl: 'images/dummy-images/ruby.png'
  }, {
    entryId: 3,
    journalEntry: lorem,
    title: 'Scheme',
    photoUrl: 'images/dummy-images/scheme.jpg'
  }, {
    entryId: 2,
    journalEntry: lorem,
    title: 'Javascript',
    photoUrl: './images/dummy-images/javascript.png'
  }, {
    entryId: 1,
    journalEntry: lorem,
    title: 'Node',
    photoUrl: '/images/dummy-images/node.png'
  }
];

function setState(entries = [], view = 'entry-form', editing = null) {
  data = {
    view,
    entries,
    editing,
    nextEntryId: next = entries.length + 1
  };
  const stateJSON = JSON.stringify(data);
  localStorage.setItem('dataJSON', data);
  window.location.reload();
}
