export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return tabs.map(tab => (
    <li
      key={tab.id}
      data-cy="Tab"
      className={activeTabId === tab.id ? 'is-active' : ''}
    >
      <a
        onClick={() => onTabSelected(tab.title, tab.content, tab.id)}
        href={`#${tab.id}`}
        data-cy="TabLink"
      >
        {tab.title}
      </a>
    </li>
  ));
};
