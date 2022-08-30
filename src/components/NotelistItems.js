import { showFormattedDate } from '../utils/index';
import NotelistItemsAction from './NotelistItemsAction';

const NotelistItems = ({
	title,
	date,
	body,
	id,
	archived,
	deleteNoteHandler,
	ArchiveNoteHandler,
}) => {
	return (
		<div className='note-item'>
			<div className='note-body__content'>
				<h3 className='note-body__content--title'>{title}</h3>
				<p className='note-body__content--date'>{showFormattedDate(date)}</p>
				<p className='note-body__content--text'>{body}</p>
			</div>

			<NotelistItemsAction
				id={id}
				deleteNoteHandler={deleteNoteHandler}
				archivedStatus={archived}
				ArchiveNoteHandler={ArchiveNoteHandler}
			/>
		</div>
	);
};

export default NotelistItems;
