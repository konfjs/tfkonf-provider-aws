import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesEmailIdentityArgs {
  email: string;
}

export class aws_ses_email_identity extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSesEmailIdentityArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ses_email_identity", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
