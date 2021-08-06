import React from 'react'

declare function useToggle(defaultValue?: boolean):[boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]
declare function useMountFocus(refOrId: React.MutableRefObject<any> | string):void
declare function useFocusBlur(refOrId: React.MutableRefObject<any> | string, defaultFocusState?:boolean):boolean
declare function useDidMount(cb?: (p?:any)=>any):void


declare function scrollYIntoView(refOrId: React.MutableRefObject<any> | string):void
declare function scrollXIntoView(refOrId: React.MutableRefObject<any> | string):void
interface ScrollIntViewReturnFunctions {
    scrollXIntoView: typeof scrollXIntoView,
    scrollYIntoView: typeof scrollYIntoView
}
declare function useScrollIntoView(scrollDelay?:number):ScrollIntViewReturnFunctions

export { useToggle, useMountFocus, useFocusBlur, useDidMount, useScrollIntoView }
