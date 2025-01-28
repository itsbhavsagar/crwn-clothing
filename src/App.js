import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      subtitle: 'shop now',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      subtitle: 'shop now',

      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      subtitle: 'shop now',

      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      subtitle: 'shop now',

      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      subtitle: 'shop now',

      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <>
      <div className="categories-container">
        {categories.map(({ title, subtitle, imageUrl }) => (
          <div className="category-container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
