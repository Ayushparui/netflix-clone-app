import React from 'react'

function Header() {
    return (
        <header>
            <div className='header_content'>
                <div className='header_billboard'>
                    <img alt='billboard' />
                </div>
                <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </h4>
                <div className='header_buttons'>
                    <button className='header_button play_button'>Play</button>
                    <button className='header_button more_info_button'>More Info</button>
                </div>
            </div>
        </header>
    )
}

export default Header