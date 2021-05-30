// You don't need to make any changes to this file!
// Take a look at SongList.js

import React from 'react';

export const connect = (mapStateToProps) => {
  return (Comp) => {
    const state = {
      songs: [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' },
      ],
      favoriteTitle: 'All Star',
    };

    return (props) => {
      return <Comp {...props} {...mapStateToProps(state)} />;
    };
  };
};
