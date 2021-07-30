import { useEffect, useState } from "react";

export default function useFocusBlur (refOrId, defaultFocusState = false) {
    const [focus, setFocus] = useState(defaultFocusState);

    useEffect(() => {
        let elementCurrent;
        if (!refOrId ){
            elementCurrent = null
        }else if(typeof refOrId === "string"){
            elementCurrent = document.getElementById(refOrId);
        }
        else if(refOrId.hasOwnProperty('current')){
            elementCurrent = refOrId.current;
        }

        function handleBlur(e) {
            e.stopPropagation();
            if (elementCurrent) {
                if (!elementCurrent.contains(e.target)) {
                    setFocus(false);
                } else {
                    setFocus(true);
                }
            }
        }

        function focusSetFocus(e) {
            e.stopPropagation();
            setFocus(true);
        }

        function blurSetFocus(e) {
            e.stopPropagation();
            setFocus(false);
        }


        if (elementCurrent && elementCurrent.hasOwnProperty('childNodes')) {
            const childrenNodes = elementCurrent.childNodes;
            childrenNodes.forEach((divChildren) => {
                divChildren.addEventListener("focus", focusSetFocus);
                divChildren.addEventListener("blur", blurSetFocus);
            });
        }

        document.addEventListener("click", handleBlur, false);

        return function () {
            document.removeEventListener("click", handleBlur, false);

            if (elementCurrent && elementCurrent.hasOwnProperty('childNodes')) {
                const childrenNodes = elementCurrent.childNodes;
                childrenNodes.forEach((divChildren) => {
                    divChildren.removeEventListener("focus", focusSetFocus);
                    divChildren.removeEventListener("blur", blurSetFocus);
                });
            }
        };
    }, []);

    return focus;
};
