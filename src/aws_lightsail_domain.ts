import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDomainArgs {
  domain_name: string;
}

export class aws_lightsail_domain extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailDomainArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_domain", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
