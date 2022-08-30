import NotelistItems from './NotelistItems';

const NotelistSection = ({ notes, deleteNoteHandler, ArchiveNoteHandler }) => {
	const notArchivedNotes = notes.filter((note) => !note.archived);
	const archivedNotes = notes.filter((note) => note.archived);

	return (
		<section className='project-list'>
			<article className='saved-notes'>
				<header className='note-header'>
					<h2>Saved Notes</h2>
				</header>
				<div className='note-list'>
					{notArchivedNotes.length > 0 ? (
						notArchivedNotes.map((note) => {
							return (
								<NotelistItems
									deleteNoteHandler={deleteNoteHandler}
									ArchiveNoteHandler={ArchiveNoteHandler}
									key={note.id}
									date={note.createdAt}
									{...note}
								/>
							);
						})
					) : (
						<p className='note-list__not-found'>Tidak ada catatan</p>
					)}
				</div>
			</article>

			<article className='archived-notes'>
				<header className='note-header archived'>
					<h2>Archived Note List</h2>
				</header>
				<div className='note-list archived'>
					{archivedNotes.length > 0 ? (
						archivedNotes.map((note) => {
							return (
								<NotelistItems
									deleteNoteHandler={deleteNoteHandler}
									ArchiveNoteHandler={ArchiveNoteHandler}
									key={note.id}
									date={note.createdAt}
									{...note}
								/>
							);
						})
					) : (
						<p className='note-list__not-found'>Tidak ada catatan</p>
					)}
				</div>
			</article>
		</section>
	);
};

export default NotelistSection;
