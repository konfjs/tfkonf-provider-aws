import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmParametersByPathArgs {
  path: string;
  recursive?: boolean;
  with_decryption?: boolean;
}

export class data_aws_ssm_parameters_by_path extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmParametersByPathArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssm_parameters_by_path", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get names(): string {
    return `data.${this.resourceType}.${this.resourceName}.names`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get types(): string {
    return `data.${this.resourceType}.${this.resourceName}.types`;
  }

  get values(): string {
    return `data.${this.resourceType}.${this.resourceName}.values`;
  }
}
