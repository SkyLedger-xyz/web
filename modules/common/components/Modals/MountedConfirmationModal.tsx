import { useState } from 'react';

import { Button, Modal, Text } from '@/modules/application/components/DesignSystem';

interface MountedConfirmationModalInterface {
  header: string;
  onRequestClose?: () => void;
  description?: string;
  onAccept?: () => void;
  onAcceptText?: string;
}

const MountedConfirmationModal = ({
  header,
  onRequestClose,
  description,
  onAccept,
  onAcceptText = 'Continue',
}: MountedConfirmationModalInterface) => {
  const [isBusy, setIsBusy] = useState(false);

  return (
    <Modal isOpen={true} spacing="s" width="s" onRequestClose={onRequestClose}>
      <Modal.Body>
        <Text fontWeight="bold" size="xl" spacing={description ? 's' : 'l'}>
          {header}
        </Text>
        {description && (
          <Text size="m" spacing="l" color="gray-600">
            {description}
          </Text>
        )}
        <div className="flex flex-row justify-between space-x-2">
          <Button onClick={onRequestClose} theme="ghost" size="s">
            Cancel
          </Button>
          <Button
            size="s"
            onClick={async () => {
              setIsBusy(true);
              await onAccept();
              onRequestClose();
            }}
            status={isBusy ? 'busy' : ''}
          >
            {onAcceptText}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MountedConfirmationModal;
