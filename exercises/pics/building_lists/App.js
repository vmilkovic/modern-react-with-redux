import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
];

export default class App extends React.Component {
  render() {
    const renderedUsers = users.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
    return <ul>{renderedUsers}</ul>;
  }
}
