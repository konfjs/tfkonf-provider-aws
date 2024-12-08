import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityArgsDkimSigningAttributes {
  domain_signing_private_key?: string;
  domain_signing_selector?: string;
}

export interface AwsSesv2EmailIdentityArgs {
  configuration_set_name?: string;
  email_identity: string;
  tags?: { [key: string]: string };
  dkim_signing_attributes?: AwsSesv2EmailIdentityArgsDkimSigningAttributes;
}

export class aws_sesv2_email_identity extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2EmailIdentityArgs) {
    const meta = {dkim_signing_attributes:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_email_identity", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get email_identity(): string {
    return `${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_type(): string {
    return `${this.resourceType}.${this.resourceName}.identity_type`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get verified_for_sending_status(): string {
    return `${this.resourceType}.${this.resourceName}.verified_for_sending_status`;
  }
}
