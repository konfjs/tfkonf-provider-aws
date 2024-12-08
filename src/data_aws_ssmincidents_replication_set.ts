import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsSsmincidentsReplicationSetArgs {
}

export class data_aws_ssmincidents_replication_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsSsmincidentsReplicationSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_ssmincidents_replication_set", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_by(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_by`;
  }

  get deletion_protected(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protected`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_by(): string {
    return `data.${this.resourceType}.${this.resourceName}.last_modified_by`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
