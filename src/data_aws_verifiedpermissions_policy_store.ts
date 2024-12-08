import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsVerifiedpermissionsPolicyStoreArgs {
  id: string;
}

export class data_aws_verifiedpermissions_policy_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsVerifiedpermissionsPolicyStoreArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_verifiedpermissions_policy_store", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_updated_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_updated_date`;
  }

  get validation_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.validation_settings`;
  }
}
