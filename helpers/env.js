// environments

// dependencies

// module scaffolding
const env = {};

env.staging = {
    port: 3000,
    envName: 'production',
};

env.production = {
    port: 5000,
    envName: 'production',
};

// determine which env passed from cli
const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corrosponding env object

const envToExport = typeof env[currentEnv] === 'object' ? env[currentEnv] : env.staging;

// exports
module.exports = envToExport;
