import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmParameterArgs {
  name: string;
  with_decryption?: boolean;
}

export class data_aws_ssm_parameter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmParameterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssm_parameter", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get insecure_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.insecure_value`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get value(): string {
    return `data.${this.resourceType}.${this.resourceName}.value`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
