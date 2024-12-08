import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoPublicAccess {
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  sasl?: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
  client_authentication?: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfo {
  public_access?: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoPublicAccess;
  vpc_connectivity?: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  enabled?: boolean;
  volume_throughput?: number;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  volume_size?: number;
  provisioned_throughput?: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfo {
  ebs_storage_info?: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}

export interface AwsMskClusterArgsBrokerNodeGroupInfo {
  az_distribution?: string;
  client_subnets: string[];
  instance_type: string;
  security_groups: string[];
  connectivity_info?: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfo;
  storage_info?: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfo;
}

export interface AwsMskClusterArgsClientAuthenticationSasl {
  iam?: boolean;
  scram?: boolean;
}

export interface AwsMskClusterArgsClientAuthenticationTls {
  certificate_authority_arns?: string[];
}

export interface AwsMskClusterArgsClientAuthentication {
  unauthenticated?: boolean;
  sasl?: AwsMskClusterArgsClientAuthenticationSasl;
  tls?: AwsMskClusterArgsClientAuthenticationTls;
}

export interface AwsMskClusterArgsConfigurationInfo {
  arn: string;
  revision: number;
}

export interface AwsMskClusterArgsEncryptionInfoEncryptionInTransit {
  client_broker?: string;
  in_cluster?: boolean;
}

export interface AwsMskClusterArgsEncryptionInfo {
  encryption_in_transit?: AwsMskClusterArgsEncryptionInfoEncryptionInTransit;
}

export interface AwsMskClusterArgsLoggingInfoBrokerLogsCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}

export interface AwsMskClusterArgsLoggingInfoBrokerLogsFirehose {
  delivery_stream?: string;
  enabled: boolean;
}

export interface AwsMskClusterArgsLoggingInfoBrokerLogsS3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}

export interface AwsMskClusterArgsLoggingInfoBrokerLogs {
  cloudwatch_logs?: AwsMskClusterArgsLoggingInfoBrokerLogsCloudwatchLogs;
  firehose?: AwsMskClusterArgsLoggingInfoBrokerLogsFirehose;
  s3?: AwsMskClusterArgsLoggingInfoBrokerLogsS3;
}

export interface AwsMskClusterArgsLoggingInfo {
  broker_logs: AwsMskClusterArgsLoggingInfoBrokerLogs;
}

export interface AwsMskClusterArgsOpenMonitoringPrometheusJmxExporter {
  enabled_in_broker: boolean;
}

export interface AwsMskClusterArgsOpenMonitoringPrometheusNodeExporter {
  enabled_in_broker: boolean;
}

export interface AwsMskClusterArgsOpenMonitoringPrometheus {
  jmx_exporter?: AwsMskClusterArgsOpenMonitoringPrometheusJmxExporter;
  node_exporter?: AwsMskClusterArgsOpenMonitoringPrometheusNodeExporter;
}

export interface AwsMskClusterArgsOpenMonitoring {
  prometheus: AwsMskClusterArgsOpenMonitoringPrometheus;
}

export interface AwsMskClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMskClusterArgs {
  cluster_name: string;
  enhanced_monitoring?: string;
  kafka_version: string;
  number_of_broker_nodes: number;
  tags?: { [key: string]: string };
  broker_node_group_info: AwsMskClusterArgsBrokerNodeGroupInfo;
  client_authentication?: AwsMskClusterArgsClientAuthentication;
  configuration_info?: AwsMskClusterArgsConfigurationInfo;
  encryption_info?: AwsMskClusterArgsEncryptionInfo;
  logging_info?: AwsMskClusterArgsLoggingInfo;
  open_monitoring?: AwsMskClusterArgsOpenMonitoring;
  timeouts?: AwsMskClusterArgsTimeouts;
}

export class aws_msk_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMskClusterArgs) {
    const meta = {broker_node_group_info:{isBlock:true,connectivity_info:{isBlock:true,public_access:{isBlock:true},vpc_connectivity:{isBlock:true,client_authentication:{isBlock:true,sasl:{isBlock:true}}}},storage_info:{isBlock:true,ebs_storage_info:{isBlock:true,provisioned_throughput:{isBlock:true}}}},client_authentication:{isBlock:true,sasl:{isBlock:true},tls:{isBlock:true}},configuration_info:{isBlock:true},encryption_info:{isBlock:true,encryption_in_transit:{isBlock:true}},logging_info:{isBlock:true,broker_logs:{isBlock:true,cloudwatch_logs:{isBlock:true},firehose:{isBlock:true},s3:{isBlock:true}}},open_monitoring:{isBlock:true,prometheus:{isBlock:true,jmx_exporter:{isBlock:true},node_exporter:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_msk_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get bootstrap_brokers(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers`;
  }

  get bootstrap_brokers_public_sasl_iam(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_iam`;
  }

  get bootstrap_brokers_public_sasl_scram(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_scram`;
  }

  get bootstrap_brokers_public_tls(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_tls`;
  }

  get bootstrap_brokers_sasl_iam(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_iam`;
  }

  get bootstrap_brokers_sasl_scram(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_scram`;
  }

  get bootstrap_brokers_tls(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_tls`;
  }

  get bootstrap_brokers_vpc_connectivity_sasl_iam(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_sasl_iam`;
  }

  get bootstrap_brokers_vpc_connectivity_sasl_scram(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_sasl_scram`;
  }

  get bootstrap_brokers_vpc_connectivity_tls(): string {
    return `${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_tls`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get cluster_uuid(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_uuid`;
  }

  get current_version(): string {
    return `${this.resourceType}.${this.resourceName}.current_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kafka_version(): string {
    return `${this.resourceType}.${this.resourceName}.kafka_version`;
  }

  get number_of_broker_nodes(): string {
    return `${this.resourceType}.${this.resourceName}.number_of_broker_nodes`;
  }

  get storage_mode(): string {
    return `${this.resourceType}.${this.resourceName}.storage_mode`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get zookeeper_connect_string(): string {
    return `${this.resourceType}.${this.resourceName}.zookeeper_connect_string`;
  }

  get zookeeper_connect_string_tls(): string {
    return `${this.resourceType}.${this.resourceName}.zookeeper_connect_string_tls`;
  }
}
