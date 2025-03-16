import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { title, subtitle, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
