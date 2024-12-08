import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53DelegationSetArgs {
  reference_name?: string;
}

export class aws_route53_delegation_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53DelegationSetArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_delegation_set", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name_servers(): string {
    return `${this.resourceType}.${this.resourceName}.name_servers`;
  }
}
