import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'

export default function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button
                className='btn btn-danger btn-sm rounded-pill '
                id='scrollToTopBtn'
                onClick={handleScroll}
                style={{ display: isVisible ? 'block' : 'none' }}
            >
                <FontAwesomeIcon icon={faArrowTurnUp} />
            </button>
        </div>
    );
}
