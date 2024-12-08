import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOpensearchserverlessVpcEndpointArgs {
  vpc_endpoint_id: string;
}

export class data_aws_opensearchserverless_vpc_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOpensearchserverlessVpcEndpointArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_opensearchserverless_vpc_endpoint", resourceName);
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get security_group_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.security_group_ids`;
  }

  get subnet_ids(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnet_ids`;
  }

  get vpc_endpoint_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }

  get vpc_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.vpc_id`;
  }
}
