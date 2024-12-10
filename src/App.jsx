import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [title, setTitle] = useState(tabs[0].title);
  const [content, setContent] = useState(tabs[0].content);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <Tabs
              tabs={tabs}
              activeTabId={activeTabId}
              onClick={(newTitle, newContent, newActiveTabId) => {
                setTitle(newTitle);
                setContent(newContent);
                setActiveTabId(newActiveTabId);
              }}
            />
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
