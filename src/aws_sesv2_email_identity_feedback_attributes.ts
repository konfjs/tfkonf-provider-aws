import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityFeedbackAttributesArgs {
  email_forwarding_enabled?: boolean;
  email_identity: string;
}

export class aws_sesv2_email_identity_feedback_attributes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2EmailIdentityFeedbackAttributesArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_email_identity_feedback_attributes", resourceName);
  }

  get email_identity(): string {
    return `${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
