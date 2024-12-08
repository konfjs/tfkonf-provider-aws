import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKendraIndexArgs {
  id: string;
}

export class data_aws_kendra_index extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKendraIndexArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kendra_index", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get capacity_units(): string {
    return `data.${this.resourceType}.${this.resourceName}.capacity_units`;
  }

  get created_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.created_at`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get document_metadata_configuration_updates(): string {
    return `data.${this.resourceType}.${this.resourceName}.document_metadata_configuration_updates`;
  }

  get edition(): string {
    return `data.${this.resourceType}.${this.resourceName}.edition`;
  }

  get error_message(): string {
    return `data.${this.resourceType}.${this.resourceName}.error_message`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get index_statistics(): string {
    return `data.${this.resourceType}.${this.resourceName}.index_statistics`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get role_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get server_side_encryption_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_side_encryption_configuration`;
  }

  get status(): string {
    return `data.${this.resourceType}.${this.resourceName}.status`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get updated_at(): string {
    return `data.${this.resourceType}.${this.resourceName}.updated_at`;
  }

  get user_context_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_context_policy`;
  }

  get user_group_resolution_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_group_resolution_configuration`;
  }

  get user_token_configurations(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_token_configurations`;
  }
}
