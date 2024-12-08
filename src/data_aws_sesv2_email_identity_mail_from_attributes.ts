import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesv2EmailIdentityMailFromAttributesArgs {
  email_identity: string;
}

export class data_aws_sesv2_email_identity_mail_from_attributes extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSesv2EmailIdentityMailFromAttributesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sesv2_email_identity_mail_from_attributes", resourceName);
  }

  get behavior_on_mx_failure(): string {
    return `data.${this.resourceType}.${this.resourceName}.behavior_on_mx_failure`;
  }

  get email_identity(): string {
    return `data.${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get mail_from_domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.mail_from_domain`;
  }
}
