'use client';

import { ethers } from 'ethers';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { getUrlSkyLedger } from '@/models/application/services/UrlService';
import { Button, Text } from '@/modules/application/components/DesignSystem';
import { FormikInputField } from '@/modules/common/components/Formik';

const validationSchema = yup.object().shape({
  address: yup
    .string()
    .trim()
    .test('isValidAddress', 'Enter a valid address', (value) => {
      if (!value) {
        return false;
      }

      return ethers.utils.isAddress(value);
    })
    .required('Enter an address'),
});

const SkyLedgerDeploy = () => {
  const router = useRouter();

  const handleSubmit = async ({ address }) => {
    router.push(getUrlSkyLedger(address));
  };

  return (
    <div className="flex max-w-lg flex-col items-center rounded-2xl bg-primary-400 p-10 shadow-2xl">
      <Text spacing="m" size="xl" fontWeight="bold">
        Find a SkyLedger
      </Text>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ address: '' }}
        validateOnBlur={true}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex space-x-5">
              <FormikInputField name="address" placeholder="Enter address" />
              <Button type="submit" status={isSubmitting ? 'busy' : ''}>
                Find
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SkyLedgerDeploy;
