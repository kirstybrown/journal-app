import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i.pinimg.com/originals/f3/4e/cb/f34ecb186eefeefadd645407b00fa350.jpg)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                A new day...
            </p>
            <p className='journal__entry-content'>
                It was a wonderful day...
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
