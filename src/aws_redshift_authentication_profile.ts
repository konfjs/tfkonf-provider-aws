import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftAuthenticationProfileArgs {
  authentication_profile_content: string;
  authentication_profile_name: string;
}

export class aws_redshift_authentication_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRedshiftAuthenticationProfileArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_redshift_authentication_profile", resourceName);
  }

  get authentication_profile_content(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_profile_content`;
  }

  get authentication_profile_name(): string {
    return `${this.resourceType}.${this.resourceName}.authentication_profile_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
