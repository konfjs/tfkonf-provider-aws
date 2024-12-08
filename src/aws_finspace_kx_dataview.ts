import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxDataviewArgsSegmentConfigurations {
  db_paths: string[];
  on_demand?: boolean;
  volume_name: string;
}

export interface AwsFinspaceKxDataviewArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxDataviewArgs {
  auto_update: boolean;
  availability_zone_id?: string;
  az_mode: string;
  changeset_id?: string;
  database_name: string;
  description?: string;
  environment_id: string;
  name: string;
  read_write?: boolean;
  tags?: { [key: string]: string };
  segment_configurations?: AwsFinspaceKxDataviewArgsSegmentConfigurations[];
  timeouts?: AwsFinspaceKxDataviewArgsTimeouts;
}

export class aws_finspace_kx_dataview extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFinspaceKxDataviewArgs) {
    const meta = {segment_configurations:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_dataview", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get auto_update(): string {
    return `${this.resourceType}.${this.resourceName}.auto_update`;
  }

  get az_mode(): string {
    return `${this.resourceType}.${this.resourceName}.az_mode`;
  }

  get created_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.created_timestamp`;
  }

  get database_name(): string {
    return `${this.resourceType}.${this.resourceName}.database_name`;
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

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
