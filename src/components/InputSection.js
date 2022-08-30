import React, { useState } from 'react';

const InputSection = ({ createNoteHandler }) => {
	const titleCharacterLimit = 50;
	const bodyCharacterLimit = 200;

	const [noteTitle, setNoteTitle] = useState('');
	const [noteBodyTextArea, setNoteBodyTextArea] = useState('');

	const onChangeTitle = (event) => {
		if (titleCharacterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	};

	const onChangeBody = (event) => {
		if (bodyCharacterLimit - event.target.value.length >= 0) {
			setNoteBodyTextArea(event.target.value);
		}
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (noteTitle.trim().length > 0 && noteBodyTextArea.trim().length > 0) {
			createNoteHandler({ noteTitle, noteBodyTextArea });
			setNoteTitle('');
			setNoteBodyTextArea('');
		}
	};

	return (
		<section className='project-input'>
			<article className='input-section'>
				<form onSubmit={onSubmitForm} className='form'>
					<div className='form__title'>Input New Note</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputBookTitle'>
								Judul Catatan
							</label>
							<p className='note-input__title__char-limit'>
								Sisa karakter: {titleCharacterLimit - noteTitle.length}
							</p>
						</div>

						<input
							id='inputBookTitle'
							data-validation='Judul Buku'
							type='text'
							className='form__input'
							placeholder='Ketik Judul Catatan'
							value={noteTitle}
							onChange={onChangeTitle}
						/>
						<span className='form__error'></span>
					</div>
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								Catatan
							</label>
							<p className='note-input__title__char-limit'>
								Sisa karakter: {bodyCharacterLimit - noteBodyTextArea.length}
							</p>
						</div>
						<textarea
							rows={8}
							cols={10}
							className='form__input--textarea'
							placeholder='Tuliskan catatanmu di sini ...'
							value={noteBodyTextArea}
							onChange={onChangeBody}
						/>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<button type='submit' className='form__btn'>
							Save Note
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default InputSection;
