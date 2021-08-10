import React from 'react'

declare interface ToggleHandler {
    on: () => void;
    off: () => void;
}
declare function useToggle(defaultValue?: boolean):[boolean, (() => void ) & ToggleHandler]
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
declare function useLocalstorage<S>(keyStr:string, defaultValue?:S): [S | null, (value:S) => void, () => void]


export interface Step {
    key: any;
    value: any | null;
}

type KeyType<S> = S extends Step
    ? "key" extends keyof S
        ? S["key"]
        : never
    : never;

interface StepHandler<S extends Step> {
    now: S["key"];
    set: React.Dispatch<React.SetStateAction<S["key"]>>;
    next: () => void;
    prev: () => void;
}

declare function useStepHandler<S extends Step>(steps: S[], initialKey?:KeyType<S> ):[StepHandler<S>, () => void]

export {
    useToggle,
    useMountFocus,
    useFocusBlur,
    useDidMount,
    useScrollIntoView,
    useLocalstorage,
    useStepHandler
}
