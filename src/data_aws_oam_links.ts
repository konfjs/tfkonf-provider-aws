import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOamLinksArgs {
}

export class data_aws_oam_links extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsOamLinksArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_oam_links", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
