import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsInspectorRulesPackagesArgs {
}

export class data_aws_inspector_rules_packages extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsInspectorRulesPackagesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_inspector_rules_packages", resourceName);
  }

  get arns(): string {
    return `data.${this.resourceType}.${this.resourceName}.arns`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
