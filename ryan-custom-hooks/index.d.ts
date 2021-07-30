import React from 'react'

declare function useToggle(defaultValue?: boolean):[boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]
declare function useMountFocus(refOrId: React.MutableRefObject<any> | string):void
declare function useFocusBlur(refOrId: React.MutableRefObject<any> | string, defaultFocusState?:boolean):boolean

export { useToggle, useMountFocus, useFocusBlur }
