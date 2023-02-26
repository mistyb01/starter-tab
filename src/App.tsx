import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { BookmarkType } from './@types/app';
import AddBookmark from './AddBookmark';
import {mockData, demoData} from './data/static-data';
import { useLocalStorage } from 'usehooks-ts';
import EditMode from './edit-mode/EditMode';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Demo } from './Demo';

const App:FC = () => {
  
  const [bookmarkData, setBookmarkData] = useLocalStorage('bookmarkData', mockData);

  function handleAddToBookmarks(newData:BookmarkType) {
    // overwrite the mock data if we're saving data for the first time
    if (localStorage.getItem('bookmarkData') == null) {
      setBookmarkData([newData]);
    } else {
      setBookmarkData([...bookmarkData, newData]);
    }
  }
 
  function updateBookmarkData(newData:BookmarkType[]) {
    setBookmarkData(newData);
  }

  return (
    <div className="app">
        <Routes>
          <Route path='/'
            element={
              <Home bookmarkData={bookmarkData} />}
          />
          <Route path='/add' 
            element={
              <AddBookmark 
                handleAddToBookmarks={handleAddToBookmarks} 
                bookmarkData={bookmarkData}/>}
          />
          <Route path='/edit'
            element={
              <EditMode 
                bookmarkData={bookmarkData} 
                updateBookmarkData={updateBookmarkData}/>}
          />
          <Route path='/demo'
            element={
              <Demo 
                bookmarkData={bookmarkData} 
                updateBookmarkData={updateBookmarkData}/>
            }/>
        </Routes>
    </div>
  );
}

export default App;
