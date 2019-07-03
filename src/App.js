import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TicketList from "./components/TicketList";

function App() {
  return (
    <div>
    <Header/>
    <TicketList/>
  </div>
  );
}

export default App;
