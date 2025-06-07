import { useEffect, useState } from 'react';
import { GlobalStyle } from '@abqm-ds/react';

export const withResponsiveBackground = (Story: any) => {
  const [bg, setBg] = useState('/background.jpg');
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth <= 992;
      const isStoryView = window.location.href.includes('viewMode=story');

      setBg(isMobile ? '/background-mobile.png' : '/background.jpg');
      setHeight(isStoryView ? '88vh' : 'auto');
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('popstate', update); // para navegação entre stories
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('popstate', update);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: height,
        padding: '2rem',
      }}
    >
      <GlobalStyle />
      <Story />
    </div>
  );
};
