import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrPullThroughCacheRuleArgs {
  credential_arn?: string;
  ecr_repository_prefix: string;
  upstream_registry_url: string;
}

export class aws_ecr_pull_through_cache_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEcrPullThroughCacheRuleArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ecr_pull_through_cache_rule", resourceName);
  }

  get ecr_repository_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.ecr_repository_prefix`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get registry_id(): string {
    return `${this.resourceType}.${this.resourceName}.registry_id`;
  }

  get upstream_registry_url(): string {
    return `${this.resourceType}.${this.resourceName}.upstream_registry_url`;
  }
}
