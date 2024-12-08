import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskVpcConnectionArgs {
  authentication: string;
  client_subnets: string[];
  security_groups: string[];
  tags?: { [key: string]: string };
  target_cluster_arn: string;
  vpc_id: string;
}

export class aws_msk_vpc_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMskVpcConnectionArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_msk_vpc_connection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication(): string {
    return `${this.resourceType}.${this.resourceName}.authentication`;
  }

  get client_subnets(): string {
    return `${this.resourceType}.${this.resourceName}.client_subnets`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get security_groups(): string {
    return `${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get target_cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.target_cluster_arn`;
  }

  get vpc_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
