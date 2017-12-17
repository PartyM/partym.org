'use strict';

// [START functions_helloworld_storage]
/**
 * Background Cloud Function to be triggered by Cloud Storage.
 * Load file into BQ as per https://cloud.google.com/storage/docs/access-logs#should-you-use
 * then move file to archival bucket and finally delete the original file
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} callback The callback function.
 */
exports.processLog = function(event, callback) {
    // Imports the Google Cloud Storage and Bigquery client libraries
    const storage = require('@google-cloud/storage');
    const bigquery = require('@google-cloud/bigquery');

    const file = event.data;
    // Your Google Cloud Platform project ID
    const projectId = 'partym-site';

    // Instantiates clients
    const st = storage({
        projectId: projectId,
    });

    const bucketName = file.bucket;
    const filename = file.name;

    if (file.name.split('_')[1] == 'usage') {
        if (file.resourceState === 'not_exists') {
            console.log(`File ${file.name} deleted.`);
            return;
        } else if (file.metageneration === '1') {
            // metageneration attribute is updated on metadata changes.
            // on create value is 1
            console.log(`File ${file.name} uploaded.`);
        }
        //console.log(file);

        const bq = new bigquery({
            projectId: projectId,
        });

        let job;

        const datasetId = 'partym_org_access_logs';
        const tableId = "requests";

        // Imports data from a Google Cloud Storage file into the table.
        // The file is in CSV format so we need to skip the 1st row (schema)
        // which is already on the table.
        let md = {
            skipLeadingRows: 1,
        }

        //filename exmaple: www.partym.org_usage_2017_12_14_08_00_00_055ef5_v0
        let day_array = file.name.split("_").slice(2, 5)

        //sort out which day to apply logs to based on the filename above (UTC)
        let tablePartition = tableId + "$" + day_array[0] + day_array[1] + day_array[2]

        // [START bigquery_import_from_gcs]

        //TODO figure out duplicate rows
        bq
            .dataset(datasetId)
            .table(tablePartition)
            .import(st.bucket(file.bucket).file(file.name), md)
            .then(results => {
                job = results[0];
                console.log(`Job ${job.id} started.`);

                // Wait for the job to finish
                return job;
            })
            .then(metadata => {
                // Check the job's status for errors
                const errors = metadata.status.errors;
                if (errors && errors.length > 0) {
                    throw errors;
                }
            })
            .then(() => {
                console.log(`Job ${job.id} completed.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
        // [END bigquery_import_from_gcs]

    } else {
        // Delete non "usage" files
        st
            .bucket(bucketName)
            .file(filename)
            .delete()
            .then(() => {
                console.log(`gs://${bucketName}/${filename} deleted.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    // TODO move/delete the usage files after they've been imported into GCS
    callback();
};