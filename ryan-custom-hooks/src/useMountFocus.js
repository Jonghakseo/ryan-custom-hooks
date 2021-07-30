import {useEffect} from "react";

export default function useMountFocus (refOrId = "") {
  useEffect(() => {
    function setFocus() {
      return setTimeout(() => {
        if (typeof refOrId === "string") {
          const target = document.getElementById(refOrId);
          target?.focus();
        } else if (refOrId.current) {
          refOrId.current.focus();
        }
      }, 10);
    }
    setFocus()
  }, [refOrId]);
}