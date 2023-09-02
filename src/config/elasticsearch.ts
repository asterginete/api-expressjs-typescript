import { Client } from 'elasticsearch';
import logger from '../utils/logger';

const esClient = new Client({
  host: process.env.ELASTICSEARCH_URL || 'localhost:9200',
  log: 'trace', // This will provide detailed logging. Adjust the level as needed.
  apiVersion: '7.10', // Use the version of your Elasticsearch instance.
});

// Ping the Elasticsearch cluster to ensure it's up.
esClient.ping({
  requestTimeout: 30000,
}, (error) => {
  if (error) {
    logger.error('Elasticsearch cluster is down!');
  } else {
    logger.info('Elasticsearch connected successfully');
  }
});

export default esClient;
