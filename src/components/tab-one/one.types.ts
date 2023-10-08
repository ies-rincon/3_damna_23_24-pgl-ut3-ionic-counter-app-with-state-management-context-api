interface TabOneViewProps {
  clickCounter: CounterContextType["clickCounter"];
  labelClick: string;
  languageApp: LanguageAppContextType["languageApp"];
}
interface CustomButtonProps {
  icon: string;
  iconName: "refresh" | "plus-one" | "exposure-minus-1";
}
