import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIotRegistrationCodeArgs {
}

export class data_aws_iot_registration_code extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIotRegistrationCodeArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iot_registration_code", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get registration_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.registration_code`;
  }
}
