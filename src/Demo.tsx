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
    bookmarkData: BookmarkType[],
    updateBookmarkData: Function
  }
  
export const Demo: React.FC<Props> = (props) => {
    useEffect(() => {
        props.updateBookmarkData(demoData);
    }, []);

  return (
    <Home bookmarkData={demoData}/>
  );
}

export default Demo;
