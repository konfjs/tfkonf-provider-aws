import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsControltowerControlsArgs {
  target_identifier: string;
}

export class data_aws_controltower_controls extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsControltowerControlsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_controltower_controls", resourceName);
  }

  get enabled_controls(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_controls`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get target_identifier(): string {
    return `data.${this.resourceType}.${this.resourceName}.target_identifier`;
  }
}
