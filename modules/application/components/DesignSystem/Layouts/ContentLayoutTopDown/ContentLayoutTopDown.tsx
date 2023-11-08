import findChildByRole from '@/modules/application/utils/findChildByRole';

import Content from './subComponents/Content';
import Footer from './subComponents/Footer';
import Header from './subComponents/Header';

interface ContentLayoutTopDown {
  children: any;
}

const ContentLayoutTopDown = ({ children }: ContentLayoutTopDown) => {
  const header = findChildByRole(children, 'ContentLayoutTopDown.Header');
  const content = findChildByRole(children, 'ContentLayoutTopDown.Content');
  const footer = findChildByRole(children, 'ContentLayoutTopDown.Footer');

  return (
    <div className="m-auto flex min-h-screen max-w-[1500px] flex-col">
      {header && <header>{header}</header>}
      <main className="flex-1 p-5">{content}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Object.assign(ContentLayoutTopDown, { Header, Content, Footer });
