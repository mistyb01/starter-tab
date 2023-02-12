import React  from 'react';
import { Link } from './@types/app';

interface Props {
  bookmarkData: Link[],
  category: string
}

// React.FC<Props> specifies that Bookmarks is a functional component.
export const Bookmarks: React.FC<Props> = (props) => {
  const filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);

  return (
    <div className="bookmarks-container">
      <ul className="bookmarks-list">
        {filteredBookmarks.map((bookmark) => {
            return (
              <li>
                <a href={bookmark.url} target="_blank">{bookmark.name}</a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Bookmarks;
