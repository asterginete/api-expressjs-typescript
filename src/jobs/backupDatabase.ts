import cron from 'node-cron';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import logger from '../utils/logger';

class BackupDatabase {
  private backupDir: string;

  constructor() {
    this.backupDir = path.join(__dirname, '../../backups');

    // Ensure backup directory exists
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir);
    }

    // Schedule the job to run every day at 2 AM
    cron.schedule('0 2 * * *', this.backup);
  }

  backup() {
    const date = new Date();
    const backupName = `backup-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.gz`;
    const backupPath = path.join(this.backupDir, backupName);

    const cmd = `mongodump --uri=${process.env.MONGODB_URI} --gzip --archive=${backupPath}`;

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        logger.error(`Error backing up database: ${error.message}`);
        return;
      }
      logger.info(`Database backup saved to ${backupPath}`);
    });
  }
}

export default new BackupDatabase();
