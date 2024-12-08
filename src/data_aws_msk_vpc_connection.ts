import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskVpcConnectionArgs {
  arn: string;
}

export class data_aws_msk_vpc_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsMskVpcConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_vpc_connection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get authentication(): string {
    return `data.${this.resourceType}.${this.resourceName}.authentication`;
  }

  get client_subnets(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_subnets`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get security_groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_groups`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get target_cluster_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_cluster_arn`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
