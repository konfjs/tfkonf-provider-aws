import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainIdentityArgs {
  domain: string;
}

export class aws_ses_domain_identity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesDomainIdentityArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_domain_identity", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get verification_token(): string {
    return `${this.resourceType}.${this.resourceName}.verification_token`;
  }
}
