import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAccessanalyzerArchiveRuleArgsFilter {
  criteria: string;
}

export interface AwsAccessanalyzerArchiveRuleArgs {
  analyzer_name: string;
  rule_name: string;
  filter: AwsAccessanalyzerArchiveRuleArgsFilter[];
}

export class aws_accessanalyzer_archive_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAccessanalyzerArchiveRuleArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_accessanalyzer_archive_rule", resourceName);
  }

  get analyzer_name(): string {
    return `${this.resourceType}.${this.resourceName}.analyzer_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get rule_name(): string {
    return `${this.resourceType}.${this.resourceName}.rule_name`;
  }
}
