import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrpublicAuthorizationTokenArgs {
}

export class data_aws_ecrpublic_authorization_token extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcrpublicAuthorizationTokenArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecrpublic_authorization_token", resourceName);
  }

  get authorization_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.authorization_token`;
  }

  get expires_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.expires_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get password(): string {
    return `data.${this.resourceType}.${this.resourceName}.password`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }
}
