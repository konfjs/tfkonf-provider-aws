import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxDatabaseArgs {
  description?: string;
  environment_id: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsFinspaceKxDatabaseArgsTimeouts;
}

export class aws_finspace_kx_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFinspaceKxDatabaseArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_database", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get environment_id(): string {
    return `${this.resourceType}.${this.resourceName}.environment_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_timestamp`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
