import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainMailFromArgs {
  behavior_on_mx_failure?: string;
  domain: string;
  mail_from_domain: string;
}

export class aws_ses_domain_mail_from extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesDomainMailFromArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_domain_mail_from", resourceName);
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get mail_from_domain(): string {
    return `${this.resourceType}.${this.resourceName}.mail_from_domain`;
  }
}
