import React, { useState } from 'react';

import Header from './Header';
import InputSection from './InputSection';
import NotelistSection from './NotelistSection';
import SearchSection from './SearchSection';
import { getInitialData } from '../utils/index';

const App = () => {
	const notes = getInitialData();
	const [notesList, setNotesList] = useState(notes);
	const [searchText, setSearchText] = useState('');

	const createNoteHandler = ({ noteTitle, noteBodyTextArea }) => {
		const newNote = {
			id: +new Date(),
			title: noteTitle,
			body: noteBodyTextArea,
			archived: false,
			createdAt: new Date().toISOString(),
		};
		const newNotes = [...notesList, newNote];
		setNotesList(newNotes);
	};

	const deleteNoteHandler = (id) => {
		setNotesList(notesList.filter((note) => note.id !== id));
	};

	const ArchiveNoteHandler = (id) => {
		setNotesList(
			notesList.map((note) => {
				if (note.id === id) {
					note.archived = !note.archived;
				}
				return note;
			})
		);
	};

	const searchFilter = () => {
		if (searchText.length === 0) {
			return notesList;
		} else {
			const filtered = notesList.filter((note) =>
				note.title.toLowerCase().includes(searchText)
			);
			return filtered;
		}
	};

	return (
		<>
			<Header />
			<main>
				<InputSection createNoteHandler={createNoteHandler} />
				<SearchSection searchHandler={setSearchText} />
				<NotelistSection
					notes={searchFilter()}
					deleteNoteHandler={deleteNoteHandler}
					ArchiveNoteHandler={ArchiveNoteHandler}
				/>
			</main>
		</>
	);
};

export default App;
