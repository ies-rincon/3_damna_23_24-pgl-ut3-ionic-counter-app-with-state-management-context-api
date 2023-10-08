import React from "react";
import { IonFabButton, IonIcon } from "@ionic/react";
import { useCounter } from "../../context/CounterContext";

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconName,
}) => {
  const { handleIncrement, handleDecrement, handleRefresh, clickCounter } =
    useCounter(); // Usa el contexto

  const onPressHandler = () => {
    if (iconName === "refresh") {
      handleRefresh();
    } else if (iconName === "plus-one") {
      handleIncrement();
    } else if (iconName === "exposure-minus-1") {
      handleDecrement();
    }
  };

  return (
    <IonFabButton
      disabled={iconName === "exposure-minus-1" && clickCounter === 0}
      onClick={onPressHandler}
      style={{ margin: 10 }}
    >
      <IonIcon icon={icon}></IonIcon>
    </IonFabButton>
  );
};
