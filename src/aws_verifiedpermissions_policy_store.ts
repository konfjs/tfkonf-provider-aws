import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedpermissionsPolicyStoreArgsValidationSettings {
  mode: string;
}

export interface AwsVerifiedpermissionsPolicyStoreArgs {
  description?: string;
  validation_settings?: AwsVerifiedpermissionsPolicyStoreArgsValidationSettings[];
}

export class aws_verifiedpermissions_policy_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyStoreArgs) {
    const meta = {validation_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedpermissions_policy_store", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_store_id`;
  }
}
