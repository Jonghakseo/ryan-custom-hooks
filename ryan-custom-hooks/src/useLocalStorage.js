import { useCallback, useEffect, useState } from "react";

function useLocalstorage(keyStr, defaultValue = null) {
    const [value, setValue] = useState(getExistedValue());

    function init() {
        const existedValue = getExistedValue();
        if (existedValue === null) {
            set(defaultValue);
        }
    }

    function getExistedValue() {
        if (typeof localStorage === "undefined") {
            return null;
        }
        const storedValue = localStorage.getItem(keyStr) || "null";
        try {
            return JSON.parse(storedValue);
        } catch (err) {
            console.error(err);
        }
        return storedValue;
    }

    function saveValueToLocalStorage(k, v) {
        if (typeof localStorage === "undefined") {
            return null;
        }
        return localStorage.setItem(k, JSON.stringify(v));
    }

    function set(newValue) {
        setValue(newValue);
        saveValueToLocalStorage(keyStr, newValue);
    }

    const listen = useCallback((e) => {
        if (e.storageArea === localStorage && e.key === keyStr) {
            setValue(e.newValue);
        }
    }, []);

    function remove() {
        set(null);
        if (typeof localStorage === "undefined") {
            return false;
        }
        return localStorage.removeItem(keyStr);
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        window.addEventListener("storage", listen);
        return () => {
            window.removeEventListener("storage", listen);
        };
    }, []);
    
    const handler = [value, set, remove];
    handler.value = value;
    handler.set = set;
    handler.remove = remove;
    return handler;
}

export default useLocalstorage;
