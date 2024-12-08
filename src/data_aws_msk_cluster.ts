import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskClusterArgs {
  cluster_name: string;
}

export class data_aws_msk_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMskClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_cluster", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get bootstrap_brokers(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers`;
  }

  get bootstrap_brokers_public_sasl_iam(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_iam`;
  }

  get bootstrap_brokers_public_sasl_scram(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_scram`;
  }

  get bootstrap_brokers_public_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_tls`;
  }

  get bootstrap_brokers_sasl_iam(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_iam`;
  }

  get bootstrap_brokers_sasl_scram(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_scram`;
  }

  get bootstrap_brokers_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_tls`;
  }

  get broker_node_group_info(): string {
    return `data.${this.resourceType}.${this.resourceName}.broker_node_group_info`;
  }

  get cluster_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get cluster_uuid(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_uuid`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kafka_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.kafka_version`;
  }

  get number_of_broker_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.number_of_broker_nodes`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get zookeeper_connect_string(): string {
    return `data.${this.resourceType}.${this.resourceName}.zookeeper_connect_string`;
  }

  get zookeeper_connect_string_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.zookeeper_connect_string_tls`;
  }
}
