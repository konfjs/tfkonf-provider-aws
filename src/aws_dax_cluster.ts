import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDaxClusterArgsServerSideEncryption {
  enabled?: boolean;
}

export interface AwsDaxClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDaxClusterArgs {
  availability_zones?: string[];
  cluster_endpoint_encryption_type?: string;
  cluster_name: string;
  description?: string;
  iam_role_arn: string;
  node_type: string;
  notification_topic_arn?: string;
  replication_factor: number;
  tags?: { [key: string]: string };
  server_side_encryption?: AwsDaxClusterArgsServerSideEncryption;
  timeouts?: AwsDaxClusterArgsTimeouts;
}

export class aws_dax_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDaxClusterArgs) {
    const meta = {server_side_encryption:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_dax_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_address(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_address`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get configuration_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.configuration_endpoint`;
  }

  get iam_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.iam_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get maintenance_window(): string {
    return `${this.resourceType}.${this.resourceName}.maintenance_window`;
  }

  get node_type(): string {
    return `${this.resourceType}.${this.resourceName}.node_type`;
  }

  get nodes(): string {
    return `${this.resourceType}.${this.resourceName}.nodes`;
  }

  get parameter_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.parameter_group_name`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get replication_factor(): string {
    return `${this.resourceType}.${this.resourceName}.replication_factor`;
  }

  get security_group_ids(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_group_name(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_group_name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
