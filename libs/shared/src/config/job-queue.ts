export enum JobTopicNameEnum {
  ACTIVE_JOBS_METRIC = 'metric-active-jobs',
  COMPLETED_JOBS_METRIC = 'metric-completed-jobs',
  INBOUND_PARSE_MAIL = 'inbound-parse-mail',
  STANDARD = 'standard',
  WEB_SOCKETS = 'ws_socket_queue',
  WORKFLOW = 'trigger-handler',
}

export enum ObservabilityBackgroundTransactionEnum {
  JOB_PROCESSING_QUEUE = 'job-processing-queue',
  TRIGGER_HANDLER_QUEUE = 'trigger-handler-queue',
  WS_SOCKET_QUEUE = 'ws_socket_queue',
}
