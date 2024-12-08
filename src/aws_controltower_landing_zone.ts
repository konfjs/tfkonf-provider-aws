import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsControltowerLandingZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsControltowerLandingZoneArgs {
  manifest_json: string;
  tags?: { [key: string]: string };
  version: string;
  timeouts?: AwsControltowerLandingZoneArgsTimeouts;
}

export class aws_controltower_landing_zone extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsControltowerLandingZoneArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_controltower_landing_zone", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get drift_status(): string {
    return `${this.resourceType}.${this.resourceName}.drift_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get latest_available_version(): string {
    return `${this.resourceType}.${this.resourceName}.latest_available_version`;
  }

  get manifest_json(): string {
    return `${this.resourceType}.${this.resourceName}.manifest_json`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
