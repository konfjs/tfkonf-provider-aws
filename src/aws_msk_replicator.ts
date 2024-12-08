import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskReplicatorArgsKafkaClusterAmazonMskCluster {
  msk_cluster_arn: string;
}

export interface AwsMskReplicatorArgsKafkaClusterVpcConfig {
  security_groups_ids?: string[];
  subnet_ids: string[];
}

export interface AwsMskReplicatorArgsKafkaCluster {
  amazon_msk_cluster: AwsMskReplicatorArgsKafkaClusterAmazonMskCluster;
  vpc_config: AwsMskReplicatorArgsKafkaClusterVpcConfig;
}

export interface AwsMskReplicatorArgsReplicationInfoListConsumerGroupReplication {
  consumer_groups_to_exclude?: string[];
  consumer_groups_to_replicate: string[];
  detect_and_copy_new_consumer_groups?: boolean;
  synchronise_consumer_group_offsets?: boolean;
}

export interface AwsMskReplicatorArgsReplicationInfoListTopicReplicationStartingPosition {
  type?: string;
}

export interface AwsMskReplicatorArgsReplicationInfoListTopicReplication {
  copy_access_control_lists_for_topics?: boolean;
  copy_topic_configurations?: boolean;
  detect_and_copy_new_topics?: boolean;
  topics_to_exclude?: string[];
  topics_to_replicate: string[];
  starting_position?: AwsMskReplicatorArgsReplicationInfoListTopicReplicationStartingPosition;
}

export interface AwsMskReplicatorArgsReplicationInfoList {
  source_kafka_cluster_arn: string;
  target_compression_type: string;
  target_kafka_cluster_arn: string;
  consumer_group_replication: AwsMskReplicatorArgsReplicationInfoListConsumerGroupReplication[];
  topic_replication: AwsMskReplicatorArgsReplicationInfoListTopicReplication[];
}

export interface AwsMskReplicatorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsMskReplicatorArgs {
  description?: string;
  replicator_name: string;
  service_execution_role_arn: string;
  tags?: { [key: string]: string };
  kafka_cluster: AwsMskReplicatorArgsKafkaCluster[];
  replication_info_list: AwsMskReplicatorArgsReplicationInfoList;
  timeouts?: AwsMskReplicatorArgsTimeouts;
}

export class aws_msk_replicator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskReplicatorArgs) {
    const meta = {kafka_cluster:{isBlock:true,amazon_msk_cluster:{isBlock:true},vpc_config:{isBlock:true}},replication_info_list:{isBlock:true,consumer_group_replication:{isBlock:true},topic_replication:{isBlock:true,starting_position:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_msk_replicator", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get current_version(): string {
    return `${this.resourceType}.${this.resourceName}.current_version`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get replicator_name(): string {
    return `${this.resourceType}.${this.resourceName}.replicator_name`;
  }

  get service_execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.service_execution_role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
