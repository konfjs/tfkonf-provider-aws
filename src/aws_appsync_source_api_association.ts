import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppsyncSourceApiAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsAppsyncSourceApiAssociationArgs {
  description?: string;
  timeouts?: AwsAppsyncSourceApiAssociationArgsTimeouts;
}

export class aws_appsync_source_api_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppsyncSourceApiAssociationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_appsync_source_api_association", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get association_id(): string {
    return `${this.resourceType}.${this.resourceName}.association_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get merged_api_arn(): string {
    return `${this.resourceType}.${this.resourceName}.merged_api_arn`;
  }

  get merged_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.merged_api_id`;
  }

  get source_api_arn(): string {
    return `${this.resourceType}.${this.resourceName}.source_api_arn`;
  }

  get source_api_association_config(): string {
    return `${this.resourceType}.${this.resourceName}.source_api_association_config`;
  }

  get source_api_id(): string {
    return `${this.resourceType}.${this.resourceName}.source_api_id`;
  }
}
