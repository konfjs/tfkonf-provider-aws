import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSesv2EmailIdentityArgs {
  email_identity: string;
}

export class data_aws_sesv2_email_identity extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsSesv2EmailIdentityArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_sesv2_email_identity", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get configuration_set_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.configuration_set_name`;
  }

  get dkim_signing_attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.dkim_signing_attributes`;
  }

  get email_identity(): string {
    return `data.${this.resourceType}.${this.resourceName}.email_identity`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get identity_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.identity_type`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get verified_for_sending_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.verified_for_sending_status`;
  }
}
