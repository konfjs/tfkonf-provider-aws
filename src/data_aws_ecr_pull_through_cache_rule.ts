import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEcrPullThroughCacheRuleArgs {
  ecr_repository_prefix: string;
}

export class data_aws_ecr_pull_through_cache_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsEcrPullThroughCacheRuleArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ecr_pull_through_cache_rule", resourceName);
  }

  get credential_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.credential_arn`;
  }

  get ecr_repository_prefix(): string {
    return `data.${this.resourceType}.${this.resourceName}.ecr_repository_prefix`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get upstream_registry_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.upstream_registry_url`;
  }
}
