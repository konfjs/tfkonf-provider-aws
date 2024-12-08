import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsEmrcontainersVirtualClusterArgs {
  virtual_cluster_id: string;
}

export class data_aws_emrcontainers_virtual_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsEmrcontainersVirtualClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_emrcontainers_virtual_cluster", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get container_provider(): string {
    return `data.${this.resourceType}.${this.resourceName}.container_provider`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get virtual_cluster_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.virtual_cluster_id`;
  }
}
