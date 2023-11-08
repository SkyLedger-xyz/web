import findChildByRole from '@/modules/application/utils/findChildByRole';

import Content from './subComponents/Content';
import Footer from './subComponents/Footer';
import Header from './subComponents/Header';

interface ContentLayoutInterface {
  children: any;
}

const ContentLayout = ({ children }: ContentLayoutInterface) => {
  const header = findChildByRole(children, 'ContentLayout.Header');
  const content = findChildByRole(children, 'ContentLayout.Content');
  const footer = findChildByRole(children, 'ContentLayout.Footer');

  return (
    <div className="m-auto flex min-h-screen flex-col">
      {header && (
        <header className="border-b-2 border-gray-100">
          <div className="m-auto max-w-[1500px]">{header}</div>
        </header>
      )}
      <main className="m-auto w-full max-w-[1500px] flex-1 px-4 py-6 md:px-0 md:py-12">{content}</main>
      {footer && <footer className="m-auto w-full max-w-[1500px]">{footer}</footer>}
    </div>
  );
};

export default Object.assign(ContentLayout, { Header, Content, Footer });
