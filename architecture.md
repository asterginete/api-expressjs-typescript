+---------------------+
|                     |
|     API Gateway     |
|                     |
+----------+----------+
           |
           v
+----------+----------+     +---------------------+
|                     |     |                     |
|    Express Server   +---->+    Authentication   |
|                     |     |    & Authorization  |
+----------+----------+     +----------+----------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+    MongoDB   |
           |               |              |
           |               +------+-------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+    Redis     |
           |               |   (Caching)  |
           |               +------+-------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+  Elasticsearch  |
           |               |              |
           |               +------+-------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+    Cron Jobs |
           |               |              |
           |               +------+-------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+  Notification |
           |               |    Service   |
           |               +------+-------+
           |                      |
           |                      v
           |               +------+-------+
           |               |              |
           +-------------->+    Logger    |
                           |              |
                           +--------------+
