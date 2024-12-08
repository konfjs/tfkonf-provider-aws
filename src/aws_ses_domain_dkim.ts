import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainDkimArgs {
  domain: string;
}

export class aws_ses_domain_dkim extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesDomainDkimArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_domain_dkim", resourceName);
  }

  get dkim_tokens(): string {
    return `${this.resourceType}.${this.resourceName}.dkim_tokens`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
