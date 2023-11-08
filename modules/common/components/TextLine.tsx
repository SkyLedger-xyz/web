import { Text } from '@/modules/application/components/DesignSystem';

const TextLine = ({ children }) => (
  <div className="flex items-center py-4">
    <div className="h-px w-5 bg-gray-300" />
    <span className="shrink px-4 text-2xl">
      <Text size="s" fontWeight="bold" transform="uppercase" tag="div">
        {children}
      </Text>
    </span>
    <div className="h-px grow bg-gray-300" />
  </div>
);

export default TextLine;
