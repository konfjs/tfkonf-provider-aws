import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueDataQualityRulesetArgsTargetTable {
  catalog_id?: string;
  database_name: string;
  table_name: string;
}

export interface AwsGlueDataQualityRulesetArgs {
  description?: string;
  name: string;
  ruleset: string;
  tags?: { [key: string]: string };
  target_table?: AwsGlueDataQualityRulesetArgsTargetTable;
}

export class aws_glue_data_quality_ruleset extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlueDataQualityRulesetArgs) {
    const meta = {target_table:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glue_data_quality_ruleset", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_on(): string {
    return `${this.resourceType}.${this.resourceName}.created_on`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_on(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_on`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get recommendation_run_id(): string {
    return `${this.resourceType}.${this.resourceName}.recommendation_run_id`;
  }

  get ruleset(): string {
    return `${this.resourceType}.${this.resourceName}.ruleset`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
