import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxVolumeArgsNas1Configuration {
  size: number;
  type: string;
}

export interface AwsFinspaceKxVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxVolumeArgs {
  availability_zones: string[];
  az_mode: string;
  description?: string;
  environment_id: string;
  name: string;
  tags?: { [key: string]: string };
  type: string;
  nas1_configuration?: AwsFinspaceKxVolumeArgsNas1Configuration[];
  timeouts?: AwsFinspaceKxVolumeArgsTimeouts;
}

export class aws_finspace_kx_volume extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsFinspaceKxVolumeArgs) {
    const meta = {nas1_configuration:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_finspace_kx_volume", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get attached_clusters(): string {
    return `${this.resourceType}.${this.resourceName}.attached_clusters`;
  }

  get availability_zones(): string {
    return `${this.resourceType}.${this.resourceName}.availability_zones`;
  }

  get az_mode(): string {
    return `${this.resourceType}.${this.resourceName}.az_mode`;
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

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get status_reason(): string {
    return `${this.resourceType}.${this.resourceName}.status_reason`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
