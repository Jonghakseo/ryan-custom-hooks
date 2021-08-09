import {  useMemo, useState } from "react";

export default function useStepHandler(
    steps,
    initialKey
) {
    const getStepIndex = (targetKey) => {
        return steps.findIndex(({ key }) => key === targetKey);
    };

    const initialStep = useMemo(() => {
        if (steps === undefined || steps === null || steps.length === 0) {
            return null;
        }
        const hasInitialKey = !!initialKey;
        if (hasInitialKey) {
            const found = steps.find(({ key }) => key === initialKey) || steps[0];
            return found.key;
        }
        return steps[0].key;
    }, [steps, initialKey]);

    const [stepNowKey, setStepKey] = useState(initialStep);

    const handleNextStep = () => {
        const i = getStepIndex(stepNowKey);
        if (i === -1) {
            throw new Error("NotFoundError: It is not valid step key");
        } else if (i + 1 === steps.length) {
            console.error("handleNextStep : last step");
        } else {
            setStepKey(steps[i + 1].key);
        }
    };
    const handlePrevStep = () => {
        const i = getStepIndex(stepNowKey);
        if (i === -1) {
            throw new Error("NotFoundError: It is not valid step key");
        } else if (i === 0) {
            console.error("handlePrevStep : first step");
        } else {
            setStepKey(steps[i - 1].key);
        }
    };

    const handler = {
        now: stepNowKey,
        set: setStepKey,
        next: handleNextStep,
        prev: handlePrevStep,
    };

    const returner = () => {
        if (stepNowKey === null) return false;

        const found = steps.find(({ key }) => key === stepNowKey);
        return found ? found.value : false;
    };

    return [handler, returner];
}
