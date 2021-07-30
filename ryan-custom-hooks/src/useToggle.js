import {useState} from "react";

export default function useToggle(
    defaultValue
){
  const [toggleValue, setToggleValue] = useState(
      defaultValue === undefined ? false : defaultValue
  );

  const handleToggle = () => {
    setToggleValue((t) => !t);
  };

  return [toggleValue, handleToggle, setToggleValue];
}