import './App.css';
import Toggle from './component/toggle';
import Modal from './component/modal';
import Tab from './component/tab';
import Tag from './component/tag';
import ClickToEdit from './component/clickToEdit';

function App() {
  return (
    <div className="App">
      {/* hallo */}
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <ClickToEdit />
    </div>
  );
}

export default App;
