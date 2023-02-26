import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { BookmarkType } from './@types/app';
import AddBookmark from './AddBookmark';
import {demoData} from './data/static-data';
import { useLocalStorage } from 'usehooks-ts';
import EditMode from './edit-mode/EditMode';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


interface Props {

  }
  
export const Demo: React.FC<Props> = (props) => {
  const [demoBookmarkData, setDemoData] = useState(demoData)
    useEffect(() => {
        // props.updateBookmarkData(demoData);
    }, []);

  return (
    <Home bookmarkData={demoBookmarkData}/>
  );
}

export default Demo;
