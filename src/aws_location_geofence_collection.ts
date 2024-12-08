import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationGeofenceCollectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLocationGeofenceCollectionArgs {
  collection_name: string;
  description?: string;
  kms_key_id?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsLocationGeofenceCollectionArgsTimeouts;
}

export class aws_location_geofence_collection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsLocationGeofenceCollectionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_location_geofence_collection", resourceName);
  }

  get collection_arn(): string {
    return `${this.resourceType}.${this.resourceName}.collection_arn`;
  }

  get collection_name(): string {
    return `${this.resourceType}.${this.resourceName}.collection_name`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
