import React, { useState } from 'react';

interface CalendlyWidgetProps {
    calendlyUrl: string;
    buttonText: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ buttonText, calendlyUrl }) => {
    const [isActive, setIsActive] = useState(false);

    const openModal = () => {
        setIsActive(true);
    };

    const closeModal = () => {
        setIsActive(false);
    };

    return (
        <div>
            <button className="button is-info is-responsive has-text-primary-bold-invert" onClick={openModal}>
                {buttonText}
            </button>

            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-content" style={{ width: '70%', height: '100%', overflow: 'hidden' }}>

                    <iframe
                        src={`${calendlyUrl}?hide_gdpr_banner=1&primary_color=D17623`}
                        width="100%"
                        height="100%"
                        title="Calendly"
                    ></iframe>

                </div>
                <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={closeModal}
                ></button>
            </div>
        </div>
    );
};

export default CalendlyWidget;