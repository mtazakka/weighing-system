/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Button, Modal, Space, Text } from '@mantine/core';
import { memo } from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, label }) => {
  return (
    <Modal opened={isOpen} onClose={onClose} size="sm" title={title}>
      <Space h={12} />
      <Modal.Body>
        <Text>{label}</Text>
      </Modal.Body>
      <Space h={12} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outline" color="red" onClick={onClose} w={80}>
          Batal
        </Button>
        <Button onClick={onConfirm} w={80}>
          Ya
        </Button>
      </div>
    </Modal>
  );
};

export default memo(ConfirmationModal);
