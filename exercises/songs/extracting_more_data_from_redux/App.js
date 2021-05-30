// You don't need to make any changes to this file!
// Take a look at SongList.js

import React from 'react';
import { SongList } from './SongList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
        <SongList />
      </div>
    );
  }
}
