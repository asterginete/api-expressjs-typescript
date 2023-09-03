import { Client } from 'elasticsearch';
import esClient from '../config/elasticsearch';

class SearchService {
  private client: Client;

  constructor() {
    this.client = esClient;
  }

  async search(index: string, query: string) {
    try {
      const response = await this.client.search({
        index,
        body: {
          query: {
            match: {
              _all: query
            }
          }
        }
      });
      return response.hits.hits;
    } catch (error) {
      throw new Error(`Error searching in Elasticsearch: ${error.message}`);
    }
  }
}

export default new SearchService();
