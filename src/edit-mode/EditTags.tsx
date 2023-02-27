import React, {useState}  from 'react';
import { BookmarkType } from '../@types/app';
import CategoryRow from './CategoryRow';
import Select from 'react-select';


interface Props {
  bookmarkData: BookmarkType[],
  categoryList: string[],
  tagList: string[],
  updateBookmarkData: Function
}

export const EditTags: React.FC<Props> = (props) => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  let tagData = props.bookmarkData.map(item => ({tag: item.tag, category: item.category}))
  let tagList = props.tagList;

  if (selectedCategory !== 'all') {
      tagData = tagData.filter(item => item.category === selectedCategory);
      tagList = Array.from(new Set(
        tagData.map(item=>item.category)
      ))
  }

  function handleRenameTag(oldTagName:string, newTagName:string) {
    for (let i = 0; i < props.bookmarkData.length; i++) {
      if (props.bookmarkData[i].tag == oldTagName) {
        props.bookmarkData[i].tag = newTagName;
      }
      props.updateBookmarkData(props.bookmarkData);
    }
  }

  function handleDeleteTag(tagName:string) {
    for (let i = 0; i < props.bookmarkData.length; i++) {
      if (props.bookmarkData[i].tag == tagName) {
        props.bookmarkData.splice(i,1);
      }
      props.updateBookmarkData(props.bookmarkData);
    }
  }

  return (
    <div className="edit-mode-container vertical-space">
        <Select 
            options={
                props.categoryList.map(category => ({label: category, value: category}))}
            onChange={(opt) => setSelectedCategory(opt!.value)}
            placeholder={'filter by category'}
        />
        <ul className="editor-list editor-list--category">
          <li className="editor-list__heading">
                  <span>tag</span>
                  <span>options</span>
          </li>
          {tagList.map((item) => 
            <CategoryRow 
              name={item} 
              handleRenameCategory={handleRenameTag}
              handleDeleteCategory={handleDeleteTag}/>
          )}
        </ul>
   
    </div>
  );
}

export default EditTags;
