import { useState } from "react";

export default function useToggle(
    defaultValue
){
  const [toggleValue, setToggleValue] = useState(
      defaultValue === undefined ? false : defaultValue
  );

  function handleToggle(){
    setToggleValue((t) => !t);
  }

  handleToggle.on = ()=> setToggleValue(true)
  handleToggle.off = ()=> setToggleValue(false)

  return [toggleValue, handleToggle];
}