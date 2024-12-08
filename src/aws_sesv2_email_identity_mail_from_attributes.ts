import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityMailFromAttributesArgs {
  behavior_on_mx_failure?: string;
  email_identity: string;
  mail_from_domain?: string;
}

export class aws_sesv2_email_identity_mail_from_attributes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2EmailIdentityMailFromAttributesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_email_identity_mail_from_attributes", resourceName);
  }

  get email_identity(): string {
    return `${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
