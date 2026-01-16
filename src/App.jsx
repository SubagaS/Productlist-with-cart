import data from '../data.json';
import Menu from './Components/Menu/Menu';

function App() {
  let imageSize = 'mobile';
  if (window.outerWidth <= 500) {
    imageSize = 'mobile';
  } else if (window.outerWidth > 500 && window.outerWidth <= 1200) {
    imageSize = 'tablet';
  } else {
    imageSize = 'desktop';
  }

  const newData = data.map((item) => {
    return { ...item, image: item.image[imageSize] };
  });

  return (
    <>
      <Menu allData={newData}/>
    </>
  );
}

export default App;
