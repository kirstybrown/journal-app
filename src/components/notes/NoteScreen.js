import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>

            <input 
                type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete='off'
            />

            <textarea
                placeholder='What happened today'
                className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                <img
                    src="https://lh3.googleusercontent.com/pNKOucw9LP44ZwuUQGC1kpuLSm35tx9X19iaiytfMW3iSz-veYMVVIiegj592SqV-xmqLhnu6-fHyMD7b4hGjyepDQ0=w640-h400-e365-rj-sc0x00ffffff"
                    alt="mountains"
                />

            </div>

        </div>

    </div>
  )
}
