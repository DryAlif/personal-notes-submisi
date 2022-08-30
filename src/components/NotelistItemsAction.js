import React from 'react';

const NotelistItemsAction = ({
	id,
	deleteNoteHandler,
	archivedStatus,
	ArchiveNoteHandler,
}) => {
	return (
		<div className='note-body__action-wrapper'>
			<button
				className='note-button__action-delete'
				onClick={() => deleteNoteHandler(id)}
			>
				Delete
			</button>
			<button
				className={
					archivedStatus === false
						? 'note-button__action-archive'
						: 'note-button__action-archived'
				}
				onClick={() => ArchiveNoteHandler(id)}
			>
				{archivedStatus === false ? 'Arsipkan' : 'Pindahkan'}
			</button>
		</div>
	);
};

export default NotelistItemsAction;
