import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncDomainNameArgs {
  certificate_arn: string;
  description?: string;
  domain_name: string;
}

export class aws_appsync_domain_name extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppsyncDomainNameArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appsync_domain_name", resourceName);
  }

  get appsync_domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.appsync_domain_name`;
  }

  get certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_arn`;
  }

  get domain_name(): string {
    return `${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
