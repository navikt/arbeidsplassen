export function removeEmptyPropertiesFromQuery(query) {
    const newObj = {};
    Object.keys(query).forEach((prop) => {
        const value = query[prop];

        if (prop === "international" && value === false) {
            // Skip international flag if it is false
        } else if (Array.isArray(value)) {
            if (value.length > 0) {
                newObj[prop] = value;
            }
        } else if (value !== undefined && value !== "") {
            newObj[prop] = value;
        }
    });

    return newObj;
}

export const initialQuery = {
    q: "",
    from: 0,
    size: 25,
    counties: [],
    countries: [],
    engagementType: [],
    extent: [],
    remote: [],
    municipals: [],
    occupationFirstLevels: [],
    occupationSecondLevels: [],
    published: undefined,
    sector: [],
    sort: "",
    international: false,
};
