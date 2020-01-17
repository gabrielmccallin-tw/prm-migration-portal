import { stubApiDomain, apiDomain } from './env';

const domainOptions = {
    stub: 'stub',
    prod: 'prod',
    none: 'none'
};

const features = {
    api: domainOptions.prod
};

export const setFeatures = (featuresToSet) => {
    Object.entries(featuresToSet).forEach(([key, value]) => {
        features[key] = value;
    });
};

export const host = () => {
    return {
        [domainOptions.stub]: stubApiDomain,
        [domainOptions.prod]: apiDomain,
        [domainOptions.none]: ''
    } [features.api];
};