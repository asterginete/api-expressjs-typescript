import cron from 'node-cron';
import path from 'path';
import fs from 'fs';
import logger from '../utils/logger';

class CleanUpLogs {
  private logsDir: string;

  constructor() {
    this.logsDir = path.join(__dirname, '../../logs');

    // Ensure logs directory exists
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir);
    }

    // Schedule the job to run every month on the 1st at 3 AM
    cron.schedule('0 3 1 * *', this.cleanUp);
  }

  cleanUp() {
    fs.readdir(this.logsDir, (err, files) => {
      if (err) {
        logger.error(`Error reading logs directory: ${err.message}`);
        return;
      }

      for (const file of files) {
        const filePath = path.join(this.logsDir, file);
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            logger.error(`Error deleting log file ${file}: ${unlinkErr.message}`);
          } else {
            logger.info(`Deleted log file ${file}`);
          }
        });
      }
    });
  }
}

export default new CleanUpLogs();
