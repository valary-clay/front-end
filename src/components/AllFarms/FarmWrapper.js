import React, { useState } from 'react';
import Modal from './Modal';
import FundPage from './FundPage';
import DetailPage from './DetailPage';

const FarmWrapper = ({ title, farm, user, children }) => {
  const [detailModal, setDetailModal] = useState({showDetailModal: false});
  const [fundModal, setFundModal] = useState({showFundModal: false});

  const toggleDetailModal = () => {
    setDetailModal({showDetailModal: !detailModal.showDetailModal});
  }

  const toggleFundModal = () => {
    setFundModal({showFundModal: !fundModal.showFundModal});
  }

  return (
        <div className="column is-5 card farm">
          <div className="farm-detail">
            { children({ title, toggleDetailModal, toggleFundModal, farm, user}) }
          </div>
            { detailModal.showDetailModal? (
              <Modal title={title} closeModal={toggleDetailModal} show={detailModal.showDetailModal}>
                <DetailPage farm={farm} />
              </Modal>
              ): null
            }


            { fundModal.showFundModal? (
              <Modal title={title} closeModal={toggleFundModal} show={fundModal.showFundModal}>
                <FundPage farm={farm} />

              </Modal>
              ): null
            }


       </div>
  )
}

export default FarmWrapper;
