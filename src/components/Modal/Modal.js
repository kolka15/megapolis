import React, {useEffect} from 'react';
import getScrollbarWidth from '../../utils/scrollWidth';
import './modal.scss';
import Cross from '../../icons/cross';


const Modal = ({setModalVisibility, children}) => {

    useEffect(() => {
        const body = document.body;
        body.style.paddingRight = getScrollbarWidth() + 'px';
        body.style.overflow = 'hidden';
    }, []);

    useEffect(() => () => {
        const body = document.body;
        body.style.paddingRight = '';
        body.style.overflow = 'auto';
    }, []);

    return (
        <div className='modal' onClick={() => setModalVisibility(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <span className='modal__close' onClick={() => setModalVisibility(false)}>
                    <Cross color='#ff0000'/>
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
