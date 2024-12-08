import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainIdentityVerificationArgsTimeouts {
  create?: string;
}

export interface AwsSesDomainIdentityVerificationArgs {
  domain: string;
  timeouts?: AwsSesDomainIdentityVerificationArgsTimeouts;
}

export class aws_ses_domain_identity_verification extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesDomainIdentityVerificationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_ses_domain_identity_verification", resourceName);
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
}
