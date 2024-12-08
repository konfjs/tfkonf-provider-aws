import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesDomainIdentityArgs {
  domain: string;
}

export class data_aws_ses_domain_identity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSesDomainIdentityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ses_domain_identity", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get verification_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.verification_token`;
  }
}
