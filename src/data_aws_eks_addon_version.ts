import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEksAddonVersionArgs {
  addon_name: string;
  kubernetes_version: string;
  most_recent?: boolean;
}

export class data_aws_eks_addon_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEksAddonVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_eks_addon_version", resourceName);
  }

  get addon_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.addon_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kubernetes_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.kubernetes_version`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
