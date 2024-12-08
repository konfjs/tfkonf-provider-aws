import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsRoute53DelegationSetArgs {
  id: string;
}

export class data_aws_route53_delegation_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsRoute53DelegationSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_route53_delegation_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get caller_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.caller_reference`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_servers`;
  }
}
