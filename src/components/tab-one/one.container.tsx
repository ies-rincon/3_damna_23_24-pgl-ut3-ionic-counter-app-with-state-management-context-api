import React from "react";
import TabOneView from "./one.view";
import { useCounter } from "../../context/CounterContext";
import { useLanguageApp } from "../../context/LanguageAppContext";
import "./TabOne.css";

const TabOneContainer: React.FC = () => {
  const { clickCounter } = useCounter();
  const { languageApp } = useLanguageApp();
  const labelClick = clickCounter === 1 ? "Click" : "Clicks";
  const props = {
    clickCounter,
    labelClick,
    languageApp,
  };
  return <TabOneView {...props} />;
};

export default TabOneContainer;
