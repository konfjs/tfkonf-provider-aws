import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLakeformationLfTagArgs {
  key: string;
  values: string[];
}

export class aws_lakeformation_lf_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLakeformationLfTagArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lakeformation_lf_tag", resourceName);
  }

  get catalog_id(): string {
    return `${this.resourceType}.${this.resourceName}.catalog_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get values(): string {
    return `${this.resourceType}.${this.resourceName}.values`;
  }
}
