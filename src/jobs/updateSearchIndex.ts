import cron from 'node-cron';
import esClient from '../config/elasticsearch';
import Product from '../models/productSchema';
import logger from '../utils/logger';

class UpdateSearchIndex {
  constructor() {
    // Schedule the job to run every day at 4 AM
    cron.schedule('0 4 * * *', this.updateIndex);
  }

  async updateIndex() {
    try {
      // Fetch all products
      const products = await Product.find({});

      // Prepare bulk update data
      const body = products.flatMap((doc) => [
        { index: { _index: 'products', _id: doc._id.toString() } },
        doc.toObject()
      ]);

      // Bulk update to Elasticsearch
      await esClient.bulk({ body });

      logger.info('Elasticsearch indices updated successfully');
    } catch (error) {
      logger.error(`Error updating Elasticsearch indices: ${error.message}`);
    }
  }
}

export default new UpdateSearchIndex();
