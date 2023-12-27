/*
 *
 * Example (Firocoin)
 *
 */
 
// Firocoin Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Kiirocoin';
config.template = 'kiirocoin';

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = '[address]';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Kiirocoin';
config.primary.coin.symbol = 'KIIRO';
config.primary.coin.algorithm = 'firopow';

// Checks Configuration
config.primary.checks = {};
config.primary.checks.enabled = true;

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 8080;
daemons1.username = 'my-user';
daemons1.password = 'my-passwd';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = true;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.05;
config.primary.payments.transactionFee = 0.04;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = port;
config.primary.payments.daemon.username = 'my-user';
config.primary.payments.daemon.password = 'my-passwd';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = '[address]';
recipient1.percentage = 0.05;
config.primary.recipients.push(recipient1);

// Statistics Configuration
config.primary.statistics = {};
config.primary.statistics.enabled = true;

// ZMQ Configuration
config.primary.zmq = {};
config.primary.zmq.enabled = false;
config.primary.zmq.host = '127.0.0.1';
config.primary.zmq.port = 29000;

// Shared Configuration
////////////////////////////////////////////////////////////////////////////////

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = port;
ports1.enabled = true;
ports1.type = 'shared';
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = 32;
ports1.difficulty.minimum = 8;
ports1.difficulty.maximum = 512;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// Settings Configuration
config.settings = {};

// Banning Configuration
config.settings.banning = {};
config.settings.testnet = 'Mainnet';
config.settings.banning.banLength = 600000; // ms
config.settings.banning.checkThreshold = 500;
config.settings.banning.invalidPercent = 50;
config.settings.banning.purgeInterval = 300000; // ms

// Batch Configuration
config.settings.batch = {};
config.settings.batch.limit = 200;

// Timeout Configuration
config.settings.timeout = {};
config.settings.timeout.connection = 600000; // ms
config.settings.timeout.rebroadcast = 60000; // ms

// Interval Configuration
config.settings.interval = {};
config.settings.interval.blocks = 1000; // ms
config.settings.interval.checks = 90000; // ms
config.settings.interval.historical = 600000; // ms
config.settings.interval.payments = 7200000; // ms
config.settings.interval.recent = 600000; // ms
config.settings.interval.rounds = 60000; // ms
config.settings.interval.statistics = 90000; // ms

// Window Configuration
config.settings.window = {};
config.settings.window.hashrate = 300000; // ms
config.settings.window.inactive = 604800000; // ms
config.settings.window.rounds = 21600000; // ms
config.settings.window.updates = 300000; // ms

// Export Configuration
module.exports = config;
