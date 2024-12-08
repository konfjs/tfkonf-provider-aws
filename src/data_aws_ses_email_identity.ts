import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesEmailIdentityArgs {
  email: string;
}

export class data_aws_ses_email_identity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSesEmailIdentityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ses_email_identity", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
