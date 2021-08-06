import { useEffect } from "react";

function useDidMount(callback) {
  useEffect(() => {
    if (typeof callback === "function") {
      callback();
    }else {
      throw new Error("TypeError : useDidMount callback must be function type")
    }
  }, []);
}

export default useDidMount;
