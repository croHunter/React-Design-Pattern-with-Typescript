import { useState } from 'react';
import { ControlledModal } from './controlled-modal';

const Modal = () => {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    return (
        <>
            <ControlledModal
                shouldShow={shouldShowModal}
                onRequestClose={() => setShouldShowModal(false)}
            >
                <h1>Hello!</h1>
            </ControlledModal>
        </>
    )
}

export default Modal