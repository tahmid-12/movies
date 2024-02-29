import { useState } from "react"
import "./style.scss";

interface Tab {
    id: number;
    title: string;
  }

interface Props {
    data: Tab[]; 
    onTabChange: (tab: Tab) => void; 
  }

const SwitchTabs = ({data, onTabChange}: Props) => {

  const [selectedTab, setSelectedtab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab: Tab, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
        setSelectedtab(index);
    }, 300);
    onTabChange(tab);
  }

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {
            data.map((tab, index) => (
                <span key={tab?.id} className={`tabItem ${selectedTab === index ? "active" : ""}`} onClick={() => activeTab(tab, index)}>
                    {tab.title}
                </span>
            ))
        }
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  )
}

export default SwitchTabs
