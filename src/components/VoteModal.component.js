const VoteModal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h3>Thank You for Voting</h3>
                <button className="btn close-modal-btn" onClick={closeModal}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default VoteModal;
