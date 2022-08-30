import React from 'react';

const SearchSection = ({ searchHandler }) => {
	return (
		<section className='project-search'>
			<article id='input-search-section' className='input-search-section'>
				<div className='form__title'>Cari Catatan</div>

				<form id='form-search' className='form-search'>
					<div className='form__item'>
						<input
							id='searchBookTitle'
							data-validation='Judul Buku'
							type='text'
							className='form__input'
							placeholder='Ketik Judul Catatan'
							onChange={(event) => searchHandler(event.target.value)}
						/>
						<span className='form__error'></span>
					</div>
				</form>
			</article>
		</section>
	);
};

export default SearchSection;
