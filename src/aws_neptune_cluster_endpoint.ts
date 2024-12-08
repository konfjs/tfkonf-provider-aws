import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNeptuneClusterEndpointArgs {
  cluster_endpoint_identifier: string;
  cluster_identifier: string;
  endpoint_type: string;
  excluded_members?: string[];
  static_members?: string[];
  tags?: { [key: string]: string };
}

export class aws_neptune_cluster_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsNeptuneClusterEndpointArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_neptune_cluster_endpoint", resourceName);
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

  get endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint`;
  }

  get endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
