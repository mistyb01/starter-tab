import React, { ReactEventHandler }  from 'react';
import { BookmarkType } from './@types/app';
var uniqid = require('uniqid');

interface Props {
    bookmarkData: BookmarkType[],
    category: string,
    tag: string,
    handleTagChange: ReactEventHandler
  }
  
export const Tags: React.FC<Props> = (props) => {
    const filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);
    const tags = Array.from(new Set(
        filteredBookmarks.map((bookmark) => bookmark.tag)
    ));

    return (
        <div>
            <ul className='tags-list'>
                {tags.map((tag) => {
                    if (tag === props.tag) {
                        return (<li key={uniqid()} className='tags-list__item tags-list__item--selected' onClick={props.handleTagChange} id={tag}>{tag}</li>);
                    } 
                    return (<li key={uniqid()} className='tags-list__item' onClick={props.handleTagChange} id={tag}>{tag}</li>);
                })}
            </ul>
      </div>
    )

}

export default Tags;