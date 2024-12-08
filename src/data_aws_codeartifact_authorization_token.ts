import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCodeartifactAuthorizationTokenArgs {
  domain: string;
  duration_seconds?: number;
}

export class data_aws_codeartifact_authorization_token extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCodeartifactAuthorizationTokenArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_codeartifact_authorization_token", resourceName);
  }

  get authorization_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorization_token`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get domain_owner(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_owner`;
  }

  get expiration(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
