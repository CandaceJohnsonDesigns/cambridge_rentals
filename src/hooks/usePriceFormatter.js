export const usePriceFormatter = () => {
    const locale = "en-GB";
    const currency = "GBP";

    const formatToString = (amount) => {
        if (amount === null || amount === undefined || amount === "") {
            return "—";
        }

        const parsedAmount = typeof amount === "string" ? Number(amount) : amount;

        if (Number.isNaN(parsedAmount)) {
            return "—";
        }

        try {
            return new Intl.NumberFormat(locale, {
                style: "currency",
                currency,
            }).format(parsedAmount);
        } catch (error) {
            console.error('Failed to format price:', error);
            return `${currency} ${parsedAmount}`;
        }
    };

    return { formatToString, locale, currency };
};