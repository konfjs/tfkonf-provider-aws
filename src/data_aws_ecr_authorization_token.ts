import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrAuthorizationTokenArgs {
  registry_id?: string;
}

export class data_aws_ecr_authorization_token extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcrAuthorizationTokenArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_authorization_token", resourceName);
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

  get proxy_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.proxy_endpoint`;
  }

  get user_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_name`;
  }
}
