import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessCollectionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsOpensearchserverlessCollectionArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsOpensearchserverlessCollectionArgsTimeouts;
}

export class aws_opensearchserverless_collection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessCollectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearchserverless_collection", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get collection_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.collection_endpoint`;
  }

  get dashboard_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.dashboard_endpoint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_arn(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_arn`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get standby_replicas(): string {
    return `${this.resourceType}.${this.resourceName}.standby_replicas`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
