import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRdsClusterEndpointArgs {
  cluster_endpoint_identifier: string;
  cluster_identifier: string;
  custom_endpoint_type: string;
  excluded_members?: string[];
  static_members?: string[];
  tags?: { [key: string]: string };
}

export class aws_rds_cluster_endpoint extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsRdsClusterEndpointArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_rds_cluster_endpoint", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_endpoint_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_endpoint_identifier`;
  }

  get cluster_identifier(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_identifier`;
  }

  get custom_endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.custom_endpoint_type`;
  }

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
