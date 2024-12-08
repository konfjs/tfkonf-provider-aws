import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskconnectConnectorArgsCapacityAutoscalingScaleInPolicy {
}

export interface AwsMskconnectConnectorArgsCapacityAutoscalingScaleOutPolicy {
}

export interface AwsMskconnectConnectorArgsCapacityAutoscaling {
  max_worker_count: number;
  mcu_count?: number;
  min_worker_count: number;
  scale_in_policy?: AwsMskconnectConnectorArgsCapacityAutoscalingScaleInPolicy;
  scale_out_policy?: AwsMskconnectConnectorArgsCapacityAutoscalingScaleOutPolicy;
}

export interface AwsMskconnectConnectorArgsCapacityProvisionedCapacity {
  mcu_count?: number;
  worker_count: number;
}

export interface AwsMskconnectConnectorArgsCapacity {
  autoscaling?: AwsMskconnectConnectorArgsCapacityAutoscaling;
  provisioned_capacity?: AwsMskconnectConnectorArgsCapacityProvisionedCapacity;
}

export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClusterVpc {
  security_groups: string[];
  subnets: string[];
}

export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaCluster {
  bootstrap_servers: string;
  vpc: AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClusterVpc;
}

export interface AwsMskconnectConnectorArgsKafkaCluster {
  apache_kafka_cluster: AwsMskconnectConnectorArgsKafkaClusterApacheKafkaCluster;
}

export interface AwsMskconnectConnectorArgsKafkaClusterClientAuthentication {
  authentication_type?: string;
}

export interface AwsMskconnectConnectorArgsKafkaClusterEncryptionInTransit {
  encryption_type?: string;
}

export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}

export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryFirehose {
  delivery_stream?: string;
  enabled: boolean;
}

export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryS3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}

export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery {
  cloudwatch_logs?: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryCloudwatchLogs;
  firehose?: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryFirehose;
  s3?: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryS3;
}

export interface AwsMskconnectConnectorArgsLogDelivery {
  worker_log_delivery: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery;
}

export interface AwsMskconnectConnectorArgsPluginCustomPlugin {
  arn: string;
  revision: number;
}

export interface AwsMskconnectConnectorArgsPlugin {
  custom_plugin: AwsMskconnectConnectorArgsPluginCustomPlugin;
}

export interface AwsMskconnectConnectorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMskconnectConnectorArgsWorkerConfiguration {
  arn: string;
  revision: number;
}

export interface AwsMskconnectConnectorArgs {
  connector_configuration: { [key: string]: string };
  description?: string;
  kafkaconnect_version: string;
  name: string;
  service_execution_role_arn: string;
  tags?: { [key: string]: string };
  capacity: AwsMskconnectConnectorArgsCapacity;
  kafka_cluster: AwsMskconnectConnectorArgsKafkaCluster;
  kafka_cluster_client_authentication: AwsMskconnectConnectorArgsKafkaClusterClientAuthentication;
  kafka_cluster_encryption_in_transit: AwsMskconnectConnectorArgsKafkaClusterEncryptionInTransit;
  log_delivery?: AwsMskconnectConnectorArgsLogDelivery;
  plugin: AwsMskconnectConnectorArgsPlugin[];
  timeouts?: AwsMskconnectConnectorArgsTimeouts;
  worker_configuration?: AwsMskconnectConnectorArgsWorkerConfiguration;
}

export class aws_mskconnect_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMskconnectConnectorArgs) {
    const meta = {capacity:{isBlock:true,autoscaling:{isBlock:true,scale_in_policy:{isBlock:true},scale_out_policy:{isBlock:true}},provisioned_capacity:{isBlock:true}},kafka_cluster:{isBlock:true,apache_kafka_cluster:{isBlock:true,vpc:{isBlock:true}}},kafka_cluster_client_authentication:{isBlock:true},kafka_cluster_encryption_in_transit:{isBlock:true},log_delivery:{isBlock:true,worker_log_delivery:{isBlock:true,cloudwatch_logs:{isBlock:true},firehose:{isBlock:true},s3:{isBlock:true}}},plugin:{isBlock:true,custom_plugin:{isBlock:true}},timeouts:{isBlock:true},worker_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_mskconnect_connector", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get connector_configuration(): string {
    return `${this.resourceType}.${this.resourceName}.connector_configuration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kafkaconnect_version(): string {
    return `${this.resourceType}.${this.resourceName}.kafkaconnect_version`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get service_execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_execution_role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
