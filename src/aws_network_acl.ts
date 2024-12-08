import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkAclArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_network_acl extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsNetworkAclArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_network_acl", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get egress(): string {
    return `${this.resourceType}.${this.resourceName}.egress`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress(): string {
    return `${this.resourceType}.${this.resourceName}.ingress`;
  }

  get owner_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_id`;
  }

  get subnet_ids(): string {
    return `${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
