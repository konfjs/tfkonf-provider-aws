import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsOpensearchserverlessCollectionArgs {
}

export class data_aws_opensearchserverless_collection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsOpensearchserverlessCollectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_opensearchserverless_collection", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get collection_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.collection_endpoint`;
  }

  get created_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_date`;
  }

  get dashboard_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.dashboard_endpoint`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get failure_code(): string {
    return `data.${this.resourceType}.${this.resourceName}.failure_code`;
  }

  get failure_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.failure_message`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get last_modified_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_date`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get standby_replicas(): string {
    return `data.${this.resourceType}.${this.resourceName}.standby_replicas`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
