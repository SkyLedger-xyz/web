import { PhotoIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useFormikContext } from 'formik';

import { Avatar } from '@/modules/application/components/DesignSystem';
import { ImageCropper } from '@/modules/common/components/ImageCropper';

import FormikField from './FormikField';

const FormikAvatarField = (props) => {
  const { setFieldValue } = useFormikContext();

  const { name, label: upstreamLabel } = props;

  const label = typeof upstreamLabel !== 'string' ? '' : upstreamLabel;

  const renderInput = ({ field: { name: fieldName, value } }) => (
    <ImageCropper
      settings={{
        aspectRatio: 1,
        circularCrop: true,
        minWidth: 250,
        minHeight: 250,
        size: 10,
      }}
      onChange={(image) => {
        setFieldValue(fieldName, image);
      }}
    >
      {({ src, handleFileSelect }) => {
        if (!value) {
          return (
            <div
              className="group relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400"
              onClick={handleFileSelect}
            >
              <PhotoIcon className="w-10 group-hover:hidden" />
              <ArrowUpTrayIcon className="hidden w-10 group-hover:block" />
            </div>
          );
        }

        return (
          <div
            className="h-24 w-24 cursor-pointer self-start rounded-full border-2 border-gray-200"
            onClick={handleFileSelect}
          >
            <Avatar
              size="xl"
              src={src || value}
              onClick={handleFileSelect}
              radius="full"
              priority={true}
              alt="Your profile picture"
            />
          </div>
        );
      }}
    </ImageCropper>
  );

  return <FormikField name={name} input={renderInput} label={label} {...props} />;
};

export default FormikAvatarField;
