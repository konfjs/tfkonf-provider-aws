import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationGeofenceCollectionArgs {
  collection_name: string;
}

export class data_aws_location_geofence_collection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsLocationGeofenceCollectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_geofence_collection", resourceName);
  }

  get collection_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.collection_arn`;
  }

  get collection_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.collection_name`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
