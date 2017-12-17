Functions in this directory are used to support the PartyM.org site.

1. index.js - load usage logs into bigquery and delete any others. This currently leaves the logs in the bucket untouched afterwards.
 * deployed via: `gcloud beta functions deploy access_logs_to_bq --stage-bucket log-process-staging --trigger-bucket partymorg-access-logs  --entry-point processLog --memory 128MB --region us-central1 --source cloudfunctions/`
 * you can force a call with the following data:
   > {"bucket": "partymorg-access-logs",
"name": "filename"}
