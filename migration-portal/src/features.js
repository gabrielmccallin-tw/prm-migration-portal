import { stubApiDomain, apiDomain } from './env';

export const features = {
    api: 'fe'
};

export const setFeatures = (featuresToSet) => {
    Object.entries(featuresToSet).forEach(([key, value]) => {
        features[key] = value;
    });
};

export const host = () => {
    return features.api === 'stub'
        ? stubApiDomain
        : features.api === 'prod'
            ? apiDomain
            : 'none';
};

export const local = () => {
    return features.api === 'fe';
}