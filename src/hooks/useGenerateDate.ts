import { useCallback } from "react";

const useGenerateDate = () => {
    const generateRandomDate = useCallback(() => {
        const start = new Date(2020, 0, 1);
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        return date.toLocaleDateString('en-US', options);
    }, []);

    return generateRandomDate;
};

export default useGenerateDate;
