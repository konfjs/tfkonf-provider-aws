import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCloudfrontDistributionArgs {
  id: string;
}

export class data_aws_cloudfront_distribution extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCloudfrontDistributionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cloudfront_distribution", resourceName);
  }

  get aliases(): string {
    return `data.${this.resourceType}.${this.resourceName}.aliases`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get domain_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain_name`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get hosted_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get in_progress_validation_batches(): string {
    return `data.${this.resourceType}.${this.resourceName}.in_progress_validation_batches`;
  }

  get last_modified_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_time`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get web_acl_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.web_acl_id`;
  }
}
