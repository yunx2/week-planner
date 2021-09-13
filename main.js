const $addEntry = document.querySelector('.add-entry');
const $entryFormModal = document.querySelector('dialog');
$addEntry.addEventListener('click', () => {
  $entryFormModal.showModal();
});
