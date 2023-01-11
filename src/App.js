import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeListItem from "./components/EmployeeListItem";
import EmployeePage from "./components/EmployeePage";
import Header from "./components/Header";
import HomePage from  "./components/HomePage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h2> Hello from React</h2>
      <EmployeeList/>
      <EmployeeListItem/>
      <EmployeePage/>
      <Header/>
      <HomePage/>
      <SearchBar/>
    </div>
  );
}

export default App;
